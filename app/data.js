const projects = [
    {
        id:1,
        title:"Emax - Ecommerce web application",
        description:"A fully functional E-commerce Website with features like sign up, log in, cart, orders, sleek user interface and much more,",
        stack:["MongoDB", "ExpressJS", "NextJS", "NodeJS", "CSS", "tailwind-CSS"],
        image:"/images/emax.png",
        github:"https://github.com/Tad-z/EcommerceApp",
        link:"https://emax.vercel.app/"
    },
    {
        id:2,
        title:"Series Recommendation website",
        description:"A series recommending web app, where users can view series they can watch, add series they would like otherstowatchand users can also sort series.",
        stack:["MongoDB", "ExpressJS", "NextJS", "NodeJS", "CSS"],
        image:"/images/series.jpg",
        github:"https://github.com/Tad-z/seriesApp",
        link:"https://series-app-six.vercel.app"
        
    },
    {
        id:3,
        title:"Quiz Application",
        description:"This is a quiz web application where users take a quiz, view their result and vew the top 10 results of that quiz.",
        stack:["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "CSS"],
        image:"/images/quiz.png",
        github:"https://github.com/Tad-z/seriesApp",
        link:"https://quiz-app-t6ai.onrender.com"
    },
    {
        id:4,
        title:"Lecturely - Web-based Lecturer Management System",
        description:"An application I developed as part of an academic project. It is a system that allows a school adminstration handle their lecturers and their information",
        stack:["Java", "NetBeans", "XAMPP", "MySQL"],
        image:"/images/omnifood.png",
        github:"https://github.com/Tad-z/seriesApp",
        link: "https://tade-omnifood.vercel.app/"
    },
    {
        id:5,
        title:"TU Counsel - Counselling App",
        description:"A counseling system I contributed to, designed to offer accessible and convenient services to students through web-based resources, live chat, and appointment booking options.",
        stack:["Django", "Sqlite", "JavaScript", "YouTube API", "Google Calender API"],
        image:"/images/tucounsel.png",
        github:"https://github.com/YoungAli/Real-counselling",
    }
]

const ingredients = [
    {
        title: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        title: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        title: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
        title: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        title: "Next",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },

    {
        title: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        title: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
        title: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        title: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        title: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },

    {
        title: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        title: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        title: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },

];

module.exports = { projects, ingredients }