import untLogo from "../assets/unt.png";
import cognizantLogo from "../assets/cognizantLogo.png";
import archimazaLogo from "../assets/ArchimazeLogo.jpeg";
import vinxLogo from "../assets/vinxLogo.jpeg";

export const certifications = [
    {
      title: 'Azure Data Fundamentals',
      issuer: 'Microsoft Certified',
      date: 'May 2024',
      certificateURL: 'https://www.linkedin.com/in/vishnu-vardhan-reddy-sudireddy-363839130/overlay/1716423106902/single-media-viewer/?profileId=ACoAACAo0bsBDIAyxSI8Hb46DwoGbNSZ2Ny6pbU', 
    },
    {
      title: 'SQL Advanced',
      issuer: 'Hacker Rank',
      date: 'May 2024',
      certificateURL: 'https://www.hackerrank.com/certificates/0624bc9802aa',
    },
    {
      title: 'Javascript',
      issuer: 'Hacker Rank',
      date: 'May 2024',
      certificateURL: 'https://www.hackerrank.com/certificates/bd4f429e042b'
    },
  ];

export const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    graduationYear: 2020,
    gpa: "3.5/4.0",
  },
  {
    degree: "MS in Data Engineering",
    institution: "University of North Texas",
    location: "Denton, TX, USA",
    graduationYear: 2024,
    gpa: "3.91/4.0",
  },
];

export const experiences = [
  {
    company: "University of North Texas",
    location: "Denton, Texas, USA",
    role: "Full-Stack Developer",
    duration: "Aug 2023 - Mar 2024",
    image: untLogo,
    responsibilities: [
      `Developed and maintained Clark Bakery’s online ordering and management platform using React, Material UI,
resulting in a 30% increase in user engagement and a significant reduction in user-reported issues.`,
      `Designed and implemented database solutions with MySQL improving query performance by 25% and optimizing
indexing and schema design for faster data retrieval and storage efficiency. Integrated backend APIs with frontend
components, enhancing system performance by 20% and enhanced customer satisfaction.`,
      `Employed best practices improving code quality and TDD practices with Jest and React Testing Libraries. Collaborated
with marketing, sales, and customer support to ensure the platform met business needs, achieving project success rate.`,
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    role: "Full Stack Developer",
    duration: "Dec 2020 - Oct 2022",
    image: cognizantLogo,
    responsibilities: [
        `Developed and expanded architectural frameworks using Micro-Frontend Architecture with Module Federation,
enhancing performance, and cutting maintenance costs by 20%. Standardized reusable components and implemented
robust data grid functionalities, boosting productivity, and reducing operational overhead by 15%.`,

`Leveraged Azure Data Factory and Synapse for ETL processes, optimizing data workflows and reducing processing
times by 30%. Improved data integrity and analytics capabilities by integrating Azure Data Lake and Power BI.`,

`Adopted TDD with React Testing Library, engaged in Agile workflows, and managed source code with Git on
Bitbucket, resulting in 25% faster delivery cycles and improved team efficiency.`,

`Mentored 4 junior developers and oversaw QA teams, ensuring adherence to processes and improving project delivery
timelines by 20%. Collaborated with non-technical professionals, achieving a high client satisfaction rate.`

    ],
  },
  {
    company: "Vinx Technology Solutions",
    location: "Hyderabad, India",
    role: "IoT and ML Intern",
    duration: "May 2019 - Jun 2019",
    image: vinxLogo,
    responsibilities: [
    `Designed and developed a comprehensive home automation system by integrating IoT devices and sensors, enabling
real-time monitoring and control to enhance home efficiency and security. Collaborated with cross-functional teams
to ensure seamless integration of hardware and software components.`,
`Built an interactive and user-friendly webpage using React and Redux, focusing on responsive design and seamless
user experience for managing home automation tasks. Implemented advanced state management, optimized
performance, and enhanced UI/UX through intuitive controls and interactive elements. Conducted user testing and
gathered feedback to refine the interface.`
    ]
  },
  {
    company: "Archimaze",
    location: "Hyderabad, India", // Update with actual location
    role: "Unity 3D Intern",
    duration: "Sept 2019 - Jan 2019",
    image: archimazaLogo,
    responsibilities: [
    `Developed AR and VR applications using Unity 3D and successfully integrated AR applications into a React-based
UI, enhancing the interactive user experience. Conducted extensive testing and debugging to ensure application
stability and performance.`,
`Collaborated with the design team to implement intuitive and user-friendly interfaces. Utilized version control systems
(e.g., Git) to manage code and track progress.`
    ]
  },
];
