export const profile = {
  name: 'Kyaw Zin Hein',
  location: 'Yangon, Myanmar',
  email: 'kyaw24295968@gmail.com',
  github: 'https://github.com/Aikozzzz',
  linkedin: 'https://www.linkedin.com/in/kyaw-zin-hein-a21abb37b/',
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
    detail: 'I built a K3s testbed, a repeatable Locust load test, and a Streamlit dashboard to compare request latency, CPU and memory use, and replica counts.',
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
    liveRequiresSignIn: true,
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

export const education = [
  {
    period: '2022 – Present',
    title: 'High Performance Computing',
    organization: 'University of Information Technology, Yangon',
    description: 'Pursuing a bachelor’s degree with a focus on distributed systems, Linux, and performance analysis.',
  },
  {
    period: '2026 – Present',
    title: 'Diploma in Networking',
    organization: 'NIT Institute, Yangon',
  },
]

export const experience = [
  {
    period: 'Aug 2025 – Mar 2026',
    title: 'External Relations Team Member',
    organization: 'AIESEC in West Yangon',
  },
  {
    title: 'International Women’s Day (IWD)',
    organization: 'AIESEC in Myanmar',
    description: 'Organizing Committee Team Member',
  },
  {
    title: 'Youth to Youth',
    organization: 'AIESEC in West Yangon',
    description: 'Organizing Committee Team Member',
  },
]

export const volunteering = [
  {
    period: 'Aug 2025 – Mar 2026',
    title: 'External and Internal Relations Team Member',
    organization: 'AIESEC in West Yangon',
  },
  {
    title: 'Library Volunteer',
    organization: 'University of Yangon',
    description: '100 volunteer hours',
  },
]

export const credentials = [
  {
    issued: '2026-07',
    title: 'Japanese-Language Proficiency Test (JLPT) N3',
    issuer: 'The Japan Foundation',
  },
  {
    issued: '2026-04',
    title: 'AWS Academy Graduate – Cloud Foundations – Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    badgeUrl: 'https://www.credly.com/badges/ba7792f0-85d9-4f3f-b02e-25001e939ff0',
  },
  {
    issued: '2025-12',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    badgeUrl: 'https://www.credly.com/badges/1998d938-765c-4c41-9dd8-c4f8cc1df72f',
  },
  {
    issued: '2025-12',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    badgeUrl: 'https://www.credly.com/badges/3777620d-af4f-4deb-8e80-805fe02a2529',
  },
  {
    issued: '2025-12',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco',
    badgeUrl: 'https://www.credly.com/badges/1643c131-202c-4a9e-a0e3-a8750e839cbe',
  },
  {
    issued: '2024-10',
    title: 'Fundamental Information Technology Engineer Examination (FE)',
    issuer: 'Information Technology Professionals Examination Council (ITPEC)',
  },
  {
    issued: '2023-12',
    title: 'Japanese-Language Proficiency Test (JLPT) N4',
    issuer: 'The Japan Foundation',
  },
  {
    issued: '2023-10',
    title: 'Information Technology Passport (IP)',
    issuer: 'Information Technology Professionals Examination Council (ITPEC)',
  },
]
