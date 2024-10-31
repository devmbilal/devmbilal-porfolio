/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "devmbilal",
  title: "Hi all, I'm Bilal",
  subTitle: emoji(
    "A backend and API developer skilled in Node.js, Express.js, and database management, with experience in building scalable applications and RESTful APIs. Currently expanding my expertise in DevOps to optimize and automate workflows."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11ICeubk_E5kc81orhXtunwS2dF_ls_yi/view?usp=sharing", // Replace with your actual resume link if different
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devmbilal",
  linkedin: "https://www.linkedin.com/in/dev-mbilal/",
  gmail: "dev.mdbilal@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@devmbilal",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: 'https://www.instagram.com/devmbilal/',
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND DEVELOPER EXPLORING DEVOPS AND API DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Develop scalable backend services and RESTful APIs using Node.js and Express.js"
    ),
    emoji("⚡ Database management and integration with MongoDB and MySQL"),
    emoji(
      "⚡ Experience with collaborative tools like Git and GitHub for version control and teamwork"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fa-brands fa-git-alt"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Quaid-i-Azam University",
      logo: require("./assets/images/qauLogo.png"), // Replace with the actual path to your university's logo image
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2021 - July 2025",
      desc: "Focused on core computer science subjects including algorithms, data structures, and software development.",
      descBullets: [
        "CGPA: 3.3 / 4.0",
        "Courses: Functional Programming, Data Structures, Web Development, Artificial Intelligence"
      ]
    },
    {
      schoolName: "Punjab College",
      logo: require("./assets/images/punjabCollegeLogo.png"), // Replace with the actual path to your college's logo image
      subHeader: "FSc Pre-Engineering",
      duration: "August 2019 - August 2021",
      desc: "Pre-engineering program with a focus on mathematics and physics.",
      descBullets: [
        "Marks: 963 / 1100",
        "Developed foundational knowledge in engineering and mathematics."
      ]
    },
    {
      schoolName: "Pak Junior High School",
      logo: require("./assets/images/pakJuniorLogo.png"), // Replace with the actual path to your school’s logo image
      subHeader: "Matriculation",
      duration: "July 2017 - July 2019",
      desc: "Focused on science and mathematics.",
      descBullets: ["Marks: 1064 / 1100"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/API Development", // Strong expertise in backend and API work
      progressPercentage: "90%" // Reflects high proficiency in backend/API skills
    },
    {
      Stack: "Database Management", // Emphasis on database handling for backend applications
      progressPercentage: "80%" // Proficiency in SQL, NoSQL databases like MySQL, MongoDB
    },
    {
      Stack: "DevOps", // Experience in managing deployment and CI/CD
      progressPercentage: "60%" // Reflects intermediate knowledge of DevOps practices
    },
    {
      Stack: "Programming", // Proficiency in languages relevant to backend, such as Python, Node.js, Java
      progressPercentage: "85%" // Reflects strong general programming skills
    }
  ],
  displayCodersrank: false // Set to true to display CodersRank badges; update username if enabled
};



// Work experience section

