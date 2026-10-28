interface RateLimitRecord {
  tokens: number;
  lastRefill: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodically clean up stale entries to prevent memory leaks (every 5 minutes)
if (typeof setInterval !== "undefined") {
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitStore.entries()) {
      // If idle for over 15 minutes, delete
      if (now - record.lastRefill > 15 * 60 * 1000) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);

  // Allow Node process to exit without waiting for timer
  if (cleanupInterval.unref) {
    cleanupInterval.unref();
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  reset: number;
}

/**
 * Sliding window token bucket rate limiter.
 * @param key Unique identifier (e.g. client IP + route)
 * @param limit Maximum number of requests allowed in window
 * @param windowMs Time window in milliseconds
 */
export function checkRateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 60000
): RateLimitResult {
  const now = Date.now();
  let record = rateLimitStore.get(key);

  if (!record) {
    record = { tokens: limit, lastRefill: now };
    rateLimitStore.set(key, record);
  }

  // Refill tokens based on elapsed time
  const timeElapsed = now - record.lastRefill;
  if (timeElapsed > windowMs) {
    record.tokens = limit;
    record.lastRefill = now;
  }

  if (record.tokens > 0) {
    record.tokens -= 1;
    return {
      allowed: true,
      remaining: record.tokens,
      reset: record.lastRefill + windowMs,
    };
  }

  return {
    allowed: false,
    remaining: 0,
    reset: record.lastRefill + windowMs,
  };
}
