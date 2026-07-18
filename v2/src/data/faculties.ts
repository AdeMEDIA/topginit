import type { Faculty } from '@/types/course'

export const FACULTIES: Faculty[] = [
  {
    id: 'science',
    name: 'Faculty of Science',
    departments: [
      { id: 'mls',  name: 'Medical Laboratory Science' },
      { id: 'bio',  name: 'Biology' },
      { id: 'mcb',  name: 'Microbiology' },
      { id: 'bcm',  name: 'Biochemistry' },
      { id: 'phy',  name: 'Physics' },
      { id: 'chm',  name: 'Chemistry' },
      { id: 'mth',  name: 'Mathematics' },
    ],
  },
  {
    id: 'engineering',
    name: 'Faculty of Engineering',
    departments: [
      { id: 'csc',  name: 'Computer Science' },
      { id: 'ece',  name: 'Electrical/Computer Engineering' },
      { id: 'cve',  name: 'Civil Engineering' },
      { id: 'mec',  name: 'Mechanical Engineering' },
    ],
  },
  {
    id: 'management',
    name: 'Faculty of Management Sciences',
    departments: [
      { id: 'acc',  name: 'Accounting' },
      { id: 'baf',  name: 'Banking & Finance' },
      { id: 'bus',  name: 'Business Administration' },
      { id: 'eco',  name: 'Economics' },
    ],
  },
  {
    id: 'arts',
    name: 'Faculty of Arts',
    departments: [
      { id: 'eng',  name: 'English & Literary Studies' },
      { id: 'his',  name: 'History & International Studies' },
      { id: 'phi',  name: 'Philosophy' },
    ],
  },
  {
    id: 'law',
    name: 'Faculty of Law',
    departments: [
      { id: 'law',  name: 'Law' },
    ],
  },
  {
    id: 'education',
    name: 'Faculty of Education',
    departments: [
      { id: 'edu',  name: 'Education' },
      { id: 'lib',  name: 'Library & Information Science' },
    ],
  },
]

export function getFacultyById(id: string) {
  return FACULTIES.find(f => f.id === id)
}

export function getDepartmentById(facultyId: string, deptId: string) {
  return getFacultyById(facultyId)?.departments.find(d => d.id === deptId)
}
