import todo from "../assets/todo.png";
import validation from "../assets/validation.png";
import chatApp from "../assets/chat app.png";
import dashboard from "../assets/dashboard.png";
import shareduled from "../assets/Shareduled.png";
import blog from "../assets/jaco-blog.png";
import kainkain from "../assets/kainkain.png";
import streamer from "../assets/streamer.png";
import golvia from "../assets/golvia.png";

export const Hero_Content: string = `Passionate Fullstack Web Developer with 2+ years of hands-on experience building responsive, high performing web applications using the MERN stack. Focused on delivering impactful, user centered solutions with clean code and scalable architecture. Open to full-time roles—available immediately.`;

export const About_Content: string = `Hi, I’m Akinbusola Akinola, a detail-driven Fullstack Web Developer with 2+ years of experience building performant, user-centric web applications.

I specialize in the MERN stack (MongoDB, Express.js, React/Next.js, Node.js), crafting both frontend and backend solutions that are responsive, scalable, and optimized for real-world impact.

🔧 On day one at Golvia, I resolved a critical authentication bug, unlocking investor access for live testing, a key enabler in closing a $10,000 funding deal.
🛸 I’ve also boosted Shareduled’s organic reach to 3,000+ monthly impressions by engineering SEO-ready, high-performance frontend experiences.
🤝 Whether working solo or within cross-functional teams, I approach every project with a problem-solving mindset and a passion for user experience.

Beyond coding, I’m actively exploring how AI and emerging technologies can enhance modern development, and I enjoy mentoring junior developers through teaching and collaboration.

I’m currently open to full-time roles where I can contribute to innovative teams, build products that matter, and keep growing as a developer.

👉 Let’s create something impactful together.`;

export const Experiences = [
  {
    year: "July 2025 - Present",
    role: "Frontend Developer",
    company: "Forah Technology",
    description: `Fixed Golvia’s authentication system on my first day, enabling investor access for live testing,  a key factor in securing a $10,000 investment deal.`,
    technologies: [
      "TypeScript",
      "React.js",
      "NextJs",
      "MaterialUI",
    ],
  },
  {
    year: "Nov 2024 - Present",
    role: "Software Developer Intern",
    company: "GJIO Technologies Inc.",
    description: `Implemented technical SEO (SSR, meta tags, structured data), resulting in 3,000+ monthly organic users.`,
    technologies: [
      "TypeScript",
      "NextJs",
      "DaisyUI",
    ],
  },
  {
    year: "May 2024 - Oct 2024",
    role: "Software Development Assistant Trainee",
    company: "GoMyCode",
    description: `Assisted over 30 students, focusing on frontend (React, JavaScript) and backend (Node.js, MongoDB) development across 70+ coding sessions.`,
    technologies: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "mongoDB",
      "Node.js",
    ],
  },
  {
    year: "July 2023 - April 2024",
    role: "Web Developer Intern",
    company: "Fumman Chemicals",
    description: `Developed 5+ user-friendly web interfaces, translating design mockups into functional applications, and collaborated with a team of 6 developers.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const Projects = [
  {
    title: "Shareduled - Appointment Booking Marketing Application",
    Image: shareduled,
    description: `A scheduling platform that enables business and users to book appointments schedules for services, helps coordinate tasks and manage time effectively.`,
    technologies: [
      "NextJS",
      "TypeScript",
      "DaisyUI",
    ],
    gitHub: "/",
    live: "https://shareduled.com/",
  },
  {
    title: "Golvia Sports - Social Media Platform for Sports Enthusiasts",
    Image: golvia,
    description: `A social media platform tailored for sports enthusiasts, featuring real-time updates, community engagement, and personalized content feeds.`,
    technologies: [
      "TypeScript",
      "React.js",
      "NextJs",
      "MaterialUI",
      "OAuth2.0",
    ],
    gitHub: "/",
    live: "https://golviasports.com/",
  },
  {
    title: "Streamer - Movie Streaming Web Application",
    Image: streamer,
    description: `A web-based movie streaming application that allows users to browse trending films, explore TV shows, and search for specific titles. The platform includes user authentication, theme switching (light,dark mode...), and a sleek, responsive UI for an immersive viewing experience.`,
    technologies: [
      "NextJS",
      "TypeScript",
      "DaisyUI",
      "MongoDB",
      "OAuth2.0",
    ],
    gitHub: "https://github.com/OlolaJaco/streamer.git",
    live: "https://streamer-xi.vercel.app",
  },
  {
    title: "KainKain - Nigeria Native Art e-commerce Web Application",
    Image: kainkain,
    description: `An e-commerce platform focused on selling Nigerian art products crafted with native kain kain sponge and curated art photography, allowing users to browse, search, and purchase artworks. The application features a user-friendly interface, secure payment processing, and a responsive design for an optimal shopping experience.`,
    technologies: ["NextJS", "TypeScript", "DaisyUi", "MongoDB"],
    gitHub: "/",
    live: "https://kain-kain-git-staging-adeoyetunmises-projects.vercel.app?_vercel_share=KaypY4lbTGD7PDIEs4aNBWRMJR6Iay9m",
  },
  {
    title: "Blog Website",
    Image: blog,
    description: `A high-performance blog website using Next.js, featuring dynamic search, sorting, and category filtering, alongside comprehensive SEO optimization for improved organic visibility.`,
    technologies: ["NextJS", "TypeScript", "DaisyUi", "MongoDB"],
    gitHub: "https://github.com/OlolaJaco/Blog-NextJS.git",
    live: "https://blog-next-js-psi-red.vercel.app/",
  },
  {
    title: "Marketing Dashboard",
    Image: dashboard,
    description: `A responsive and user-friendly marketing dashboard that displays real-time data analytics, allowing users to track and analyze key performance metrics.`,
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    gitHub: "https://github.com/OlolaJaco/Next-Learn.git",
    live: "https://next-landing-puce.vercel.app/",
  },
  {
    title: "Chat Application",
    Image: chatApp,
    description: `A real-time chat application that enables users to communicate with each other, create chat rooms, and share messages and files.`,
    technologies: ["ReactJS", "DaisyUI", "MongoDB", "Tailwind CSS", "Node.js"],
    gitHub: "https://github.com/OlolaJaco/chat-app.git",
    live: "https://chat-app-jade-phi.vercel.app/",
  },
  {
    title: "To-Do List",
    Image: todo,
    description: `A simple and intuitive to-do list application that allows users to add and delete tasks, helping them stay organized and productive.`,
    technologies: ["EJS", "Node.js", "JavaScript"],
    gitHub: "https://github.com/OlolaJaco/Backend-TodoList-Angela-Yu.git",
    live: "https://backend-todolist-zy16.onrender.com/",
  },
  {
    title: "Contact Form Validation",
    Image: validation,
    description: `A contact form with client-side validation that ensures users enter correct information before submitting, reducing errors and improving data quality.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    gitHub: "https://github.com/OlolaJaco/Validation-Form.git",
    live: "https://ololajaco.github.io/Validation-Form/",
  },
];

export const Contact = {
  address: "Lagos, Nigeria",
  phone: "+234 903 177 9869",
  email: "akinbusolaakinola2@gmail.com",
};
