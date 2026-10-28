export interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  deliveryStatus: string;
  createdAt: string;
}

// Global in-memory storage for local dev / fallback
const inMemoryMessages: ContactMessageRecord[] = [];

export function recordMessage(record: ContactMessageRecord): void {
  inMemoryMessages.unshift(record);
  // Keep last 100 in memory
  if (inMemoryMessages.length > 100) {
    inMemoryMessages.pop();
  }
}

export function getInMemoryMessages(): ContactMessageRecord[] {
  return inMemoryMessages;
}
