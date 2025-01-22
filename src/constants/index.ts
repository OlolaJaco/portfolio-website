import todo from '../assets/todo.png';
import validation from '../assets/validation.png';
import chatApp from '../assets/chat app.png';
import dashboard from '../assets/dashboard.png';
import shareduled from '../assets/Shareduled.png';

export const Hero_Content: string = `A detail-oriented web developer with 1+ years experience in creating dynamic and
responsive web applications. Driven by a client-first mindset and result oriented
approach. Skilled in both Frontend and Backend development, with a focus on MERN
Stack, I am exploring new Fulltime roles in order to continue developing my career in
Fullstack domain. Available Immediately.`;

export const About_Content: string = `Hi, I'm a dedicated and detail-oriented web developer with over 1 year of experience crafting dynamic, user-friendly, and responsive web applications. I thrive on turning ideas into functional, visually appealing solutions that address real-world challenges.

With expertise in Frontend and Backend development—particularly in the MERN Stack—I have successfully built projects that showcase my skills in creating seamless user experiences and efficient backend systems. My commitment to continuous learning has enabled me to explore cutting-edge technologies and deliver high-quality solutions.

Beyond coding, I bring a client-first mindset and a results-oriented approach, ensuring every project meets or exceeds expectations. Currently, I’m open to full-time roles that allow me to contribute to innovative teams while continuing to grow as a Fullstack Developer.

When I'm not coding, I enjoy sharing knowledge through teaching and mentoring in software development, fostering collaboration, and empowering others in their tech journeys.

Let’s build something great together! 🚀`

export const Experiences = [
    {
        year: "Nov 2024 - Present",
        role: "Software Developer Intern",
        company: "Shareduled",
        description: `Collaborate on an existing codebase, integrating new technologies and features using React and TypeScript to enhance functionality and performance.`,
        technologies: ["TypeScript", "React.js"]
    },
    {
        year: "May 2024 - Oct 2024",
        role: "Software Development Assistant Trainee",
        company: "GoMyCode",
        description: `Assisted over 30 students, focusing on frontend (React, JavaScript) and backend (Node.js, MongoDB) development across 70+ coding sessions.`,
        technologies: ["JavaScript", "TypeScript" , "React.js", "Next.js", "mongoDB", "Node.js"]
    },
    {
        year: "July 2023 - April 2024",
        role: "Web Developer Intern",
        company: "Fumman Chemicals",
        description: `Developed 5+ user-friendly web interfaces, translating design mockups into functional applications, and collaborated with a team of 6 developers.`,
        technologies: ["HTML", "CSS", "JavaScript",]
    },
]

export const Projects = [
    {
        title: "Shareduled",
        Image: shareduled,
        description: `A scheduling platform that enables business and users to book appointments schedules for services, helps coordinate tasks and manage time effectively.`,
        technologies: ["React.js", "TypeScript"],
        gitHub: "/",
        live: "https://shareduled.com/"
    },
    {
        title: "Marketing Dashboard",
        Image: dashboard,
        description: `A responsive and user-friendly marketing dashboard that displays real-time data analytics, allowing users to track and analyze key performance metrics.`,
        technologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
        gitHub: "https://github.com/OlolaJaco/Next-Learn.git",
        live: "https://next-landing-puce.vercel.app/"
    },
    {
        title: "Chat Application",
        Image: chatApp,
        description: `A real-time chat application that enables users to communicate with each other, create chat rooms, and share messages and files.`,
        technologies: ["React.js", "DaisyUI", "MongoDB", "Tailwind CSS", "Node.js"],
        gitHub: "https://github.com/OlolaJaco/chat-app.git",
        live: "https://chat-app-jade-phi.vercel.app/"
    },
    {
        title: "To-Do List",
        Image: todo,
        description: `A simple and intuitive to-do list application that allows users to add and delete tasks, helping them stay organized and productive.`,
        technologies: ["EJS", "Node.js", "JavaScript"],
        gitHub: "https://github.com/OlolaJaco/Backend-TodoList-Angela-Yu.git",
        live: "https://backend-todolist-zy16.onrender.com/"
    },
    {
        title: "Contact Form Validation",
        Image: validation,
        description: `A contact form with client-side validation that ensures users enter correct information before submitting, reducing errors and improving data quality.`,
        technologies: ["HTML", "CSS", "JavaScript"],
        gitHub: "https://github.com/OlolaJaco/Validation-Form.git",
        live: "https://ololajaco.github.io/Validation-Form/"
    }
]

export const Contact = {
    address: "Lagos, Nigeria",
    phone: "+234 903 177 9869",
    email: "akinbusolaakinola2@gmail.com"
}