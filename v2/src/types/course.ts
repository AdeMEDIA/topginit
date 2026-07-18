export interface Topic {
  id: string
  name: string
  startIdx: number
  endIdx: number
  qCount: number
}

export interface Course {
  id: string
  code: string
  name: string
  unit: number
  level: '100' | '200' | '300' | '400' | '500'
  semester: '1st' | '2nd'
  faculty: string
  department: string | 'all'
  qCount: number
  topics: Topic[]
  locked?: boolean
}

export interface Faculty {
  id: string
  name: string
  departments: Department[]
}

export interface Department {
  id: string
  name: string
}
