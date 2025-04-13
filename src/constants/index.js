export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Artzilla - A Modern Component Library',
        desc: 'A lightweight and customizable component library designed to streamline UI development with pre-built, responsive components.',
        subdesc:
            'Artzilla offers a collection of ready-to-use, customizable UI components built with modern design principles. It helps developers quickly build consistent, responsive, and visually appealing user interfaces without reinventing the wheel. Designed for flexibility, Artzilla supports seamless integration with various frontend frameworks.\n' +
            '\n',
        href: 'https://github.com/sagargse/artzilla',
        texture: '/textures/project/project1.mov',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Javascript',
                path: '/assets/js.png',
            },
            {
                id: 2,
                name: 'HTML-5',
                path: 'assets/html.png',
            },
            {
                id: 3,
                name: 'CSS',
                path: '/assets/css.png',
            }
        ],
    },
    {
        title: 'Kidszilla - E-Commerce Platform',
        desc: 'Kidszilla is a dynamic e-commerce platform designed to provide a seamless shopping experience for kids\' products. It offers an intuitive interface for browsing, purchasing, and managing orders with ease.',
        subdesc:
            'Built with React.js, Kidszilla ensures fast performance, responsive design, and a smooth user experience. It features secure payment integration, real-time inventory updates, and personalized recommendations to enhance the shopping journey.',
        href: 'https://github.com/sagargse/ecommerce-kidszilla',
        texture: '/textures/project/project2.mov',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Javascript',
                path: 'assets/js.png',
            }
        ],
    },
    {
        title: "Spotify Integration",
        desc: "Real-time Spotify data display, featuring my 'Now Playing' song and Top 10 Tracks fetched via the Spotify Web API.",
        subdesc: "A Node.js serverless function on Vercel manages Spotify OAuth 2.0 authentication and serves the data to the React frontend. (Playback control is Premium-only).",
        href: 'https://buildwithsagar.vercel.app/api/spotify',
        spotlight: "/assets/spotlight5.png",
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        texture: '/textures/project/project2.mov',
        type: 'spotify',
        tags: [
            { name: "Node.js", path: "/assets/nodejs.png" },
            { name: "React", path: "/assets/react.svg" },
            { name: "API", path: "/assets/api.png" },
            { name: "Spotify API", path: "/assets/spotify.png" },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.07 : isMobile ? 0.08 : 0.09,
        deskPosition: isSmall ? [0.5, -6, 0] : isMobile ? [0.5, -7, 0] : isTablet ? [0.5, -8.5, 0] : [0.25, -7.5, 0],
        cubePosition: isSmall ? [4, -9, 0] : isMobile ? [5, -10, 0] : isTablet ? [10, -10, 0] : [15, -9.5, 0],
        reactLogoPosition: isSmall ? [4, 5, 0] : isMobile ? [5, 6, 0] : isTablet ? [8, 5, 0] : [18, 4.8, -7],
        ringPosition: isSmall ? [-7, 8, 0] : isMobile ? [-9, 10, 0] : isTablet ? [-16, 8, 0] : [-35, 8, -12],
        targetPosition: isSmall ? [-6, -14, -10] : isMobile ? [-8, -15, -10] : isTablet ? [-15, -15, -10] : [-18, -12, -3],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'CRISIL - An S&P Global Company',
        pos: 'Senior Associate (SDE-1)',
        duration: 'Jan. 2023 - Present',
        title: "At CRISIL, I worked as a Software Engineer, focusing on Oracle PL/SQL, JavaScript, React, Java, and ETL development. I built data flows and implemented RBI-issued triggers. I developed frontend features using React and worked on backend services with Java. My role also involved database management and optimizing ETL pipelines for seamless data processing.",
        icon: '/assets/crisil.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Edoofa',
        pos: 'Data Annotation Internship',
        duration: 'Feb. 2020 - Mar. 2020',
        title: "During my internship, I worked on data annotation, labeling datasets to improve AI/ML model accuracy. I ensured high-quality annotations for training data, helping refine machine learning algorithms.",
        icon: '/assets/edoofa.jpeg',
        animation: 'clapping',
    }
];