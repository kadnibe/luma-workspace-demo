export type LocalUser = {
  name: string;
  email: string;
  passwordHash: string;
};

const USERS_KEY = "luma_users";
const SESSION_KEY = "luma_session";

function readUsers(): LocalUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]") as LocalUser[];
  } catch {
    return [];
  }
}

async function hashPassword(password: string) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

export async function registerUser(name: string, email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = readUsers();

  if (users.some((user) => user.email === normalizedEmail)) {
    throw new Error("Аккаунт с такой почтой уже существует");
  }

  const user: LocalUser = {
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: await hashPassword(password),
  };

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  localStorage.setItem(SESSION_KEY, normalizedEmail);
  return user;
}

export async function loginUser(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const passwordHash = await hashPassword(password);
  const user = readUsers().find(
    (item) => item.email === normalizedEmail && item.passwordHash === passwordHash,
  );

  if (!user) {
    throw new Error("Неверная почта или пароль");
  }

  localStorage.setItem(SESSION_KEY, normalizedEmail);
  return user;
}

export function getCurrentUser() {
  const email = localStorage.getItem(SESSION_KEY);
  return email ? readUsers().find((user) => user.email === email) ?? null : null;
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY);
}
