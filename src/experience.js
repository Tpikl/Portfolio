export const experiences = [
  {
    startDate: 2017,
    endDate: 2020,
    company: 'U-Haul: WebSelfStorage',
    title: 'Senior Software Developer',
    skills: ['C#', '.Net', 'MVC', 'HTML', 'CSS', 'SCSS', 'JS', 'Knockout', 'CI/CD', 'Unit Testing', 'Agile/Scrum'],
    responsibilities: [
      {
        desc: 'Lead a CMS implementation initiative, offering affiliate customers to expose their own facility website.',
        sub: ['.Net Core & Vue/React.', 'Cofoundry Framework.', 'Azure Build & Release Pipelines.']
      },
      {
        desc: 'Contributed to U-Haul’s largest SaaS product, WebSelfStorage.',
        sub: ['Agile/Scrum methodology.', 'Close interaction with product owners & stakeholders.', 'Advanced through several internal teams.']
      },
      {
        desc: 'Completed and enhanced Quickbooks & Sage50 interface integration.'
      },
      {
        desc: 'Developed and deployed a suite(~12) of REST API’s in tandem with an external kiosk team, used for integration in the physical facility kiosks.'
      },
      {
        desc: 'Enhanced and maintained existing internal SOAP services(~15) utilized by other U-Haul teams.'
      }
    ]
  },

  {
    startDate: 2014,
    endDate: 2017,
    company: 'U-Haul: Contact Center',
    title: 'Senior Software Developer',
    skills: ['C#', 'ASP.NET', 'Web Forms', 'MVC', 'HTML', 'CSS', 'JS'],
    responsibilities: [
      {
        desc: 'Lead and completed rewrite initiative for internal Permission Management product.',
        sub: ['Utilized by all internal products to manage user access.', 'Rewritten in ASP.NET MVC using C# and Knockout.']
      },
      {
        desc: 'Lead development and implementation of a custom Cisco Calabrio product designed to assist & monitor customer calls.',
      },
      {
        desc: 'Developed internal support messaging system, U-Chat, using SignalR.',
      },
      {
        desc: 'Responsible for developing, maintaining, & enhancing a significant number of ASP.NET products(30+).',
        sub: ['Co-lead scheduling and release process for all team products.', 'VB, Web Forms.', 'C#, MVC.']
      },
      {
        desc: 'Actively maintained Roadside Assistance, one of U-Haul’s largest service products.',
        sub: ['Contributed to rewrite initiative from Web Forms in VB to C# MVC.']
      }
    ]
  },

  {
    startDate: 2012,
    endDate: 2014,
    company: 'SAIFE',
    title: 'Software Engineer/Tech Writer',
    skills: ['Java', 'C#', 'WPF', 'Documentation', 'Technical Writing'],
    responsibilities: [
      {
        desc: 'Independently developed dynamic storage encryption solution.',
        sub: ['Windows desktop solution.', 'User interface developed using WPF in C#', 'Storage management developed using Java.']
      },
      {
        desc: 'Contributed to completing an encrypted VPN solution for Windows using Java.',
      },
      {
        desc: 'Collaborated with a small team to develop an Android application designed for encrypted communication over text and voice.',
      },
      {
        desc: 'Wrote extensive product documentation, detailing technical details and functionality.',
      },
      {
        desc: 'Wrote many outlines and proposals for technical books.',
      },
    ]
  }
];

export const skills = [
  {
    name: 'Front End',
    fa: 'fas fa-code',
    skills: ['HTML', '(S)CSS', 'JavaScript', 'React', 'Vue.js', 'Knockout']
  },
  {
    name: 'Back End',
    fa: 'fas fa-server',
    skills: ['C#', '.NET', 'Core', 'LINQ', 'xUnit', 'NUnit']
  },
  {
    name: 'Database',
    fa: 'fas fa-database',
    skills: ['Sql Server', 'Entity Framework']
  },
  {
    name: 'Process',
    fa: 'fas fa-project-diagram',
    skills: ['Unit Testing', 'Agile/Scrum', 'TTD', 'RWD', 'CI/CD']
  },
  {
    name: 'Tools',
    fa: 'fas fa-terminal',
    skills: ['Azure DevOps', 'Git', 'TFVC', 'NPM', 'Lint']
  }
];
