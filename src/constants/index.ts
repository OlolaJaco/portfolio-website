import todo from "../assets/todo.png";
import validation from "../assets/validation.png";
import chatApp from "../assets/chat app.png";
import dashboard from "../assets/dashboard.png";
import blog from "../assets/jaco-blog.png";
import kainkain from "../assets/kainkain.png";
import streamer from "../assets/streamer.png";
import subscriptionTracker from '../assets/subscription-tracker.png';
import eduspra from '../assets/eduspra.png';

export const Hero_Content: string = `Full-Stack & Blockchain Engineer specializing in resilient Web3 protocols, sovereign Layer-1 app-chains, and high-concurrency cloud architectures. Proven track record architecting multi-tenant platforms, deploying EVM-compatible networks, and delivering mission-critical systems that drive real-world funding and scale.`;

export const About_Content: string = `I am a Full-Stack and Blockchain Engineer who bridges complex distributed systems with intuitive, production-grade applications. My expertise spans the entire development lifecycle—from engineering sovereign Layer-1 App-Chains and EVM execution environments to architecting fault-tolerant, multi-tenant cloud platforms.

Over the past two years, I’ve operated at the intersection of blockchain infrastructure and scalable web development:
• Blockchain & Web3: Architected a sovereign Cosmos SDK Layer-1 App-Chain with CometBFT consensus, deployed 3-node validator clusters with real-time telemetry, and engineered audited Solidity smart contracts (ERC-20/721, Hardhat/Foundry, Wagmi).
• Scalable Full-Stack Systems: Engineered multi-tenant SaaS architectures with strict tenant isolation, real-time WebSocket communication pipelines, and optimized Next.js/NestJS applications serving thousands of users.
• High-Stakes Impact: Debugged and resolved an investor-critical authentication bottleneck on day one at Forah Tech, unlocking live testing that secured a $10,000 investment round.

Whether designing decentralized protocols or shipping production full-stack systems, I focus on system reliability, clean domain-driven architecture, and measurable product growth.`;

export const Experiences = [
  {
    year: "Aug 2026 - Present",
    role: "Blockchain Engineer",
    company: "Tsion Corp",
    description: `Designed and deployed a sovereign enterprise-grade Layer-1 App-Chain alongside its decentralized exchange infrastructure.`,
    technologies: ["Cosmos SDK", "Solidity"],
  },
   {
    year: "Jan 2026 - Present",
    role: "Backend Developer",
    company: "CNITCODE Technology & Consult",
    description: `Sole backend engineer responsible for architecting and developing a three-party e-commerce platform with a scalable multi-tenant ed-tech platform.`,
    technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker"],
  },
  {
    year: "Jan 2026 - April 2026",
    role: "Blockchain Developer",
    company: "Web3Bridge",
    description: `Designing and implementing smart contracts using Solidity, including ERC20 and ERC721 tokens, and integrating them with web applications using Web3.js and Ethers.js whilst testing with Hardhat and Foundry.`,
    technologies: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Foundry"],
  },
  {
    year: "July 2025 - Oct 2025",
    role: "Frontend Developer",
    company: "Forah Technology",
    description: `Fixed Golvia’s authentication system on my first day, enabling investor access for live testing, a key factor in securing a $10,000 investment deal.`,
    technologies: ["TypeScript", "React.js", "NextJs", "MaterialUI"],
  },
  {
    year: "Nov 2024 - Nov 2025",
    role: "Software Developer Intern",
    company: "GJIO Technologies Inc.",
    description: `Implemented technical SEO (SSR, meta tags, structured data), resulting in 3,000+ monthly organic users.`,
    technologies: ["TypeScript", "NextJs", "DaisyUI"],
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
  }
];

export const Projects = [
  {
    title: "Subscription Tracker",
    Image: subscriptionTracker,
    description: `This is the backend for a subscription tracker application. It is built with Node.js and Express.js, and it uses MongoDB as its database. The application provides a RESTful API for managing user subscriptions.`,
    technologies: ["ExpressJS", "MongoDB"],
    gitHub: "https://github.com/OlolaJaco/subscription-tracker-express.js.git",
    live: "https://documenter.getpostman.com/view/37531984/2sB3WsNeXr",
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
    title: "Eduspra - Multi-tenant Ed-Tech Platform",
    Image: eduspra,
    description: `The Eduspra platform is a multi-tenant ed-tech solution designed to serve various educational institutions. It provides a comprehensive set of tools for managing courses, students, and instructors, all within a single, unified interface.`,
    technologies: ["ExpressJS", "PostgreSQL", "Redis"],
    live: "https://eduspra.com",
  },
  {
    title: "Chat Application",
    Image: chatApp,
    description: `A real-time chat application that enables users to communicate with each other, create chat rooms, and share messages and files.`,
    technologies: ["ReactJS", "DaisyUI", "MongoDB", "Tailwind CSS", "Node.js"],
    gitHub: "https://github.com/OlolaJaco/chat-app.git",
    live: "https://chat-app-jade-phi.vercel.app",
  },
  {
    title: "Streamer - Movie Streaming Web Application",
    Image: streamer,
    description: `A web-based movie streaming application that allows users to browse trending films, explore TV shows, and search for specific titles. The platform includes user authentication, theme switching (light,dark mode...), and a sleek, responsive UI for an immersive viewing experience.`,
    technologies: ["NextJS", "TypeScript", "DaisyUI", "MongoDB", "OAuth2.0"],
    gitHub: "https://github.com/OlolaJaco/streamer.git",
    live: "https://streamer-xi.vercel.app",
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
