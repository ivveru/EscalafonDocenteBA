export type CategoryKey = 'auxiliar' | 'asistente' | 'asociado' | 'titular';

export interface CategoryInfo {
  key: CategoryKey;
  name: string;
  level: string;
  permanence: string;
  colorClass: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  description: string;
  funciones: string;
  requisitos: string;
  espacioInfo: string;
  puntosMinimos: number;
  perfilDocente: string;
  gradosRequeridos: string;
}

export interface ProcessStage {
  id: string;
  number: string;
  phase: string;
  title: string;
  description: string;
  footerNote: string;
  iconName: string;
  color: string;
  requirements: string[];
  department: string;
  estimatedTime: string;
}

export interface NormativeDocument {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'ZIP' | 'LINK';
  actionText: string;
  icon: string;
  color: string;
  fileSize?: string;
  date?: string;
  contentSnippet?: string;
}

export interface FacultyApplication {
  id: string;
  radicadoNumber: string;
  facultyName: string;
  facultyEmail: string;
  department: string;
  currentCategory: CategoryKey;
  targetCategory: CategoryKey;
  submissionDate: string;
  progressPercent: number;
  status: 'Radicada' | 'En Verificación Técnica' | 'En Evaluación Comité' | 'Aprobada';
  nextSteps: Array<{
    title: string;
    date: string;
    completed: boolean;
  }>;
  submittedWorks: Array<{
    title: string;
    type: string;
    year: string;
    points: number;
    status: 'Validado' | 'En revisión';
  }>;
}

export type ActiveScreen = 'home' | 'radicacion' | 'dashboard' | 'baremo' | 'normativa';
