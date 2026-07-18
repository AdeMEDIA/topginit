import type { User } from '@/types/user'
import { STORAGE_KEYS } from '@/lib/constants'
import { generateId } from '@/lib/utils'

export class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

interface StoredCredentials {
  email: string
  passwordHash: string
  userId: string
}

function hashPassword(pw: string): string {
  return btoa(unescape(encodeURIComponent(pw)))
}

function getCredentials(): StoredCredentials[] {
  try {
    return JSON.parse(localStorage.getItem('topg_creds') || '[]')
  } catch {
    return []
  }
}

function saveCredentials(creds: StoredCredentials[]) {
  localStorage.setItem('topg_creds', JSON.stringify(creds))
}

export async function signUp(email: string, password: string, name: string): Promise<User> {
  const creds = getCredentials()
  if (creds.find(c => c.email === email)) {
    throw new AuthError('An account with this email already exists.')
  }
  if (password.length < 6) {
    throw new AuthError('Password must be at least 6 characters.')
  }
  const userId = generateId()
  const newUser: User = {
    id: userId,
    name,
    email,
    faculty: '',
    department: '',
    level: '100',
    semester: '1st',
    xp: 0,
    coins: 0,
    streak: 0,
    lastActive: new Date().toISOString(),
    preferences: { theme: 'system', notifications: true },
    onboardingComplete: false,
  }
  creds.push({ email, passwordHash: hashPassword(password), userId })
  saveCredentials(creds)
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser))
  return newUser
}

export async function signIn(email: string, password: string): Promise<User> {
  const creds = getCredentials()
  const match = creds.find(c => c.email === email && c.passwordHash === hashPassword(password))
  if (!match) {
    throw new AuthError('Incorrect email or password.')
  }
  const stored = localStorage.getItem(STORAGE_KEYS.USER)
  if (!stored) throw new AuthError('Account data not found.')
  return JSON.parse(stored) as User
}

export async function signOut(): Promise<void> {
  localStorage.removeItem(STORAGE_KEYS.USER)
}

export function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

export function saveUser(user: User): void {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
}
