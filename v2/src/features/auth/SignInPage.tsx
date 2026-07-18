import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { signIn } from '@/services/auth'
import { useAuthStore } from '@/stores/authStore'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})
type FormData = z.infer<typeof schema>

export function SignInPage() {
  const navigate = useNavigate()
  const setUser = useAuthStore(s => s.setUser)
  const [showPw, setShowPw] = useState(false)
  const [authError, setAuthError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setAuthError('')
      const user = await signIn(data.email, data.password)
      setUser(user)
      if (!user.onboardingComplete) navigate('/onboarding', { replace: true })
      else navigate('/app/dashboard', { replace: true })
    } catch (e: unknown) {
      setAuthError(e instanceof Error ? e.message : 'Sign in failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500 mb-3 shadow-glow">
            <span className="text-2xl font-display font-black text-white">T</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Welcome back</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Sign in to your TopG account</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-card-lg p-6 space-y-4">
          {authError && (
            <div className="bg-danger-50 dark:bg-danger-900/20 text-danger-600 dark:text-danger-400 text-sm rounded-xl px-4 py-3">
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@fuoye.edu.ng"
              leftIcon={<Mail size={16} />}
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="Password"
              type={showPw ? 'text' : 'password'}
              placeholder="••••••••"
              leftIcon={<Lock size={16} />}
              error={errors.password?.message}
              rightIcon={
                <button type="button" onClick={() => setShowPw(!showPw)} className="text-slate-400 hover:text-slate-600">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
              {...register('password')}
            />
            <div className="text-right">
              <Link to="/auth/forgot-password" className="text-xs text-primary-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" fullWidth loading={isSubmitting}>
              Sign In
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-6">
          Don't have an account?{' '}
          <Link to="/auth/signup" className="text-primary-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
