export interface ContactPayload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
}

export interface ValidatedContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  success: boolean;
  data?: ValidatedContactData;
  errors?: string[];
}

/**
 * Sanitizes input string to prevent HTML/script injection.
 */
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function validateContactPayload(payload: unknown): ValidationResult {
  const errors: string[] = [];

  if (!payload || typeof payload !== "object") {
    return { success: false, errors: ["Invalid request body. Expected JSON object."] };
  }

  const { name, email, subject, message } = payload as ContactPayload;

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long.");
  } else if (name.length > 100) {
    errors.push("Name cannot exceed 100 characters.");
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    errors.push("Please provide a valid email address.");
  } else if (email.length > 255) {
    errors.push("Email cannot exceed 255 characters.");
  }

  let sanitizedSubject = "General Inquiry";
  if (typeof subject === "string" && subject.trim().length > 0) {
    if (subject.length > 150) {
      errors.push("Subject cannot exceed 150 characters.");
    } else {
      sanitizedSubject = sanitizeString(subject);
    }
  }

  if (typeof message !== "string" || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long.");
  } else if (message.length > 3000) {
    errors.push("Message cannot exceed 3,000 characters.");
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      name: sanitizeString(name as string),
      email: (email as string).trim().toLowerCase(),
      subject: sanitizedSubject,
      message: sanitizeString(message as string),
    },
  };
}
