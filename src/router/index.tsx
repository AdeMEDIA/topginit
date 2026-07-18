import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import { AppShell } from '@/components/layout/AppShell'
import { SignInPage } from '@/features/auth/SignInPage'
import { SignUpPage } from '@/features/auth/SignUpPage'
import { ForgotPasswordPage } from '@/features/auth/ForgotPasswordPage'
import { OnboardingPage } from '@/features/auth/OnboardingPage'
import { DashboardPage } from '@/features/dashboard/DashboardPage'
import { PracticePage } from '@/features/practice/PracticePage'
import { CourseDetailPage } from '@/features/practice/CourseDetailPage'
import { ExamPage } from '@/features/practice/ExamPage'
import { ResultPage } from '@/features/practice/ResultPage'
import { GamesPage } from '@/features/games/GamesPage'
import { MillionairePage } from '@/features/games/MillionairePage'
import { DailyChallengePage } from '@/features/games/DailyChallengePage'
import { TimeAttackPage } from '@/features/games/TimeAttackPage'
import { AnalyticsPage } from '@/features/analytics/AnalyticsPage'
import { LeaderboardPage } from '@/features/leaderboard/LeaderboardPage'
import { ProfilePage } from '@/features/profile/ProfilePage'

function AuthGuard() {
  const { user, isLoaded } = useAuthStore()
  if (!isLoaded) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
  if (!user) return <Navigate to="/auth/signin" replace />
  if (!user.onboardingComplete) return <Navigate to="/onboarding" replace />
  return <Outlet />
}

function OnboardingGuard() {
  const { user } = useAuthStore()
  if (!user) return <Navigate to="/auth/signin" replace />
  if (user.onboardingComplete) return <Navigate to="/app/dashboard" replace />
  return <Outlet />
}

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/auth/signin" replace /> },
  {
    path: '/auth',
    element: <Outlet />,
    children: [
      { path: 'signin',          element: <SignInPage /> },
      { path: 'signup',          element: <SignUpPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: '/onboarding',
    element: <OnboardingGuard />,
    children: [{ index: true, element: <OnboardingPage /> }],
  },
  {
    path: '/app',
    element: <AuthGuard />,
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true,               element: <Navigate to="/app/dashboard" replace /> },
          { path: 'dashboard',         element: <DashboardPage /> },
          { path: 'practice',          element: <PracticePage /> },
          { path: 'practice/:courseId', element: <CourseDetailPage /> },
          { path: 'games',             element: <GamesPage /> },
          { path: 'games/millionaire', element: <MillionairePage /> },
          { path: 'games/daily',       element: <DailyChallengePage /> },
          { path: 'games/timeattack',  element: <TimeAttackPage /> },
          { path: 'analytics',         element: <AnalyticsPage /> },
          { path: 'leaderboard',       element: <LeaderboardPage /> },
          { path: 'profile',           element: <ProfilePage /> },
          { path: 'settings',          element: <ProfilePage /> },
          { path: 'result/:resultId',  element: <ResultPage /> },
        ],
      },
      // Exam runs full-screen outside the AppShell
      { path: 'exam/:courseId', element: <ExamPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/auth/signin" replace /> },
])
