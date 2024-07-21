import untLogo from '../assets/unt.png';
import cognizantLogo from '../assets/cognizantLogo.png';
import archimazaLogo from '../assets/ArchimazeLogo.jpeg';
import vinxLogo from '../assets/vinxLogo.jpeg';

export const certifications = [
    {
      title: 'Certification Title 1',
      issuer: 'Issuer Name',
      date: 'Date',
      description: 'Brief description of the certification.',
    },
    // Add more certifications as needed
  ];
  
  export const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      graduationYear: 2020,
      gpa: '3.5/4.0',
    },
    {
      degree: 'MS in Data Engineering',
      institution: 'University of North Texas',
      location: 'Denton, TX, USA',
      graduationYear: 2024,
      gpa: '3.91/4.0',
    },
  ];
  
  
  export const experiences = [
    {
      company: 'University of North Texas',
      location: 'Denton, Texas, USA',
      role: 'Full-Stack Developer',
      duration: 'Aug 2023 - Mar 2024',
      image: untLogo,
      responsibilities: `
        - Developed a full-stack web application using React for the frontend and Spring Boot for the backend.
        - Integrated Cypress for UI testing and utilized AG Grids for data display and editing.
        - Managed data with Oracle Database and AWS for document storage.
        - Used Pentaho BI for loading CSV data to Oracle Database.
        - Contributed to the use of Bit Bucket, Jira, and Jenkins for version control and continuous integration.
      `,
    },
    {
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      role: 'Full Stack Developer',
      duration: 'Dec 2020 - Oct 2022',
      image: cognizantLogo,
      responsibilities: `
        - Developed the admin and loans modules for a one-stop application to track loan statuses.
        - Implemented React for the frontend with Context for state management and a micro-frontend architecture.
        - Designed and developed 21 roles with custom logic and customized AG Grids for data display.
        - Built custom hooks for performance optimization and adhered to Jest and TypeScript for testing and type safety.
      `,
    },
    {
      company: 'Vinx Technology Solutions',
      location: 'Hyderabad, India',
      role: 'IoT and ML Intern',
      duration: 'May 2019 - Jun 2019',
      image: vinxLogo,
      responsibilities: `
        - Developed projects in Embedded Systems, Internet of Things, and Machine Learning.
        - Created a React-based UI for handling home automation and integrated IoT and ML functionalities.
      `,
    },
    {
      company: 'Archimaze',
      location: 'Hyderabad, India', // Update with actual location
      role: 'Unity 3D Intern',
      duration: 'Sept 2019 - Jan 2019',
      image: archimazaLogo,
      responsibilities: `
        - Built AR and VR applications using Unity 3D.
        - Integrated AR apps into a React-based UI application.
      `,
    },
    
  ];
  