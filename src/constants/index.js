import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nextjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    seo,
    tenX,
    aperion,
    linkdin,
    gmail,
    leetcode,
    discord,
    FlickFlow,
    YouTube,
    instaClone,
    nextjsAuth,
    myBlog
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "NextJS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    // {
    //   title: "Full Stack Developer",
    //   company_name: "Aperion Digital Media",
    //   icon: aperion,
    //   iconBg: "#383E56",
    //   date: "Present",
    //   points: [
    //     "Spearheaded end-to-end development, including front-end and back-end components, using the MERN stack to create responsive and dynamic web applications.",
    //     "Ensured cross-browser and cross-device compatibility for web applications, delivering a consistent user experience across various platforms.",
    //     "Created RESTful APIs with Node.js and Express, facilitating data exchange between the front-end and back-end components, leading to a more modular and maintainable codebase.",
    //     "Utilized Git and GitHub for version control, ensuring a well-organized and collaborative development environment.",
    //     "Conducted and participated in code reviews to maintain code quality, adherence to coding standards, and knowledge sharing among team members."
    //   ],
    // },
    {
      title: "Apprenticeship",
      company_name: "The 10x Academy",
      icon: tenX,
      iconBg: "#383E56",
      date: "",
      points: [
        "Implemented Youtube and insta clone with the help of MERN Stack",
        "Collaborating with other Students to create user friendly and responsive projects.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Solved Around 300+ DSA problems on 10x Portal including Leetcode also."
      ],
    },
    {
      title: "Search Engine Optimizer",
      company_name: "EwebGuide",
      icon: seo,
      iconBg: "#383E56",
      date: "",
      points: [
        "Identify relevant keywords and phrases that users are likely to search for in your niche or industry.",
        "Optimize individual web pages by incorporating keywords into titles, headings, meta descriptions, and content. Ensure proper URL structures and use of alt tags for images.",
        " Create high-quality, valuable, and engaging content that addresses user intent and provides solutions to their queries.",
        "Improve website loading times for a better user experience and improved search rankings.",
        "Address technical issues like broken links, duplicate content, XML sitemaps, and robots.txt to ensure search engines can crawl and index your site efficiently.",
        "Build High Quality Backlinks in off-page SEO to Increase the rank of our project in Google SERP's"
      ],
    },
   
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Flick Flow",
      description:
        "Web-based platform that allows users to search, view, upload and edit their videos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "reduxjs",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
      ],
      image: FlickFlow,
      source_code: "https://github.com/ttarunn/video-sharing-app",
      live_link: "https://flickflow.netlify.app/"
    },
    {
      name: "YouTube Clone",
      description:
        "YouTube Frontend Layer using youtube API's and implemented routes, Search API, Live Chat and nested comments etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reduxjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: YouTube,
      source_code: "https://github.com/ttarunn/youtube-clone",
      live_link: "https://utube-dummy.netlify.app/"
    },
    {
      name: "NextJS Auth Project",
      description:
        "This is a login, signup, and forgot password implemetation for understanding of how nextjs full stack framework works.",
        tags: [
          {
            name: "nextjs",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "restapi",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindcss",
            color: "green-text-gradient",
          },
        ],
      image: nextjsAuth,
      source_code: "https://github.com/ttarunn/nextjs-auth-project",
      live_link: "https://next-js-auth-project.vercel.app/"
    },
    {
      name: "Photo Sharing App",
      description:
        "Capture, share, and connect with our Photo Sharing App. Sign up, log in, and effortlessly upload your cherished moments to share with friends and family.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "reduxjs",
            color: "pink-text-gradient",
          },
          {
            name: "restapi",
            color: "blue-text-gradient",
          },
          {
            name: "expressjs",
            color: "green-text-gradient",
          },
        ],
      image: instaClone,
      source_code: "https://github.com/ttarunn/photo-sharing-app",
      live_link: "https://photo-wave.netlify.app/"
    },
    // {
    //   name: "My Blog - Real Time Editor",
    //   description:
    //     "Seamlessly craft, edit, and share your thoughts with our user-friendly platform. Experience hassle-free, real-time blogging that puts your creativity in the spotlight.",
    //     tags: [
    //       {
    //         name: "react",
    //         color: "blue-text-gradient",
    //       },
    //       {
    //         name: "appwrite",
    //         color: "green-text-gradient",
    //       },
    //       {
    //         name: "reduxjs",
    //         color: "pink-text-gradient",
    //       },
    //       {
    //         name: "tailwind",
    //         color: "blue-text-gradient",
    //       }
    //     ],
    //   image: myBlog,
    //   source_code: "https://github.com/ttarunn/blog-project-appwrite",
    //   live_link: "https://blogbuzz.vercel.app/"
    // },
    
  ];
  const social = [{
      name: "LinkeDin",
      image: linkdin,
      source_link: "https://www.linkedin.com/in/ittarunn/"
  },
  {
    name: "Email",
    image: gmail,
    source_link: "mailto: ttarunn0709@gamil.com"
  },
  {
    name: "Leetcode",
    image: leetcode,
    source_link: "https://leetcode.com/ittarunn/"
  },
  {
    name: "Discord",
    image: discord,
    source_link: "https://discordapp.com/users/947866702568382475"
  }
]
  
  export { services, technologies, experiences, testimonials, projects, social};