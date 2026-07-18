import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, GraduationCap, Building2, Layers, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FACULTIES } from '@/data/faculties'
import { useAuthStore } from '@/stores/authStore'
import { cn } from '@/lib/utils'

const LEVELS = ['100', '200', '300', '400', '500'] as const
const SEMESTERS = ['1st', '2nd'] as const

interface Selections {
  faculty: string
  department: string
  level: string
  semester: string
}

const STEPS = [
  { icon: Building2, title: 'Your Faculty',   subtitle: 'Select your faculty' },
  { icon: GraduationCap, title: 'Your Department', subtitle: 'Select your department' },
  { icon: Layers, title: 'Your Level',    subtitle: 'What level are you?' },
  { icon: Calendar, title: 'Your Semester', subtitle: 'Current semester' },
]

export function OnboardingPage() {
  const navigate = useNavigate()
  const { user, updateUser } = useAuthStore()
  const [step, setStep] = useState(0)
  const [sel, setSel] = useState<Selections>({ faculty: '', department: '', level: '', semester: '' })
  const [direction, setDirection] = useState(1)

  if (!user) { navigate('/auth/signin', { replace: true }); return null }

  const selectedFaculty = FACULTIES.find(f => f.id === sel.faculty)
  const canNext = [
    !!sel.faculty,
    !!sel.department,
    !!sel.level,
    !!sel.semester,
  ][step]

  const goNext = () => {
    if (step < 3) { setDirection(1); setStep(s => s + 1) }
    else finish()
  }
  const goPrev = () => { setDirection(-1); setStep(s => s - 1) }

  const finish = () => {
    updateUser({
      faculty: sel.faculty,
      department: sel.department,
      level: sel.level as '100',
      semester: sel.semester as '1st',
      onboardingComplete: true,
    })
    navigate('/app/dashboard', { replace: true })
  }

  const variants = {
    enter: { opacity: 0, x: direction * 40 },
    center: { opacity: 1, x: 0 },
    exit:  { opacity: 0, x: direction * -40 },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <div className="w-full max-w-sm">
        {/* Progress */}
        <div className="flex gap-1.5 mb-6">
          {STEPS.map((_, i) => (
            <div key={i} className={cn('h-1 rounded-full flex-1 transition-all duration-300', i <= step ? 'bg-primary-500' : 'bg-slate-200 dark:bg-slate-700')} />
          ))}
        </div>

        {/* Step content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-card-lg p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                {(() => { const { icon: Icon } = STEPS[step]; return <div className="p-2.5 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-500"><Icon size={20} /></div> })()}
                <div>
                  <h2 className="font-display font-bold text-slate-900 dark:text-white">{STEPS[step].title}</h2>
                  <p className="text-xs text-slate-500">{STEPS[step].subtitle}</p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {step === 0 && FACULTIES.map(f => (
                  <OptionButton key={f.id} selected={sel.faculty === f.id} onClick={() => setSel(s => ({ ...s, faculty: f.id, department: '' }))}>
                    {f.name}
                  </OptionButton>
                ))}
                {step === 1 && (selectedFaculty?.departments ?? []).map(d => (
                  <OptionButton key={d.id} selected={sel.department === d.id} onClick={() => setSel(s => ({ ...s, department: d.id }))}>
                    {d.name}
                  </OptionButton>
                ))}
                {step === 2 && LEVELS.map(l => (
                  <OptionButton key={l} selected={sel.level === l} onClick={() => setSel(s => ({ ...s, level: l }))}>
                    {l}L
                  </OptionButton>
                ))}
                {step === 3 && SEMESTERS.map(sm => (
                  <OptionButton key={sm} selected={sel.semester === sm} onClick={() => setSel(s => ({ ...s, semester: sm }))}>
                    {sm} Semester
                  </OptionButton>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex gap-3 mt-4">
          {step > 0 && (
            <Button variant="outline" onClick={goPrev} className="flex-1">
              <ChevronLeft size={16} /> Back
            </Button>
          )}
          <Button onClick={goNext} disabled={!canNext} className="flex-1">
            {step === 3 ? 'Get Started' : 'Next'} <ChevronRight size={16} />
          </Button>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">Step {step + 1} of 4</p>
      </div>
    </div>
  )
}

function OptionButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all',
        selected
          ? 'bg-primary-500 text-white shadow-glow'
          : 'bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20',
      )}
    >
      {children}
    </button>
  )
}
