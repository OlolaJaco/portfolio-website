import todo from "../assets/todo.png";
import validation from "../assets/validation.png";
import chatApp from "../assets/chat app.png";
import dashboard from "../assets/dashboard.png";
import shareduled from "../assets/Shareduled.png";
import blog from "../assets/jaco-blog.png";
import property from "../assets/property-pulse.png";
import streamer from "../assets/streamer.png";

export const Hero_Content: string = `Passionate Fullstack Web Developer with 2+ years of hands-on experience building responsive, high performing web applications using the MERN stack. Focused on delivering impactful, user centered solutions with clean code and scalable architecture. Open to full-time roles—available immediately.`;

export const About_Content: string = `Hi, I’m Akinbusola Akinola a detail driven Fullstack Web Developer with over 2 years of experience designing and developing responsive, user-focused web applications. I specialize in both frontend and backend technologies, with a strong command of the MERN stack (MongoDB, Express.js, React/Next.js, Node.js).

Whether I’m building SEO-optimized, scalable applications from scratch or collaborating within a team to enhance user experience and performance, I approach each project with a client-first mindset and a passion for problem-solving. My work has driven real-world impact—like increasing a platform’s organic reach to 3,000+ impressions in one month through thoughtful frontend engineering and performance tuning.

I’m constantly expanding my technical toolkit and exploring how emerging technologies including AI can power smarter, more efficient solutions. I also enjoy mentoring and helping others grow in their development journeys through teaching and collaboration.

I'm currently open to full-time opportunities where I can contribute to innovative teams, build real value, and continue growing as a developer. Let’s create something meaningful together!`;

export const Experiences = [
  {
    year: "Nov 2024 - Present",
    role: "Software Developer Intern",
    company: "Shareduled",
    description: `Collaborate on an existing codebase, integrating new technologies and features using React and TypeScript to enhance functionality and performance.`,
    technologies: [
      "TypeScript",
      "React.js",
      "Next.Js",
      "MaterialUI",
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
    title: "Shareduled",
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
    title: "Streamer - Movie Streaming Web App",
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
    title: "Property Sales and Rent App",
    Image: property,
    description: `A property listing web application for buying, selling, and renting houses.
Users can explore available properties, while agents are directly contacted regarding inquiries or orders. The platform connects prospective buyers or renters with verified agents,.`,
    technologies: ["NextJS", "TypeScript", "DaisyUi", "MongoDB"],
    gitHub: "https://github.com/OlolaJaco/property-pulse.git",
    live: "https://property-pulse-five-beige.vercel.app",
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
