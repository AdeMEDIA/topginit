import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Hash, CheckSquare, Square } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ProgressRing } from '@/components/ui/ProgressRing'
import { getCourseById } from '@/data/courses'
import { getResults } from '@/services/db'
import type { Topic } from '@/types/course'

const TIME_OPTIONS = [10, 15, 20, 30, 45, 60]

export function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>()
  const navigate = useNavigate()
  const course = getCourseById(courseId ?? '')

  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [questionCount, setQuestionCount] = useState(20)
  const [timeLimit, setTimeLimit] = useState(20)
  const [mode, setMode] = useState<'exam' | 'practice'>('exam')

  useEffect(() => {
    if (course?.topics.length) setSelectedTopics(course.topics.map(t => t.id))
  }, [course])

  if (!course) return <div className="text-center py-16 text-slate-400">Course not found</div>

  const results = getResults().filter(r => r.courseId === course.id)
  const avgScore = results.length > 0
    ? Math.round(results.reduce((s, r) => s + r.score, 0) / results.length) : 0

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedTopics(selectedTopics.length === course.topics.length ? [] : course.topics.map(t => t.id))
  }

  const maxQ = selectedTopics.reduce((sum, tid) => {
    const t = course.topics.find(t => t.id === tid)
    return sum + (t?.qCount ?? 0)
  }, 0)

  const startExam = () => {
    if (!selectedTopics.length) return
    const params = new URLSearchParams({
      topics: selectedTopics.join(','),
      count: String(Math.min(questionCount, maxQ || questionCount)),
      time: String(timeLimit),
      mode,
    })
    navigate(`/app/exam/${course.id}?${params.toString()}`)
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/app/practice')} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-display font-bold text-slate-900 dark:text-white truncate">{course.name}</h1>
          <p className="text-xs text-slate-400">{course.code} • {course.qCount} questions</p>
        </div>
        {results.length > 0 && (
          <ProgressRing value={avgScore} size={44} strokeWidth={4}>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300">{avgScore}%</span>
          </ProgressRing>
        )}
      </div>

      {/* Topics */}
      <Card padding="none">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Topics</p>
          <button onClick={toggleAll} className="text-xs text-primary-500 font-medium">
            {selectedTopics.length === course.topics.length ? 'Deselect all' : 'Select all'}
          </button>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-700">
          {course.topics.map((topic, i) => (
            <TopicRow
              key={topic.id}
              topic={topic}
              index={i}
              selected={selectedTopics.includes(topic.id)}
              onToggle={() => toggleTopic(topic.id)}
            />
          ))}
        </div>
      </Card>

      {/* Config */}
      <Card padding="md" className="space-y-4">
        {/* Mode */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Mode</p>
          <div className="grid grid-cols-2 gap-2">
            {(['exam', 'practice'] as const).map(m => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium capitalize transition-all ${mode === m ? 'bg-primary-500 text-white shadow-glow' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
              >
                {m}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            {mode === 'exam' ? 'Answers revealed at end only' : 'Instant feedback per question'}
          </p>
        </div>

        {/* Question count */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Questions <span className="text-primary-500 font-bold">{questionCount}</span>
          </p>
          <input
            type="range"
            min={5}
            max={Math.max(5, maxQ)}
            step={5}
            value={Math.min(questionCount, Math.max(5, maxQ))}
            onChange={e => setQuestionCount(Number(e.target.value))}
            className="w-full accent-primary-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-0.5">
            <span>5</span><span>{Math.max(5, maxQ)} max</span>
          </div>
        </div>

        {/* Time limit */}
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Time limit</p>
          <div className="flex flex-wrap gap-2">
            {TIME_OPTIONS.map(t => (
              <button
                key={t}
                onClick={() => setTimeLimit(t)}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${timeLimit === t ? 'bg-primary-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
              >
                {t}m
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Start */}
      <Button
        fullWidth
        size="lg"
        onClick={startExam}
        disabled={!selectedTopics.length}
        className="flex items-center gap-2"
      >
        <BookOpen size={18} />
        Start {mode === 'exam' ? 'Exam' : 'Practice'}
        <span className="opacity-70 text-sm">• {Math.min(questionCount, maxQ || questionCount)}q • {timeLimit}min</span>
      </Button>
    </div>
  )
}

function TopicRow({ topic, index, selected, onToggle }: { topic: Topic; index: number; selected: boolean; onToggle: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03 }}
      onClick={onToggle}
      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
    >
      {selected
        ? <CheckSquare size={18} className="text-primary-500 shrink-0" />
        : <Square size={18} className="text-slate-300 dark:text-slate-600 shrink-0" />
      }
      <div className="flex-1 text-left min-w-0">
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate">{topic.name}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Badge variant="muted" className="flex items-center gap-1">
          <Hash size={10} />{topic.qCount}
        </Badge>
        <Clock size={13} className="text-slate-400" />
      </div>
    </motion.button>
  )
}
