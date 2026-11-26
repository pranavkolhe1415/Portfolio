export const profile = {
  name: 'Pranav Kolhe',
  role: 'Full-Stack Developer',
  email: 'kolhepranav2018@gmail.com', // TODO: replace with your professional email
  github: 'https://github.com/pranavkolhe1415',
  linkedin: 'www.linkedin.com/in/pranav-kolhe-4a1063301', // TODO: replace with your profile URL
  location: 'Pune, India',
  resume: '/resume/Pranav-Kolhe-Resume.pdf',
}

export const skills = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'Java', 'REST APIs', 'JWT Authentication'] },
  { group: 'Database & Tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub'] },
  { group: 'Creative Web', items: ['Three.js', 'React Three Fiber', 'Framer Motion', 'Responsive UI'] },
]

export const projects = [
  {
    number: '01', category: 'FULL-STACK PLATFORM', name: 'Smart Village Management System',
    description: 'A digital platform designed to bring village services and community workflows into one accessible place.',
    detail: 'A team project where I took a leadership role and contributed to building a full-stack village-management experience. The system brings service workflows into a central digital platform.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    type: 'Team project · Team leadership', image: '/projects/smart-village.jpg',
    github: 'https://github.com/pranavkolhe1415/Smart-Village-Management-System.git', demo: 'https://smart-village-management-system-five.vercel.app/',
  },
  {
    number: '02', category: 'AGRICULTURE TECHNOLOGY', name: 'AgriLink',
    description: 'A platform concept connecting farmers and industry through a practical digital experience.',
    detail: 'A full-stack agriculture platform concept focused on connecting farmers and industry users. The project explores role-based experiences and practical digital workflows.',
    stack: ['React', 'Express', 'MongoDB', 'JavaScript'],
    type: 'Full-stack application', image: '/projects/agrilink.jpg', github: 'https://github.com/pranavkolhe1415/agri-link2.0.git', demo: '',
  },
  {
    number: '03', category: 'AI MEETING ASSISTANT', name: 'MeetIQ',
    description: 'A meeting intelligence application involving audio processing, transcription and summaries.',
    detail: 'An application workflow for uploading meeting recordings, processing audio, generating transcripts and summaries, and exploring meeting content with AI-assisted tools.',
    stack: ['React', 'Node.js', 'MongoDB', 'Whisper.cpp', 'Ollama'],
    type: 'AI-powered application', image: '/projects/meetiq.jpg', github: 'https://github.com/pranavkolhe1415/MeetIQ', demo: '',
  },
  {
    number: '04', category: 'PAYMENT RECONCILIATION', name: 'ReconX',
    description: 'A reconciliation application built to compare transaction data and surface mismatches.',
    detail: 'A MERN-based reconciliation assessment project. It focuses on importing transaction data, matching records, and making mismatches easier to identify and review.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'MERN assessment project', image: '/projects/reconx.jpg', github: 'https://github.com/pranavkolhe1415/Payment_Reconsilation.git', demo: '',
  },
  {
    number: '05', category: 'EDUCATION PLATFORM', name: 'Student Development Portal',
    description: 'A portal for student assignments, project submissions, faculty tasks and academic workflows.',
    detail: 'A role-based academic portal concept supporting student submissions, staff task allocation, group verification, meetings and administration workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    type: 'Academic project', image: '/projects/student-portal.jpg', github: 'https://github.com/pranavkolhe1415/Student-Development-Portal-UI.git', demo: '',
  },
]

export const journey = [
  { label: 'EDUCATION', title: 'Vishwakarma Institute of Information Technology', text: 'B.Tech — Information Technology · Pune' },
  { label: 'PROJECT LEADERSHIP', title: 'Smart Village Management System', text: 'Worked with a team to develop a digital village-management platform and took a leadership role.' },
  { label: 'FULL-STACK DEVELOPMENT', title: 'Building practical applications', text: 'Exploring frontend engineering, backend systems, databases and complete product workflows.' },
  { label: 'CURRENT FOCUS', title: 'Growing as a software engineer', text: 'Strengthening Java, problem-solving, system fundamentals and modern web development.' },
]