const logotext = "Keith";
const meta = {
    title: "Keith Murphy",
    description: "My name is Keith Murphy, I am a full stack developer from Seattle Washington.",
};

const introdata = {
    title: "I’m Keith Murphy",
    animated: {
        first: "Full Stack Web Developer",
        second: "I design websites",
        third: "I develop mobile apps",
    },
    description: "Seattle based Full Stack Web Developer, ready to bring your vision to life",
    your_img_url: "https://i.postimg.cc/L6d0pBvN/robert-ritchie-JEic-DFy5-Cd8-unsplash.jpg",
};

const dataabout = {
    title: "About Me",
    aboutme: "Web Developer with a passion for learning and problem solving. Front-end focused, but I'm always looking to learn more about the back-end.Eager and ready to utilize my passion for tech and creating apps to follow a dream career. ⭐Graduate of the University of Washington Full-Stack Web Development Bootcamp.⭐",
};


const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Python",
        value: 60,
    },
    {
        name: "Git",
        value: 85,
    },
];

// Fix image sizing and spacing, add links and descriptions // Add a Title to each project // 
const dataportfolio = [{
        img: "https://i.postimg.cc/dV4nsphQ/Screenshot-2022-04-08-034350.jpg",
        title: "There and Back Again",
        description: "Interactive Travel app, Log Miles on your way to Mordor.",
        link: "#",
        repo: "https://github.com/ksapir/There-And-Back-Again",
    },
    {
        img: "https://i.postimg.cc/qvKMV29S/smartcam-Screen-04-11-092934.jpg",
        title:"TensorFlow SmartCam",
        description: "AI image recognition app, built with TensorFlow.",
        link: "https://keithmurph.github.io/tensorFlowSmartCam/",
        repo: "https://github.com/KeithMurph/tensorFlowSmartCam",
    },
    {
        img: "https://i.postimg.cc/NMKZ2J0F/Screenshot-2021-08-22-204634.png",
        title: "Budget Tracker",
        description: "Enter deposits and expenses offline, when brought back online, the app will update with the new data.",
        link: "#",
        repo: "https://github.com/KeithMurph/budgetTrackerPWA",
    },
    {
        img: "https://i.postimg.cc/y8CScpYt/Screenshot-2023-07-30-184936.png",
        title: "Live Code Editor",
        description: "Live Code Editor with HTML, CSS, and JavaScript.",
        link: "https://keithmurph.github.io/codeEditor/",
        repo: "https://github.com/KeithMurph/codeEditor",
    },
    {
        img: "https://i.postimg.cc/ydprVFXK/Screenshot-2021-08-24-234915.png",
        title: "Perfect Home",
        description: "Pet finder App",
        link: "#",
        repo: "https://github.com/KeithMurph/PerfectHome",
    },
    {
        img: "https://i.postimg.cc/NfWdkFt9/Screenshot-2022-02-04-102616.png",
        title: "Wordle Clone",
        description: "Wordle Clone",
        link: "#",
        repo: "https://github.com/KeithMurph/Wordle",
    },


];

// Email.js template sends email to keithmurphy.dev@gmail 
const contactConfig = {
    YOUR_EMAIL: "keithmurphy.dev@gmail.com",
    YOUR_FONE: "(520)891-2082",
    description: "",
    YOUR_SERVICE_ID: "service_71knnd8",
    YOUR_TEMPLATE_ID: "template_dyqkm2a",
    YOUR_USER_ID: "c7Opcz71Vuwxt-QXz",
};

const socialprofils = {
    github: "https://github.com/KeithMurph",
    linkedin: "https://www.linkedin.com/in/keithmurph/",
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};