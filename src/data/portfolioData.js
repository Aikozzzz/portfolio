export const profile = {
  name: 'Kyaw Zin Hein',
  location: 'Yangon, Myanmar',
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

export const featuredResearch = {
  slug: 'scheduler-ha-web-services',
  title: 'Scheduler-Based High Availability for Containerized Web Services in a Small-Scale HPC Cluster',
  summary: 'This research explores how a small Slurm-managed HPC cluster can keep containerized web services reachable during component failures.',
  evidence: { label: 'ICAIT 2026 conference', url: 'https://www.uit.edu.mm/icait-2026' },
  conference: { event: 'ICAIT 2026', dateTime: '2026-11-05', date: '5 November 2026', location: 'Yangon, Myanmar' },
}

export const projectItems = [
  featuredResearch,
  {
    title: 'NGINX Autoscaling Lab',
    summary: 'How does NGINX behave under the same load with fixed replicas and with Kubernetes autoscaling?',
    contribution: 'I built the K3s testbed, a repeatable Locust load test, and a Streamlit dashboard.',
    detail: 'The lab compares request latency, CPU and memory use, and replica counts across both configurations.',
    stack: ['K3s', 'NGINX', 'Ansible', 'Locust', 'Prometheus', 'Streamlit'],
    github: 'https://github.com/Aikozzzz/HPA_Performance_analysis',
    evidence: { label: 'Test procedure', url: 'https://github.com/Aikozzzz/HPA_Performance_analysis/blob/main/test.md' },
  },
  {
    title: 'SafeMyanmar',
    summary: 'Share SOS locations with nearby phones over Bluetooth and access emergency guides offline.',
    detail: 'The Android app maps received SOS locations and includes English and Burmese guides. An optional on-device Gemma model can answer general questions offline.',
    stack: ['Flutter', 'Bluetooth LE', 'Gemma', 'Mapbox'],
    github: 'https://github.com/Aikozzzz/safe_myanmar',
  },
  {
    title: 'Nihon Sar Loat',
    summary: 'Turn PDFs into editable study material for the JLPT N2.',
    detail: 'The workspace supports flashcard practice and browsing a study library.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/Aikozzzz/Nihon_Sar_Loat',
    live: 'https://nihongojyouzudesune.vercel.app/',
  },
  {
    title: 'Supply Link',
    summary: 'AI-assisted stock planning helps headquarters set backup inventory targets for wholesale branches.',
    detail: 'Supply Link recommends targets from demand and refill history, with Groq-generated explanations for headquarters to review.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Groq'],
    github: 'https://github.com/Aikozzzz/supply-link',
    live: 'https://oceanpride.vercel.app/login',
    liveLabel: 'Live site (sign-in required)',
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
