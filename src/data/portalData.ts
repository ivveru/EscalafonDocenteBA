import { CategoryInfo, ProcessStage, NormativeDocument, FacultyApplication } from '../types';

export const BELLAS_ARTES_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1WTOiyKQLoMbpRXSIRr63O3a3srjsNExcqsnN9PHhlK7-TF_c3aNyhfWlnjYhyaa_eYdA6_Zai9x8DmPF93jqfrOyVJ-iFeo5y12FzgeBtCnMHKGPuE7jdIYaL5yMuEwCFOGXV_YnRgX2oNnph4fNuVsUFgFZiPkWBV1Wru0pa683jhuK4Q4qzYvirJPtWamcDecELMw4t5l1D0G8rpOsH_OtfwKEzy0R28nNzQeCzUYAkSeGp33HhQ4q4';

export const HERO_BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi8AdCuwoIOqqwV3XvcqQMA1ya-2J0t2DQzBna1cvJ0ml0IZ99dXiC2S0O8juCi7lM0Rx28Pb_UbGfrd4XqMqEDrzUJi0thzaneWguu0ChNEoBKY9yeREVFUXuJH-kOvABQiwEmKmeO6BYwa5Qj-nXu7bamc1GF-R4rjev2E_f0rFxmlvLU7mnSklFZu4CTpZuuJsDeaBlNnj0P1V8jdcd6l8hjFB-t9ujv3qT4qNRv5dmveUluQaG';