const workExperiences = {
  display: true, // Set to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "Road Safety",
      companylogo: require("./assets/images/worldBankLogo.png"), // Replace with the actual path to World Bank logo
      date: "September 2023 – Present",
      desc: "Developed and maintained backend solutions for a road safety project funded by the World Bank.",
      descBullets: [
        "Worked with interdisciplinary teams to understand and meet project requirements",
        "Implemented APIs and provided technical support to ensure project success"
      ]
    },
    {
      role: "DevOps Fellow",
      company: "Bytewise Fellowship",
      companylogo: require("./assets/images/bytewiseLogo.png"), // Replace with the actual path to Bytewise logo
      date: "June 2024 – August 2024",
      desc: "Selected for the Bytewise DevOps Fellowship to develop skills in DevOps practices and tools.",
      descBullets: [
        "Gained hands-on experience with CI/CD pipelines and deployment practices",
        "Collaborated with peers in the BWT - DevOps Track to solve real-world DevOps challenges"
      ]
    },
    {
      role: "Flutter Intern",
      company: "Dexplat",
      companylogo: require("./assets/images/dexplatLogo.png"), // Replace with the actual path to Dexplat logo
      date: "July 2023 – August 2023",
      desc: "Contributed to project discussions and collaborated with team members in building Flutter-based applications.",
      descBullets: [
        "Participated in code reviews and resolved merge conflicts on GitHub",
        "Enhanced understanding of software architecture and teamwork in a remote setting"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS WHERE I MADE A SIGNIFICANT IMPACT IN DEVELOPMENT",
  projects: [
    {
      image: require("./assets/images/gcf744Logo.png"), // Replace with actual path to GCF-744 project logo
      projectName: "Islamabad Public Route Optimization",
      projectDesc:
        "Collaborated on optimizing public transport routes in Islamabad, visualizing routes using GIS tools, Python, and data from Jazz.",
      footerLink: [
        {
          name: "View Project",
          url: "https://rs.qau.edu.pk/admin-panel/" // Update with the actual project link if available
        }
      ]
    },
    {
      image: require("./assets/images/smartJourneyLogo.png"), // Replace with actual path to project logo
      projectName: "Admin Panel for Smart Journey Planning",
      projectDesc:
        "Developed an admin panel for the Smart Journey App, managing routes, trips, and schedules, with Node.js and MongoDB.",
      footerLink: [
        {
          name: "View Project",
          url: "https://rs.qau.edu.pk/admin-panel/" // Update with the actual project link if available
        }
      ]
    },
    {
      image: require("./assets/images/smartLicensingLogo.png"), // Replace with actual path to project logo
      projectName: "Smart Licensing API Development",
      projectDesc:
        "Designed and developed backend APIs for the Smart Licensing application, enabling efficient license management and data handling.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/devmbilal/smart-licensing" // Link to your GitHub repository if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, certifications, award letters, and some cool stuff that I have accomplished!",

  achievementsCards: [
    
    {
      title: "Beta Microsoft Ambassador",
      subtitle:
        "Served as a Beta Microsoft Ambassador, engaging with the student community to promote Microsoft technologies and organizing events.",
      image: require("./assets/images/microsoftLogo.png"), // Replace with actual path to Microsoft logo
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Details",
          url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/ff8377d1-9037-49f3-a2d8-2465eab6957a" // Replace with actual link if available
        },
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zNyNidhaE_CEYMLgKtdMbfoZ19c4kcIX/view?usp=sharing" // Replace with actual link to the certificate
        }
      ]
    },
    {
      title: "Postman API Student Expert Certification",
      subtitle:
        "Earned the Postman API Student Expert certification, demonstrating expertise in API design, testing, and documentation using Postman.",
      image: require("./assets/images/postmanLogo.png"), // Replace with actual path to Postman logo
      imageAlt: "Postman Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/arkwlPSDQcG8nRIo8_Ggeg" // Replace with actual link to the certification
        }
      ]
    },
    {
      title: "Software Processes and Agile Practices - University of Alberta",
      subtitle:
        "Completed certification on Agile software development practices, emphasizing software processes and teamwork efficiency.",
      image: require("./assets/images/albertaLogo.png"), // Replace with actual path to University of Alberta logo
      imageAlt: "University of Alberta Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/175f0beec3b8ac5fcb6c126267c97487" // Link to your University of Alberta certification
        }
      ]
    },
    {
      title: "Version Control with Git and GitHub - Meta",
      subtitle: "Completed Meta certification in version control using Git and GitHub, mastering collaboration and repository management.",
      image: require("./assets/images/gitLogo.png"), // Replace with the actual path to Git logo
      imageAlt: "Git and GitHub Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/9ae203f71a817f0db9497f0d3ad091f0" // Actual link to your certification
        }
      ]
    },
    {
      title: "Server-side JavaScript using Node.js - NIIT",
      subtitle: "Completed certification for server-side JavaScript development using Node.js, focusing on backend development.",
      image: require("./assets/images/nodejsLogo.png"), // Replace with actual path to Node.js logo
      imageAlt: "Node.js Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/822d34b7a6b06850fbe55d19dbecafa7" // Actual link to your certification
        }
      ]
    },
    {
      title: "Third Place - TECH BUZZ Competition",
      subtitle:
        "Secured third place with my team in the TECH BUZZ competition held at FAST University, showcasing innovative tech solutions.",
      image: require("./assets/images/techBuzzLogo.png"), // Replace with actual path to Tech Buzz logo
      imageAlt: "TECH BUZZ Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/116kuFX2XeCKmYEF2LmkV8vp0Va1RenY4/view?usp=sharing" // Replace with actual link if available
        },
        {
          name: "Event Details",
          url: "https://www.linkedin.com/posts/gdscqau_techbuzz-successcelebration-teamwork-activity-7130587641485369345-eOoA?utm_source=share&utm_medium=member_desktop" // Replace with actual link if available
        }
      ]
    },
     {
      title: "Google Soft Skills Program",
      subtitle:
        "Completed the Google Soft Skills Program, an online course by Google offered through the Pakistan Freelancers Association (PAFLA).",
      image: require("./assets/images/googleSoftSkillsLogo.png"), // Replace with actual path to the Google Soft Skills logo
      imageAlt: "Google Soft Skills Program Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10l9yPt5LUg-BGAqnSc-fKfhsWppHyLFo/view?usp=sharing" // Replace with actual link to the certificate if available
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+92-322-7678736", // Your actual contact number
  email_address: "dev.mdbilal@gmail.com" // Your actual email address
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
