export interface User {
  id: string
  name: string
  email: string
  faculty: string
  department: string
  level: '100' | '200' | '300' | '400' | '500'
  semester: '1st' | '2nd'
  matricNo?: string
  avatarUrl?: string
  xp: number
  coins: number
  streak: number
  lastActive: string
  preferences: {
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
  }
  onboardingComplete: boolean
}

export type AuthUser = Pick<User, 'id' | 'name' | 'email'>