export const CATEGORIES_DATA: Record<string, CategoryInfo> = {
  auxiliar: {
    key: 'auxiliar',
    name: 'Profesor Auxiliar',
    level: 'Nivel 01',
    permanence: '2 Años Calendario',
    colorClass: 'text-sky-600',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-800',
    badgeBorder: 'border-sky-200',
    description: 'Este es el contenido para el puesto de Auxiliar. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    funciones: 'Apoyo y conducción de talleres artísticos prácticos, acompañamiento pedagógico en asignaturas fundamentales y atención de asesorías a estudiantes.',
    requisitos: 'Título profesional universitario en áreas afines a las artes plásticas, escénicas, música o diseño. Demostrar solvencia pedagógica institucional.',
    espacioInfo: '[Área reservada para agregar requerimientos específicos o convocatorias de cátedra]',
    puntosMinimos: 30,
    perfilDocente: 'Docente novel en formación pedagógica superior con enfoque en talleres teórico-prácticos.',
    gradosRequeridos: 'Pregrado / Licenciatura Universitaria en Artes o Diseño.'
  },
  asistente: {
    key: 'asistente',
    name: 'Profesor Asistente',
    level: 'Nivel 02',
    permanence: '3 Años Calendario',
    colorClass: 'text-teal-600',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    badgeBorder: 'border-teal-200',
    description: 'Este es el contenido para el puesto de Asistente. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    funciones: 'Cátedras teóricas y metodológicas, coordinación de grupos de práctica, orientación en semilleros de creación e investigación formativa.',
    requisitos: 'Mínimo dos (2) años de experiencia en escalafón universitario, evaluaciones docentes satisfactorias y presentación de productos de creación inicial.',
    espacioInfo: '[Área reservada para agregar criterios de evaluación docente o baremos específicos]',
    puntosMinimos: 55,
    perfilDocente: 'Docente con madurez pedagógica, tutor de semilleros y líder de asignaturas nucleares.',
    gradosRequeridos: 'Pregrado + Especialización o créditos de Maestría.'
  },
  asociado: {
    key: 'asociado',
    name: 'Profesor Asociado',
    level: 'Nivel 03',
    permanence: '4 Años Calendario',
    colorClass: 'text-cyan-600',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-800',
    badgeBorder: 'border-cyan-200',
    description: 'Este es el contenido para el puesto de Asociado. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    funciones: 'Liderazgo de proyectos de creación artística con circulación departamental/nacional, tutorías de grado y comités curriculares de facultad.',
    requisitos: 'Mínimo tres (3) años como Profesor Asistente, título de posgrado (Especialización o Maestría), obras con curaduría o publicaciones indexadas.',
    espacioInfo: '[Área reservada para incorporar proyectos vigentes o asignaciones de investigación]',
    puntosMinimos: 85,
    perfilDocente: 'Creador e investigador consolidado con obras de impacto y liderazgo curricular.',
    gradosRequeridos: 'Título de Maestría o Especialización Médico-Quirúrgica/Artística de alto nivel.'
  },
  titular: {
    key: 'titular',
    name: 'Profesor Titular',
    level: 'Nivel 04 (Máxima distinción)',
    permanence: '5 Años Calendario',
    colorClass: 'text-slate-800',
    badgeBg: 'bg-slate-100',
    badgeText: 'text-slate-900',
    badgeBorder: 'border-slate-300',
    description: 'Este es el contenido para el puesto de Titular. Aquí puedes colocar funciones, requisitos o descripción del rol.',
    funciones: 'Orientación estratégica institucional, asesoría al Consejo Académico, liderazgo de cátedras magistrales y dirección de líneas consolidadas.',
    requisitos: 'Mínimo cuatro (4) años como Profesor Asociado, título de Maestría o Doctorado, producción de alto impacto y aval unánime del Comité Central.',
    espacioInfo: '[Área reservada para añadir reconocimientos institucionales o distinciones académicas]',
    puntosMinimos: 120,
    perfilDocente: 'Máxima autoridad académica, referencia nacional e internacional en artes o pedagogía.',
    gradosRequeridos: 'Título de Doctorado o Maestría con destacada trayectoria artística comprobada.'
  }
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'stage-1',
    number: '01',
    phase: 'Fase Inicial',
    title: '1. Convocatoria y Radicación',
    description: 'Apertura formal de la convocatoria. El docente diligencia el formulario institucional y radica sus anexos curriculares en plataforma.',
    footerNote: 'Recepción de solicitudes',
    iconName: 'app_registration',
    color: 'sky',
    requirements: [
      'Formulario único de postulación diligenciado en plataforma institucional',
      'Hoja de vida en formato Función Pública y SIGEP',
      'Portafolio probatorio de producción artística y creación (2022-2026)',
      'Certificados de docencia y evaluaciones de desempeño institucional'
    ],
    department: 'Secretaría General & Vicerrectoría Académica',
    estimatedTime: '2 semanas tras apertura oficial'
  },
  {
    id: 'stage-2',
    number: '02',
    phase: 'Fase Técnica',
    title: '2. Verificación de Requisitos',
    description: 'Revisión documental técnica por Vicerrectoría Académica. Cotejo de títulos, certificaciones laborales y suficiencia de permanencia.',
    footerNote: 'Filtro de admisibilidad',
    iconName: 'fact_check',
    color: 'teal',
    requirements: [
      'Verificación de legalidad y convalidación de títulos de posgrado',
      'Cotejo de tiempo de permanencia cumplido en la categoría previa',
      'Revisión de no tener sanciones disciplinarias vigentes',
      'Emisión del certificado de admisibilidad documental'
    ],
    department: 'Oficina de Talento Humano y Vicerrectoría',
    estimatedTime: '10 días hábiles'
  },
  {
    id: 'stage-3',
    number: '03',
    phase: 'Fase Colegiada',
    title: '3. Evaluación y Baremos',
    description: 'Sesión del Comité Central de Clasificación y Escalafón. Asignación de puntajes por producción artística, docencia y méritos.',
    footerNote: 'Comité de Escalafón',
    iconName: 'clinical_notes',
    color: 'cyan',
    requirements: [
      'Ponderación de obras bajo el Baremo de Artes y Diseño (Acuerdo 001)',
      'Conceptos de pares evaluadores externos o curadores reconocidos',
      'Entrevista académica con el Comité Central de Escalafón',
      'Consolidación del acta oficial de calificación y puntaje final'
    ],
    department: 'Comité Central de Clasificación y Escalafón Docente',
    estimatedTime: '15 días hábiles'
  },
  {
    id: 'stage-4',
    number: '04',
    phase: 'Fase Final',
    title: '4. Resolución y Promoción',
    description: 'Expedición del acto administrativo rectoral que confiere la nueva categoría de escalafón o ratifica la permanencia para el periodo.',
    footerNote: 'Acto administrativo oficial',
    iconName: 'verified',
    color: 'emerald',
    requirements: [
      'Firma de Resolución Rectoral oficial por Rectoría de Bellas Artes',
      'Notificación personal al docente según Código de Procedimiento Administrativo',
      'Actualización en nómina docente y asignación de carga académica',
      'Entrega de constancia oficial de categoría en escalafón'
    ],
    department: 'Rectoría & Asesoría Jurídica',
    estimatedTime: '5 días hábiles'
  }
];

