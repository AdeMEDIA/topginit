import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500 mb-3 shadow-glow">
            <span className="text-2xl font-display font-black text-white">T</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Reset password</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We'll send a reset link to your email</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-card-lg p-6">
          {sent ? (
            <div className="text-center py-4 space-y-3">
              <CheckCircle size={48} className="text-success-500 mx-auto" />
              <p className="font-medium text-slate-800 dark:text-white">Check your email</p>
              <p className="text-sm text-slate-500">If an account exists for <strong>{email}</strong>, we sent a reset link.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="you@fuoye.edu.ng"
                leftIcon={<Mail size={16} />}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <Button type="submit" fullWidth>Send Reset Link</Button>
            </form>
          )}
        </div>

        <div className="text-center mt-6">
          <Link to="/auth/signin" className="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:underline">
            <ArrowLeft size={14} /> Back to sign in
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
