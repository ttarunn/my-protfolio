import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    seo,
    tenX,
    
    linkdin,
    gmail,
    leetcode,
    discord,
    FlickFlow,
    YouTube,
    instaClone,
    wtsapp,
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
    {
      title: "Apprenticeship",
      company_name: "The 10x Academy",
      icon: tenX,
      iconBg: "#383E56",
      date: "Dec 2022 - Sep 2023",
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
      date: "Jan 2021 - Feb 2022",
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
      name: "Insta Clone",
      description:
        "A small Insta Clone Project. User can upload a new post and like and view others post.",
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
      source_code: "https://github.com/ttarunn/instaclone",
      live_link: "https://insta-dummy-clone.netlify.app/"
    },
    
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
  },
  {
    name: "Whatsapp",
    image: wtsapp,
    source_link: "https://api.whatsapp.com/send?phone=+918791701989&text=Hello Tarun!"
  }
]
  
  export { services, technologies, experiences, testimonials, projects, social};