export const NORMATIVE_DOCS: NormativeDocument[] = [
  {
    id: 'doc-1',
    title: 'Manual de Funciones',
    description: 'Estructura de perfiles, responsabilidades pedagógicas y compromisos institucionales del cuerpo docente.',
    type: 'PDF',
    actionText: 'Descargar PDF',
    icon: 'menu_book',
    color: 'slate',
    fileSize: '3.2 MB',
    date: '2024 (Actualizado)',
    contentSnippet: 'Define las responsabilidades sustantivas en docencia, proyección social, creación artística e investigación para cada nivel del escalafón docente en Bellas Artes.'
  },
  {
    id: 'doc-2',
    title: 'Política de Escalafón Docente',
    description: 'Directrices para la carrera profesoral, estímulos a la creación artística y criterios de permanencia.',
    type: 'PDF',
    actionText: 'Descargar PDF',
    icon: 'policy',
    color: 'sky',
    fileSize: '2.4 MB',
    date: '2025',
    contentSnippet: 'Lineamientos institucionales para reconocer el valor de la producción estética, la curaduría, las composiciones sonoras y la formación de formadores en el Valle del Cauca.'
  },
  {
    id: 'doc-3',
    title: 'Acuerdo Directivo 001 de 2018',
    description: 'Estatuto Docente institucional que reglamenta el escalafón, las categorías y los órganos de evaluación.',
    type: 'LINK',
    actionText: 'Consultar Documento',
    icon: 'gavel',
    color: 'teal',
    fileSize: '5.1 MB',
    date: '30 de enero de 2018',
    contentSnippet: 'Acuerdo No. 001 por el cual se expide el Estatuto Docente de Bellas Artes Institución Universitaria del Valle del Cauca. Capítulos de Ingreso, Permanencia, Escalafón y Régimen Disciplinario.'
  },
  {
    id: 'doc-4',
    title: 'Formatos de Radicación',
    description: 'Plantillas oficiales de hoja de vida, resumen de producción artística y formatos de solicitud de ascenso.',
    type: 'ZIP',
    actionText: 'Descargar Paquete ZIP',
    icon: 'folder_zip',
    color: 'cyan',
    fileSize: '8.6 MB',
    date: 'Convocatoria 2026',
    contentSnippet: 'Contiene: Formato-01-HojaDeVida.docx, Formato-02-FichaProduccionArtistica.xlsx, Formato-03-PonderacionDocencia.docx, y Guía de Verificación Técnica.'
  }
];

export const MOCK_DOCENTE_USER: FacultyApplication = {
  id: 'APP-2026-0042',
  radicadoNumber: 'RAD-2026-BA-0482',
  facultyName: 'Dra. Elena Vargas',
  facultyEmail: 'elena.vargas@bellasartes.edu.co',
  department: 'Facultad de Artes Visuales y Aplicadas',
  currentCategory: 'asistente',
  targetCategory: 'asociado',
  submissionDate: '12 de Octubre de 2026',
  progressPercent: 66,
  status: 'En Evaluación Comité',
  nextSteps: [
    { title: 'Revisión técnica de documentos', date: '28 Octubre 2026', completed: true },
    { title: 'Validación de títulos y certificaciones', date: '04 Noviembre 2026', completed: true },
    { title: 'Entrevista con Comité Central', date: '15 Noviembre 2026', completed: false },
    { title: 'Entrega de Portafolio Final', date: '30 Noviembre 2026', completed: false },
    { title: 'Emisión de Resolución Rectoral', date: '12 Diciembre 2026', completed: false }
  ],
  submittedWorks: [
    { title: 'Instalación "Memorias del Río Cauca" (Bienal de Arte)', type: 'Creación Artística', year: '2024', points: 28, status: 'Validado' },
    { title: 'Libro de investigación "Gramáticas de la Luz en el Trópico"', type: 'Publicación Arbitrada', year: '2025', points: 35, status: 'Validado' },
    { title: 'Semillero de Investigación en Escultura Experimental', type: 'Formación Pedagógica', year: '2025', points: 15, status: 'Validado' },
    { title: 'Curaduría Salón Departamental de Jóvenes Talentos', type: 'Proyección Social', year: '2026', points: 12, status: 'En revisión' }
  ]
};
