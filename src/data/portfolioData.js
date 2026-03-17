// src/data/portfolioData.js
// ─── Edit all your personal info here ───────────────────────────

export const personalInfo = {
  name: "Rahul Prasad",
  role: "Full Stack Developer & Designer",
  tagline: "Creative Developer & Designer",
  taglineHighlight: "Developer",
  bio1:
    "I'm a passionate developer who transforms complex ideas into elegant digital solutions. With a keen eye for design and a love for clean code, I bridge the gap between beautiful interfaces and powerful functionality.",
  bio2:
    "When I'm not writing code, I'm exploring new design trends, contributing to open source, and mentoring aspiring developers.",
  email: "hello@yourportfolio.com",
  availability: "Open to Work",
  availabilitySub: "Full Time · Freelance",
};

export const stats = [
  { num: "2+", label: "Years Exp." },
  { num: "10+", label: "Projects" },
  { num: "5+", label: "Clients" },
];

export const skills = [
  { name: "Frontend", desc: "React, Vue, HTML/CSS" },
  { name: "Backend", desc: "Node.js, Python, APIs" },
  { name: "UI / UX", desc: "Figma, Prototyping" },
  { name: "Database", desc: "SQL, MongoDB, Redis" },
  { name: "DevOps", desc: "Docker, CI/CD, AWS" },
  { name: "Data Science", desc: "PySpark, Power BI, " }
];

export const projects = [
  {
    id: "01",
    title: "Utkarsh – Hybrid Hostel Management",
    desc: "Spearheaded a hybrid platform digitizing hostel operations — leave management, room allocation, OTP authentication, and QR-based validation for secure access. Built scalable RESTful APIs and a centralized admin dashboard.",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    link: "#",           // 🔗 replace # with your live link
    github: "https://github.com/YOUR_USERNAME/utkarsh",   // ← your GitHub repo
    date: "Jan 2026",
  },
  {
    id: "02",
    title: "Prayog Sarthi – Full Stack Booking App",
    desc: "Architected a full-stack booking platform with role-based authentication for strict data confidentiality. Engineered secure backend APIs and optimized MongoDB schemas for high concurrent user traffic.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    link: "#",
    github: "https://github.com/YOUR_USERNAME/prayog-sarthi",
    date: "July 2025",
  },
  {
    id: "03",
    title: "Road Accident Analysis Dashboard",
    desc: "Business Intelligence solution analyzing 50,000+ accident records to identify high-risk zones in India. Engineered complex DAX measures with Time Intelligence and Filter Context for YoY growth and severity ratios.",
    tags: ["Power BI", "DAX", "Power Query", "Excel"],
    link: "#",
    github: "https://github.com/YOUR_USERNAME/road-accident-dashboard",
    date: "Sep 2025",
  },
  {
    id: "04",
    title: "Ecommerce ETL Pipeline – Big Data",
    desc: "End-to-end ETL pipeline on Databricks ingesting and transforming raw ecommerce CSV data into partitioned analytics-ready datasets. PySpark for distributed cleaning, deduplication, and sales aggregations exported as Parquet files.",
    tags: ["PySpark", "Databricks", "Apache Spark", "Python", "Delta Lake"],
    link: "#",
    github: "https://github.com/YOUR_USERNAME/ecommerce-etl-pipeline",
    date: "Mar 2026",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/RahulPrsad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rahulprsad/" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
