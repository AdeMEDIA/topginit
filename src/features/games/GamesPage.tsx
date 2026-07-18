import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, Calendar, Timer, ChevronRight, Coins } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { isTodayPlayed, secondsUntilMidnight } from '@/services/games'
import { formatTime } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.07 } } },
  item: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
}

interface GameCardProps {
  title: string
  description: string
  reward: string
  icon: React.ReactNode
  gradient: string
  onClick: () => void
  badge?: React.ReactNode
}

function GameCard({ title, description, reward, icon, gradient, onClick, badge }: GameCardProps) {
  return (
    <motion.button
      variants={stagger.item}
      onClick={onClick}
      className="w-full text-left"
      whileTap={{ scale: 0.98 }}
    >
      <Card padding="md" className="flex items-center gap-4 hover:shadow-lg transition-shadow active:scale-[0.99]">
        <div className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center shrink-0 shadow-sm`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="font-bold text-slate-900 dark:text-white text-sm">{title}</p>
            {badge}
          </div>
          <p className="text-xs text-slate-400 leading-snug">{description}</p>
          <p className="text-xs text-warning-500 font-medium mt-1">{reward}</p>
        </div>
        <ChevronRight size={16} className="text-slate-300 dark:text-slate-600 shrink-0" />
      </Card>
    </motion.button>
  )
}

export function GamesPage() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const dailyPlayed = isTodayPlayed()
  const countdown = secondsUntilMidnight()

  return (
    <motion.div variants={stagger.container} initial="initial" animate="animate" className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-display font-bold text-slate-900 dark:text-white">Games</h1>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-warning-500">
          <Coins size={16} />
          <span>{user?.coins ?? 0}</span>
        </div>
      </div>

      <motion.div variants={stagger.item} className="space-y-3">
        <GameCard
          title="Who Wants to Be a Millionaire?"
          description="15 questions, prize ladder up to ₦50M. Use lifelines wisely."
          reward="Up to +50,000 XP · +5,000 coins"
          icon={<Trophy size={26} className="text-white" />}
          gradient="bg-gradient-to-br from-yellow-400 to-orange-500"
          onClick={() => navigate('/app/games/millionaire')}
        />
        <GameCard
          title="Daily Challenge"
          description="10 fresh questions every day. Same set for everyone."
          reward="+100 XP · +20 coins daily"
          icon={<Calendar size={26} className="text-white" />}
          gradient="bg-gradient-to-br from-primary-500 to-secondary-500"
          onClick={() => navigate('/app/games/daily')}
          badge={
            dailyPlayed
              ? <Badge variant="success" className="text-[10px] py-0">Done ✓</Badge>
              : <Badge variant="warning" className="text-[10px] py-0">New</Badge>
          }
        />
        <GameCard
          title="Time Attack"
          description="Answer as many as possible in 60 seconds. Correct = +2s, Wrong = −3s."
          reward="+5 XP per correct · +1 coin"
          icon={<Timer size={26} className="text-white" />}
          gradient="bg-gradient-to-br from-danger-500 to-pink-500"
          onClick={() => navigate('/app/games/timeattack')}
        />
      </motion.div>

      {dailyPlayed && (
        <motion.div variants={stagger.item}>
          <Card padding="sm" className="flex items-center gap-3 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-700">
            <Calendar size={16} className="text-primary-500 shrink-0" />
            <p className="text-xs text-primary-600 dark:text-primary-300">
              Daily Challenge resets in <strong>{formatTime(countdown)}</strong>
            </p>
          </Card>
        </motion.div>
      )}

      <motion.div variants={stagger.item}>
        <p className="text-xs text-center text-slate-400 px-4">
          All games use real exam questions from your courses.
          Scores and XP earned here count toward your leaderboard ranking.
        </p>
      </motion.div>
    </motion.div>
  )
}
