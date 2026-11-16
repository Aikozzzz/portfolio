export const profile = {
  name: 'Kyaw Zin Hein',
  location: 'Hlaing Township, Yangon',
  email: 'kyaw24295968@gmail.com',
  github: 'https://github.com/Aikozzzz',
  linkedin: 'https://www.linkedin.com/in/kyaw-zin-hein-a21abb37b/',
  availability: 'Open to internships and collaborations',
}

export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const projectItems = [
  {
    title: 'NGINX Autoscaling Lab',
    category: 'Infrastructure · Academic lab',
    description: 'How does a web service behave under the same load with fixed replicas and with Kubernetes autoscaling? I put together a K3s testbed, a repeatable Locust workload, and a Streamlit dashboard to compare latency, resource use, and replica counts.',
    stack: ['K3s', 'NGINX', 'Ansible', 'Locust', 'Prometheus', 'Streamlit'],
    github: 'https://github.com/Aikozzzz/HPA_Performance_analysis',
    visual: 'scaling',
  },
  {
    title: 'SafeMyanmar',
    category: 'Mobile · Academic project',
    description: 'An Android app that brings USGS earthquake observations, a Yangon navigation snapshot, and offline preparedness guides into one place.',
    stack: ['Flutter', 'Dart', 'PostgreSQL', 'Mapbox'],
    github: 'https://github.com/Aikozzzz/safe_myanmar',
    visual: 'map',
  },
  {
    title: 'Nihon Sar Loat',
    category: 'Full-stack · Study tools',
    description: 'A JLPT N2 study workspace that turns PDF imports into editable study material and supports flashcard practice and library browsing.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/Aikozzzz/Nihon_Sar_Loat',
    visual: 'study',
  },
  {
    title: 'Supply Link',
    category: 'Full-stack · Operations',
    description: 'A wholesale ordering platform that connects shops, branches, headquarters, and drivers through checkout, stock replenishment, and delivery tracking.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox'],
    github: 'https://github.com/Aikozzzz/supply-link',
    visual: 'supply',
  },
]

export const otherProjects = [
  {
    title: 'Network Traffic Analysis',
    github: 'https://github.com/Aikozzzz/network-management-and-monitoring',
  },
  {
    title: 'Exam Cheating Detection',
    github: 'https://github.com/Aikozzzz/exam',
  },
  {
    title: 'AIESEC ER–IR Team Page',
    github: 'https://github.com/Aikozzzz/ER-IR-Team-Page',
    live: 'https://linkiestarsteam.vercel.app/',
  },
  {
    title: 'Kanji Flashcards',
    github: 'https://github.com/Aikozzzz/studymorekanji',
  },
]

export const toolSkills = [
  {
    category: 'Cloud & infrastructure',
    items: ['Linux', 'Docker', 'Kubernetes / K3s', 'Ansible', 'AWS fundamentals', 'CI/CD'],
  },
  {
    category: 'Web & mobile',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Flutter'],
  },
  {
    category: 'Systems & data',
    items: ['Python', 'PostgreSQL', 'Hadoop', 'Locust', 'Prometheus', 'Streamlit'],
  },
  {
    category: 'Networking & programming',
    items: ['TCP/IP', 'Routing and switching', 'Traffic analysis', 'Java', 'C++'],
  },
]

export const milestones = [
  {
    year: '2026',
    title: 'Event organizing committee',
    organization: 'AIESEC in Myanmar',
    description: 'Helped organize events, including the International Women’s Day event.',
  },
  {
    year: '2025',
    title: 'External and Internal Relations team member',
    organization: 'AIESEC in Myanmar',
    description: 'Contributed to the relations team and helped showcase the group through its public team website.',
  },
  {
    year: '2022 – Present',
    title: 'High Performance Computing',
    organization: 'University of Information Technology, Yangon',
    description: 'Pursuing a bachelor’s degree with a focus on distributed systems, Linux, and performance analysis.',
  },
]

export const credentials = [
  { year: '2026', title: 'AWS Academy Graduate – Cloud Foundations', issuer: 'AWS Academy' },
  { year: '2025', title: 'CCNA: Introduction to Networks', issuer: 'Cisco Networking Academy' },
  { year: '2025', title: 'CCNA: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy' },
  { year: '2025', title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy' },
]
