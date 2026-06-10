export const personalInfo = {
  name: "Piyali Barman",
  title: "Full Stack Developer",
  subtitle: "AI/ML Enthusiast & Creative Technologist",
  email: "piyaaabarman@gmail.com",
  github: "https://github.com/piyali2608",
  linkedin: "https://linkedin.com/in/piyali-barman",
  location: "Kolkata, West Bengal, India / Chittor , Andhra Pradesh, India",
  bio: "I craft digital experiences at the intersection of elegant design and powerful engineering. Passionate about building scalable web applications and exploring the frontiers of AI/ML.",
  shortBio: "Building the projects, one commit at a time.",
};

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 80 },
    { name: "C++", level: 75 },
    { name: "Java", level: 72 },
    { name: "SQL", level: 82 },
  ],
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 82 },
    { name: "HTML/CSS", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Framer Motion", level: 78 },
    { name: "Three.js", level: 65 },
  ],
  backend: [
    { name: "Node.js", level: 84 },
    { name: "Express.js", level: 82 },
    { name: "Django", level: 78 },
    { name: "FastAPI", level: 75 },
    { name: "REST APIs", level: 88 },
    { name: "GraphQL", level: 70 },
  ],
  aiml: [
    { name: "PyTorch", level: 80 },
    { name: "TensorFlow", level: 78 },
    { name: "scikit-learn", level: 82 },
    { name: "OpenCV", level: 76 },
    { name: "Hugging Face", level: 74 },
    { name: "LangChain", level: 72 },
    { name: "Pandas / NumPy", level: 88 },
    { name: "Matplotlib", level: 84 },
  ],
  tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 72 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "Firebase", level: 76 },
    { name: "Vercel / Netlify", level: 85 },
    { name: "OvenCV", level: 74 },
    { name: "Figma", level: 70 },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Inamigos Foundation",
    duration: "2026",
    type: "Internship",
    description:
      "Developed and maintained responsive web applications for the foundation's digital initiatives. Built interactive UI components using React.js, integrated third-party APIs, and contributed to improving the overall web presence and user experience of the organization.",
    tech: ["React.js", "JavaScript", "CSS", "REST APIs", "Git"],
    highlight: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology, Sri city (IIITS)",
    duration: "2025 - 2029",
    description: "Specializing in AI/ML and Full Stack Development. Active member of coding clubs and open-source initiatives.",
    
  },
  {
    id: 2,
    degree: "Higher Secondary Education (Class I-XII)",
    institution: "Kendriya Vidyalaya Cooch Behar",
    duration: "2012 - 2024",
    description: "Completed schooling with a focus on Science and Mathematics. Developed early passion for computing and technology.",
    
  },
];

export const projects = [
  {
    id: 1,
    title: "Forma",
    description:
      "A complete architecture studio website with a Node.js + Express backend, contact form, and branded email notifications",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/piyali2608/Forma",
    live: "https://forma-beige.vercel.app/",
    featured: true,
    category: "Full Stack",
   
  },
  {
    id: 2,
    title: "CravEX",
    description:
      "CravEX is a campus-focused food ordering solution designed to eliminate long waiting times, reduce overcrowding, and improve food pickup efficiency through smart pre-ordering.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
    github: "https://github.com/Day-Dreamer98/CravEX",
    live: "https://github.com/Day-Dreamer98/CravEX",
    featured: true,
    category: "Full Stack",
    
  },
  {
    id: 3,
    title: "CollegeScope",
    description:
      "A comprehensive college discovery and comparison platform for students. Browse colleges, compare programs, check rankings, and get admission insights all in one place.",
    tech: ["React.js", "Next.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/piyali2608/collegescoe",
    live: "https://collegescope-gzeh.vercel.app/",
    featured: true,
    category: "Full Stack",
    
  },
  {
    id: 4,
    title: "Inamigos Foundation Website",
    description:
      "Official website for the Inamigos Foundation, a non-profit organization. Built a responsive, accessible site with dynamic content management, volunteer registration, and donation flow.",
    tech: ["React.js", "JavaScript", "CSS3", "EmailJS", "Vercel"],
    github: "https://github.com/piyali2608/Inamigos",
    live: "https://in-amigos.vercel.app/",
    featured: false,
    category: "Full Stack",
  
  },
  {
    id: 5,
    title: "Deep Shield",
    description:
      "An AI-powered cybersecurity tool that leverages deep learning for real-time threat detection and vulnerability scanning. Analyzes patterns to identify anomalies and potential security breaches.",
    tech: ["Python", "PyTorch", "FastAPI", "React.js", "OpenCV"],
    github: "https://github.com/piyali2608/Deep-shield",
    live: "https://github.com/piyali2608/Deep-shield",
    featured: true,
    category: "AI/ML",
    
  },
  {
    id: 6,
    title: "Smart README Agent",
    description:
      "An intelligent agent that auto-generates beautiful, structured GitHub README files. Analyzes your repository code, infers project purpose, and crafts professional documentation in seconds.",
    tech: ["Python", "LangChain", "OpenAI API", "FastAPI", "React.js"],
    github: "https://github.com/piyali2608/smart-readme-agent",
    live: "https://piyali2608-smart-readme-agent-srcapp-wifjzh.streamlit.app/",
    featured: true,
    category: "AI/ML",
    
  },
  {
    id: 7,
    title: "Click Bait Filter",
    description:
      "A no-code visual filter builder for developers and product teams. Drag-and-drop interface to construct complex data filters with live preview and exportable query generation.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/piyali2608/Click-bait-Filter",
    live: "https://github.com/piyali2608/Click-bait-Filter",
    featured: false,
    category: "Full Stack",
   
  },
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

export const chatbotFAQ = [
  { q: "who are you", a: "I'm Piyali Barman,a Full Stack Developer and AI/ML enthusiast currently pursuing B.Tech CSE at IIIT. I love building elegant digital experiences and exploring the boundaries of technology." },
  { q: "what do you do", a: "I build full-stack web applications, experiment with AI/ML models, and create intuitive digital experiences. Currently a 1st year at IIIT and actively building cool projects!" },
  { q: "what are your skills", a: "My core stack includes React, Next.js, Node.js, Python, and PyTorch. I work with databases like MongoDB and PostgreSQL, and I love experimenting with LLMs and computer vision." },
  { q: "contact", a: "You can reach me at piyali.b25@iiits.in/ piyaaabarman@gmail.com or use the contact form on this page. I usually respond within 24 hours!" },
  { q: "internship", a: "I interned at Inamigos Foundation as a Web Development Intern in 2026 from April-May, where I built responsive React web applications and contributed to the organization's digital presence." },
  { q: "projects", a: "I've built Forma (form builder), CravEX (food platform), CollegeScope (college discovery), Deep Shield (AI cybersecurity), Smart README Agent, and more! Check out my Projects section." },
  { q: "github", a: "My GitHub is github.com/piyali2608 — check out Forma, Deep Shield, Smart README Agent, CravEX and more." },
  { q: "education", a: "I'm currently pursuing B.Tech CSE at the Indian Institute of Information Technology (2025-2029). I completed my schooling at Kendriya Vidyalaya Cooch Behar (2012-2024)." },
];
