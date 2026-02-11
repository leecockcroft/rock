"use client"

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import {
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline"

const faqs = [
  {
    question: "FullStack Developers (C# .NET)",
    answer: `
      <p>Want to work for a leading cutting-edge technology and software development arm of one of the longest-established businesses within Gibraltar?</p>
      <p>My Clients are part of a larger group of businesses with over 200 years of experience trading within various industries.</p>
      <p>The team covers both software development and more conventional IT in the form of a managed services provider (MSP). On the software side, the team specialise in bespoke digital transportation solutions often to complex data-rich problems.</p>
      <p>They serve the wider group and a range of organizations in Gibraltar who value expert IT support to complement their teams.</p>
      <p>Due to expansion, my client is looking for Mid-level, Senior, and Lead Software Engineers.</p>
      <p>You will form part of a small and dynamic team focusing exclusively on the design, development, testing, and maintenance of bespoke software systems.</p>

      <p><strong>Responsibilities</strong></p>
      <ul class="list-disc m-4">
        <li>Researching, designing and writing new software programs</li>
        <li>Enhance existing programs by analysing and identifying areas for improvement</li>
        <li>Work closely with analysts, developers, customers, and end users</li>
        <li>Produce detailed technical and functional specifications</li>
        <li>Use test-driven development and regression tests to ensure feature quality</li>
        <li>Maintain systems through monitoring, optimisation, and bug fixing</li>
      </ul>

      <p><strong>Requirements</strong></p>
      <ul class="list-disc m-4">
        <li>5+ years developing business systems and web applications</li>
        <li>Understanding of business processes and commercial awareness</li>
        <li>Proficient in modern software architecture and design patterns</li>
        <li>Experience with MEAN stack or Microsoft .NET</li>
        <li>Strong SQL and Azure experience</li>
        <li>Experience with Git and Jira</li>
        <li>Knowledge of DevOps processes and security best practices</li>
      </ul>

      <p>Salaries up to £60,000pa plus flexible working hours and only 1 day a week required in the Gibraltar office.</p>
    `,
  },
  {
    question: "Software Developer (.NET) - Gibraltar",
    answer:
      `<p>Our client is an established and reputable company within the financial services industry in Gibraltar.</p>
<p>They have a new role for a Software Developer with proven experience as a .Net or Application Developer who is capable of introducing new programming, analysis, reporting services, and IT strategies.</p>
<p>Offering excellent salary, great benefits package, flexitime, career development, and long-term stability.</p>
<p><strong>Responsibilities;</strong></p>
<ul>
<li>Creating applications from the ground up as well as configure existing systems and provide user support.</li>
<li>Write functional code with a sharp eye for detail.</li>
<li>Collaborate with internal teams to design, develop, test, and maintain software.</li>
<li>Participate in requirements analysis.</li>
<li>Write clean, scalable code using .Net programming languages</li>
<li>Test and deploy applications and systems.</li>
<li>Revise, update, refactor and debug code.</li>
<li>To develop, maintain and improve current IT applications.</li>
<li>Develop documentation throughout the software development life cycle.</li>
<li>Become a Subject Matter Expert on applications and provide technical support.</li>
<li>Develop IT deliverables capable of integrating with current systems.</li>
<li>Continually assess user needs when designing new or improved software solutions.</li>
<li>Assist with the delivery of a suite of technology services, maintenance and support in accordance with agreed standards of responsiveness, customer service, and value for money.</li>
</ul>
<p><strong>Requirements;</strong></p>
<ul>
<li>Proven experience as a .Net or Application Developer</li>
<li>Familiarity with .Net framework, SQL Server, Windows Presentation Foundation (WPF) &amp; Windows Communication Foundation (WCF)</li>
<li>Knowledge on design and architectural patterns and styles (e.g. Model-View-Controller (MVC), Service Oriented Architecture (SOA), REST API)</li>
<li>Knowledge of at least one of the .Net languages (C#, VB) and XAML.</li>
<li>Understanding of Agile project methodologies</li>
<li>Excellent troubleshooting and communication skills.</li>
<li>Attention to detail.</li>
<li>Talent for interpreting complex material to reach a practical understanding.</li>
<li>Ability to diagnose problems, articulate findings, and liaise with multiple parties to reach a solution.</li>
<li>Ability to effectively manage time and resources to ensure that work is completed efficiently.</li>
<li>Ability to work independently but to a governance framework and reporting structure.</li>
<li>Good communication skills and the ability to interpret technical material for a non-technical audience.</li>
<li>Resourcefulness and willingness to promote new ideas.</li>
</ul>
<p><strong>Desirable</strong></p>
<ul>
<li>Web programming skills including ASP.NET, JavaScript, JQuery, HTML, CSS, and REACT.</li>
<li>Understanding of the Financial Services Sector and specific key concepts relating to the above directives.</li>
</ul>`,
  },
  {
    question: "Senior Frontend Developer",
    answer:
      `<p>Want to join a dynamic and forward-thinking leader in the marketplace but be based in Gibraltar with offices looking out to Spain and Africa?&nbsp;</p>
<p>Our client and ourselves as your agent look after from start to finish - Relocation Guidance and Assistance, Local Knowledge info - All rewarded with a UK comparative salary, lower tax, Full benefits package and most importantly the Mediterranean lifestyle.</p>
<p>My Client is an International award-winning company with offices and partners worldwide.&nbsp;</p>
<p>They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!</p>
<p><strong>The Role</strong></p>
<p>Supporting the development teams in Gibraltar / Malaga, we are looking for a Senior Frontend</p>
<p>Developer who is experienced and passionate about software development, who loves to push</p>
<p>product development using state-of-the-art technology, and who has very high-quality standards.</p>
<p>As a Frontend Developer, you will work in one of the multi-disciplinary Games teams implementing</p>
<p>and improving the new and existing functionality of the betting platform.</p>
<p>You will use your experience and knowledge to support and make architectural decisions together</p>
<p>with the software architects, play a part in the selection of new technologies, and promote</p>
<p>knowledge transfer both within your team and between teams.</p>
<p>You will also be responsible for reviewing the work of your colleagues as well as supporting junior</p>
<p>developers.</p>
<p><strong>Responsibilities:&nbsp;</strong></p>
<ul>
<li>You plan, develop and improve the betting platform with a very high degree of ownership (&ldquo;you built it, you run it&rdquo;) on a continuous delivery basis.</li>
<li>You design and implement interfaces to other high availability systems.</li>
<li>You evaluate the use of new technologies, architectures, and frameworks.</li>
<li>You collaborate closely with software architects, product owners, and stakeholders.</li>
<li>You support junior developers.</li>
<li>You are a part of a highly collaborative agile process.</li>
</ul>
<p><strong>Who you are&hellip;</strong></p>
<ul>
<li>You have the passion and eagerness to build the best betting platform together with your team.</li>
<li>Good understanding of whole software lifecycle and tools, and proficient using Git.</li>
<li>Highly familiar with agile development and continuous delivery of high-quality standards.</li>
<li>Awareness of Clean code practices, as well as others (SOLID, KISS, DRY, etc.)</li>
<li>Eagerness to work on topics like performance optimization, responsiveness, scaling, and high availability.</li>
<li>Great expertise with standard frontend technologies, HTML, CSS, SASS/LESS/Stylus</li>
<li>Proficient in JavaScript, ECMAScript and its particularities.</li>
<li>Experience of using advanced JavaScript libraries and frameworks such as Angular, React,</li>
<li>Vue, Typescript and building web components with any of these frameworks.</li>
<li>Good understanding of asynchronous request handling.</li>
<li>Proficient understanding of cross-browser compatibility issues and ways to work around them Familiarity with JavaScript module loaders such as Require.js and AMD Familiarity with front-end build tools, such as Babel, Grunt, Gulp etc.</li>
<li>Experience in testing strategy and tools for both backend and frontend components.</li>
<li>Enthusiastic about working in multidisciplinary teams.</li>
<li>Good English skills are a must.</li>
</ul>
<p><strong>Desirable</strong></p>
<ul>
<li>Experience with OOP, design patterns, Java EE 8 + (CDI, JSF, EJB, JAX-RS), databases (both</li>
<li>SQL and NoSQL) and data structures.</li>
<li>A completed degree in IT or a comparable course.</li>
<li>Good understanding of complex software architecture including both frontend and backend.</li>
<li>Familiar with cloud technologies such as Kubernetes, Docker, AWS Services etc.</li>
<li>Experience in developing self-contained/microservices is a plus</li>
</ul>
<p><strong>What's in it for you?&nbsp;</strong></p>
<p>A dynamic and highly motivated international team of skilled and experienced professionals with an open culture defined by a passion for developing software, fun, and mutual respect. State of the Art technology environment and Continuous Delivery process Unique working environment where you communicate and work directly with client Continuous learning based on a training and development program.</p>`,
  },
  {
    question: "PPC Manager",
    answer:
     `<p><strong>Permanent, Full time with regular remote working.</strong></p>
<p>Want to join a dynamic and forward-thinking leader in the marketplace but be based in Gibraltar with offices looking out to Spain &amp; Africa? Our client and ourselves as your agent look after from start to finish - Relocation Guidance &amp; Assistance, Local Knowledge info - All rewarded with a UK comparative salary, lower tax, Full benefits package, and most importantly the Mediterranean lifestyle.</p>
<p>My Client is an International award-winning company with offices and partners worldwide. They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!&nbsp;</p>
<p>Due to expansion, my client is looking for a PPC Manager.</p>
<p><strong>Position</strong></p>
<p>The Acquisition and Onboarding team, within the Marketing Department, is looking for an individual with significant PPC experience and demonstrable leadership skills to lead a small PPC team.</p>
<p><strong>People Management</strong></p>
<ul>
<li>A leader by example who coaches and mentors team members, and supports colleagues to uplift output</li>
<li>Oversees teamwork for quality and guideline compliance and encourages continuous development by providing praise and constructive, helpful feedback.</li>
<li>Provides a collaborative, supportive environment to enable colleagues to thrive and succeed, and identifies and supports with areas for training, growth, development, and skill-building</li>
<li>Co-creates a vision for individual goals and team objectives aligning with the company&rsquo;s vision and OKR strategy and motivates team members to succeed with a personal, team, and company-wide objectives</li>
<li>Assists management with hiring processes and new team member training.</li>
</ul>
<p><strong>PPC</strong></p>
<ul>
<li>Fully assess and understand business objectives to lead on strategy development, planning, and delivery of all PPC campaign activity on search platforms evaluating risk and opportunity to define and drive OKRs</li>
<li>Recommend and execute strategies for keyword opportunities, campaign structuring, targeting, display network, and other facets of paid search</li>
<li>Plan and manage 7-figure paid search budget</li>
<li>Maintain and monitor keyword bids, account daily and monthly budget caps, impression share, quality score, and other key performance metrics</li>
<li>Oversee, manage, and generate weekly and monthly client reporting for all major metrics, goals tracking, revenue tracking, and other paid search initiatives</li>
<li>Keep pace with search engine and PPC industry trends and developments, staying abreast of latest tools and technologies</li>
<li>Collaborate effectively with multiple stakeholders across different departments to ensure all onboarding campaigns drive maximum value</li>
<li>Communicate to Head of Acquisition and Onboarding on projects development, timelines, and results</li>
</ul>
<p><strong>Requirements</strong></p>
<ul>
<li>University degree or equivalent within Marketing or related field</li>
<li>3+ years&rsquo; experience in PPC</li>
<li>At least 2 years people management experience</li>
<li>Exceptional written and verbal communication skills</li>
<li>Empathetic, considerate towards others, and supportive to team members and colleagues</li>
<li>Actively listens to other viewpoints and takes personal responsibility when mistakes are made</li>
<li>High-level proficiency in MS Excel, PowerPoint, and Word</li>
<li>Knowledge of social media platforms is an advantage</li>
<li>Ability to meet strict deadlines</li>
<li>Ability to analyze data and make recommendations</li>
<li>Ability to work in a self-directed, fast-paced, results-oriented environment</li>
<li>Highly motivated person with the willingness to learn and perform</li>
</ul>`,
  },
  {
    question: "Backend Developer-Java",
    answer:
      `<p><strong>Permanent, Full time with regular remote working.</strong></p>
<p>Want to join a dynamic and forward-thinking leader in the marketplace but be based in Gibraltar with offices looking out to Spain &amp; Africa? Our client and ourselves as your agent look after from start to finish - Relocation Guidance &amp; Assistance, Local Knowledge info - All rewarded with a UK comparative salary, lower tax, Full benefits package, and most importantly the Mediterranean lifestyle.</p>
<p>My Client is an International award-winning company with offices and partners worldwide. They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!&nbsp;</p>
<p>Due to expansion, my client is looking for a&nbsp;<strong>Java Developer.</strong></p>
<p>Supporting my client's development teams in Gibraltar/Malaga, we are looking for a Java Developer who is very experienced and passionate about software development, who loves to push product development using state-of-the-art technology, and who has very high-quality standards.</p>
<p>As a Java Developer, you will work in multi-disciplinary Games teams implementing new and improving the existing functionality of the gambling platform. You will use your experience and knowledge to support and make architectural decisions together with the software architects, play a part in the selection of new technologies, and promote knowledge transfer both within your team and between teams. You will be also responsible for reviewing the work of your colleagues as well as supporting junior developers.</p>
<p><strong>Responsibilities</strong></p>
<ul>
<li>You plan, develop and improve the gambling platform with a very high degree of ownership (&ldquo;you built it, you run it&rdquo;) on a continuous delivery basis</li>
<li>You design and implement interfaces to other high availability systems</li>
<li>You evaluate the use of new technologies, architectures, and frameworks</li>
<li>You collaborate closely with software architects, product owners, and stakeholders</li>
<li>You support junior developers</li>
<li>You are a part of a highly collaborative agile process</li>
</ul>
<p><strong>Requirements</strong></p>
<p>Essential:</p>
<ul>
<li>Passion and Eagerness to build the best gambling platform together with your team</li>
<li>In-depth practical experience with OOP, design patterns, Java EE 8 (CDI, JSF, EJB, JAX-RS), databases (NoSQL) and data structures (4-5 years)</li>
<li>Excellent understanding of complex software architecture</li>
<li>Familiar with cloud technologies like Kubernetes, Docker</li>
<li>Experience in developing self-contained/ microservices is a plus</li>
<li>Profound experience with tools such as IntelliJ IDEA, Git, Maven</li>
<li>Highly familiar with agile development and continuous delivery</li>
<li>High-quality standards. Awareness of Clean code practices, as well as others (SOLID, KISS, DRY, etc.)</li>
<li>Eagerness to work on topics like performance optimization, responsiveness, scaling and high availability</li>
<li>Enthusiastic about working in multi-disciplinary teams</li>
<li>Good English skills are a must</li>
<li>A completed degree in IT or a comparable course is desirable</li>
<li>Preferable:</li>
<li>Experience working with agile methodologies</li>
<li>Understanding of how product companies work vs project-oriented companies</li>
<li>Around 5 years + experience desirable</li>
</ul>`,
  },
  {
    question: "Fullstack Developer",
    answer:
      `<p>Want to join a dynamic and forward-thinking leader in the marketplace but be based in Gibraltar with offices looking out to Spain &amp; Africa? Our client and ourselves as your agent look after from start to finish - Relocation Guidance &amp; Assistance, Local Knowledge info - All rewarded with a UK comparative salary, lower tax, Full benefits package, and most importantly the Mediterranean lifestyle.</p>
<p>My Client is an international award-winning company with offices and partners worldwide. They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!&nbsp;</p>
<p>Due to expansion, my client is looking for a very experienced and passionate Fullstack Developer, who loves to push product development using state-of-the-art technology, and who has very high-quality standards. As a Full-stack Developer, you will work in a multi-disciplinary team implementing new and improving the existing functionality of the gambling platform. You will use your experience and knowledge to support and make architectural decisions together with the software architects, play a part in the selection of new technologies, and promote knowledge transfer both within your team and between teams. You will be also responsible for reviewing the work of your colleagues as well as supporting junior developers.</p>
<p><strong>Requirements</strong></p>
<p>Essential:</p>
<p>&bull; Passion and eagerness to build the best betting platform together with your team</p>
<p>&bull; Good understanding of whole software lifecycle and tools, and proficient using Git</p>
<p>&bull; Highly familiar with agile development and continuous delivery</p>
<p>&bull; High-quality standards. Awareness of Clean code practices, as well as others (SOLID, KISS, DRY, etc.)</p>
<p>&bull; Eagerness to work on topics like performance optimization, responsiveness, scaling, and high availability.</p>
<p>&bull; Great expertise with standard frontend technologies, HTML, CSS, SASS/LESS/Stylus,</p>
<p>&bull; Proficient in JavaScript, ECMAScript and its particularities</p>
<p>&bull; Experience in using advanced JavaScript libraries and frameworks such as Angular, React, Vue, Typescript, and building web components with any of these frameworks</p>
<p>&bull; Good understanding of asynchronous request handling</p>
<p>&bull; Proficient understanding of cross-browser compatibility issues and ways to work around them</p>
<p>&bull; Familiarity with JavaScript module loaders such as Require.js and AMD</p>
<p>&bull; Familiarity with front-end build tools, such as Babel, Grunt, Gulp etc</p>
<p>&bull; Experience on testing strategy and tools for both backend and frontend components.</p>
<p>&bull; Enthusiastic about working in multi-disciplinary teams</p>
<p>&bull; Good English skills are a must</p>
<p>&bull; A completed degree in IT or a comparable course is desirable</p>
<p>&bull; Good understanding of complex software architecture including both frontend and backend</p>
<p>&bull; Familiar with cloud technologies such as Kubernetes, Docker, AWS Services, etc</p>
<p>&bull; Experience in developing self-contained/microservices is a plus</p>
<p>&bull; Good knowledge of working with Java</p>
<p><strong>Preferable</strong></p>
<p>&bull; Experience working with agile methodologies</p>
<p>&bull; Understanding of how product companies work vs project-oriented companies</p>
<p>&bull; around 5 years + experience desirable</p>`,
  },
    {
    question: "Senior QA Engineer",
    answer:
      `<p>Want to join a dynamic and forward-thinking leader in the marketplace but be</p>
<p>based in Gibraltar with offices looking out to Spain and Africa? Our client and ourselves as your agent</p>
<p>look after from start to finish - Relocation Guidance and Assistance, Local Knowledge info - All</p>
<p>rewarded with a UK comparative salary, lower tax, Full benefits package, and most importantly the</p>
<p>Mediterranean lifestyle.</p>
<p>My Client is an International award-winning company with offices and partners worldwide. They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!</p>
<p><strong>Due to expansion, my client is looking for a Senior QA Engineer.</strong></p>
<p>Position</p>
<p>Together, in a team of 60+ passionate techies and a network of handpicked partners, they take care</p>
<p>of the whole software development process of Europe&rsquo;s fastest-growing gambling platform. To</p>
<p>support their development teams in Malaga and Gibraltar, they are looking for a Quality Assurance</p>
<p>Engineer. Who are very experienced and passionate about software development, who love to push product development using state-of-the-art technology, and who have very high-quality standards.</p>
<p>As a Quality Assurance Engineer, you will work in a multi-disciplinary team to maintain and ensuring</p>
<p>our high standards of quality. No feature will leave for the live environment without your blessing.</p>
<p><strong>Responsibilities:</strong></p>
<ul>
<li>You will collaborate with the team designing, developing, and improving their gambling platform</li>
<li>You will test new features of their Web application and locate errors</li>
<li>You will become part of their software development team and will learn from their top developers</li>
<li>You will create automatic tests using Selenium Webdriver (Java), JUnit, JMeter, etc.</li>
<li>You are a part of a highly collaborative agile process</li>
</ul>
<p><strong>Requirements</strong></p>
<ul>
<li>Relevant experience in quality assurance, in test automation, as well as documentation</li>
<li>In-depth experience with Selenium Webdriver (Java), JMeter, or comparable test</li>
<li>environments</li>
<li>Good knowledge of programming in Java</li>
<li>Knowledge in the testing of mobile applications or willingness to learn it</li>
<li>Experience in the testing of API</li>
<li>The ability to create test cases &mdash; also in collaboration with cloud-test service providers</li>
<li>A highly structured and analytical approach as well as taking ownership of issues</li>
<li>Highly familiar with agile development and continuous delivery</li>
<li>Experience in working with tools like IntelliJ IDEA, Maven, and git</li>
<li>Good English skills</li>
<li>Enthusiastic about working in multi-disciplinary teams</li>
<li>Passion and Eagerness to build the best gambling platform together with your team</li>
<li>Experience working with agile methodologies</li>
<li>Understanding of how product companies work vs project-oriented companies</li>
</ul>`,
  },
 {
    question: "Python Developers – All levels – Gibraltar Based or Remote.",
    answer:
      `<p>My Client is a start-up professional services company with a strong focus on technology, efficiency, and security. Their product is a fully managed, centralised due diligence service, provided around a proprietary data platform. Its mission is to provide seamless onboarding processes and ease of ongoing AML/CFT compliance for businesses, whilst benefiting their end-users with ownership, transparency and efficient control over their personal data.&nbsp;</p>
<p>Their values are Secure. Passionate. Innovative. Resolute. Inclusive. Trustworthy. Their vision is to revolutionise the management of financial crime risks and digital identity by establishing a secure, centralised, regulated infrastructure.&nbsp;</p>
<p>Due to growth, my client is looking for VARIOUS Levels of Python Developers to drive the development of the product. </p>
<p>We are looking for people who are used to joining a start-up early and are excited about working in a tight-knit team including the founders, to bring their dreams to life.&nbsp;</p>
<p><strong>You will be:</strong></p>
<p>&bull; A detail-oriented problem-solver who is motivated and excited to contribute to solving the inefficiencies and issues in today&rsquo;s widely used due diligence processes.&nbsp;</p>
<p>&bull; To succeed in this role, you should be an experienced professional with absolute respect for data protection and regulatory compliance.&nbsp;</p>
<p>&bull; You must have plenty of experience building out and successfully managing your own development team (Team Leader).</p>
<p>&bull; You should not be afraid of getting your hands dirty building both the product and the tribe ethos around it.&nbsp;</p>
<p>&bull; You must be comfortable contributing to the design and planning processes and coming up with own ideas and suggestion to benefit the project.</p>
<p><strong>Managing the deliveries of the backend development team; (Team Lead role)</strong></p>
<p>&bull; Working hand in hand with tech leads from the frontend and data teams to ensure that all angles are covered; from end user experience all the way to the data store;&nbsp;</p>
<p>&bull; Oversight and contribution to the development of their Kubernetes based REST API services and data platform which sits at the central core of their product;</p>
<p>&nbsp;&bull; Potential integration of their product into client systems. They use ClickUp to ensure they hit their agile goals and project milestones, Figma and Storybook to help visualise their ideas and turn that into reusable code.</p>
<p>Their primary coding languages are Python, NodeJS, Angular and React. Currently their tech stack includes AWS, Terraform, Docker, Kubernetes, PostgreSQL and Linux.</p>
<p><strong>Duties &amp; Responsibilities Leading, Planning and Management&nbsp;</strong></p>
<p>&bull; Work closely with the Project Tech Lead to plan, finesse and hire the rest of the backend engineering team.&nbsp;</p>
<p>&bull; Define the software solutions in partnership with the Project Tech Lead.&nbsp;</p>
<p>&bull; Work with the Project Tech Lead, Project Manager and other developers to build out project roadmap.&nbsp;</p>
<p>&bull; Manage the backend tech team on a daily basis and interface with the Project Manager to ensure that the project plan is kept up to date and that any issues or blockers are adequately addressed. Development&nbsp;</p>
<p>&bull; Author, update, and debug API microservices.&nbsp;</p>
<p>&bull; Contribute to API design and architecture.&nbsp;</p>
<p>&bull; Write comprehensive unit and end-to-end tests.&nbsp;</p>
<p>&bull; Write documentation for API and other backend&nbsp;</p>
<p>processes that meet developer needs and rigorous security standards.&nbsp;</p>
<p>&bull; Diagnose and mitigate performance issues.&nbsp;</p>
<p>&bull; Write code to automate data updates and streamline data management.&nbsp;</p>
<p>&bull; Participate in reviewing peers code.&nbsp;</p>
<p><strong>Work experience&nbsp;</strong></p>
<p>&bull; This role requires a minimum of 5 to 10 years of relevant, full-time work experience (Team Lead)</p>
<p>&bull; You should have proven team building/leading experience, driving small teams to tight deadlines.</p>
<p>&bull; Experience in a start-up and previous solutions architect experience would be preferred.&nbsp;</p>
<p>&bull; You must have experience working in a highly secured environment such as in the areas of FinTech, RegTech, high value e-commerce, etc. and large enterprise systems at scale.&nbsp;</p>
<p><strong>Knowledge, Skills and Abilities</strong></p>
<p>&nbsp;&bull; You should have previously worked with and have a good understanding of Python FastAPI.&nbsp;</p>
<p>&bull; Familiarity with AWS, Terraform, Docker, Kubernetes, PostgreSQL and Linux is beneficial.&nbsp;</p>
<p>&bull; You must be able to quickly learn new technologies, architectures, and best practices.&nbsp;</p>
<p>&bull; Whilst pre-existing knowledge of due diligence and compliance processes would be ideal, you should be able to quickly understand the service they are building.&nbsp;</p>
<p>&bull; Strong leaderships and communication skills are a must.&nbsp;</p>
<p>&bull; High proficiency in the English language (both spoken and written) are required.</p>
<p>&nbsp;&bull; You must be comfortable working without daily oversight whilst working cohesively together with the rest of our team.</p>`,
  },

   {
    question: "Frontend Development Team Lead",
    answer:
      `<p>My Client is a start-up professional services company with a strong focus on technology, efficiency, and security. Their product is a fully managed, centralised due diligence service, provided around a proprietary data platform. Their mission is to provide seamless onboarding processes and ease of ongoing AML/CFT compliance for businesses, whilst benefiting</p>
<p>their end-users with ownership, transparency, and efficient control over their personal data.</p>
<p>Their values are Secure. Passionate. Innovative. Resolute. Inclusive. Trustworthy. Their vision is to</p>
<p>revolutionise the management of financial crime risks and digital identity by establishing a secure,</p>
<p>centralised, regulated infrastructure.</p>
<p>Due to growth my client is looking for an engaging Senior leader to drive the development of the</p>
<p>product. You will be:</p>
<ul>
<li>A detail oriented problem-solver who is motivated and excited to contribute to solving the</li>
<li>inefficiencies and issues in today&rsquo;s widely used due diligence processes.</li>
<li>To succeed in this role, you should be an experienced professional with an absolute respect</li>
<li>for data protection and regulatory compliance.</li>
<li>You must have plenty of experience building out and successfully managing your own</li>
<li>development team.</li>
<li>You should not be afraid of getting your hands dirty building both the product and the tribe</li>
<li>ethos round it.</li>
<li>You must be comfortable picking up an existing design and structure and adding to it by</li>
<li>coming up with own ideas and suggestion to benefit the project.</li>
<li>They are looking for people who are used to joining a start-up early and are excited about</li>
<li>working in a tight knit team including the founders, to bring their dreams to life.</li>
</ul>
<p>The Frontend Tech Lead will work with a small team of like mind, highly skilled engineers to take</p>
<p>their MVP to the next level and develop their secure case management system. They will have the primary day-to-day responsibility for delivering the frontend tech part of the project whilst engaging with the tech leads from the backend and data teams to ensure everyone is working towards the same goals.</p>
<p>The role will require:</p>
<ul>
<li>Managing the deliveries of the frontend development team;</li>
<li>Oversight and contribution to the development of all the front end components including the client and end user portals that were framed out as part of the MVP and the case management / CRM which currently only exists as a functional spec;</li>
<li>Aligning the goals and ideas from the page designs in a fully functional product suite.</li>
</ul>
<p>Meeting with stakeholders to ensure that the product is fit to purpose. They use ClickUp to ensure they hit their agile goals and project milestones, Figma, and Storybook to help them visualise their ideas and turn that into reusable code. Their primary coding languages are Python, NodeJS, Angular, and React. Currently, their tech stack includes AWS, Terraform, Docker, Kubernetes, PostgreSQL, and Linux.</p>
<p>Duties and Responsibilities Leading, Planning and Management</p>
<ul>
<li>Work closely with the Project Tech Lead to plan, finesse and hire the rest of the frontend engineering team.</li>
<li>Work with the Project Tech Lead, Project Manager and other developers to build out a project roadmap.</li>
<li>Manage the frontend tech team on a daily basis and interface with the Project Manager to ensure that the project plan is kept up to date and that any issues or blockers are adequately addressed.</li>
</ul>
<p>Development</p>
<ul>
<li>Review existing MVP frontend work in Angular to ensure its fit for purpose</li>
<li>Develop a framework for new case management system</li>
<li>Participate in reviewing peers&rsquo; code</li>
<li>Work experience</li>
<li>This role requires a minimum of 5 to 7 years of relevant, full-time work experience.</li>
<li>You should have proven team building/leading experience, driving small teams to tight deadlines.</li>
<li>Experience in a start-up and previous solutions architect experience would be preferred.</li>
<li>You must have experience working in a highly secured environment such as in the areas of FinTech, RegTech, high-value e-commerce, etc., and large enterprise systems at scale.</li>
</ul>
<p>Knowledge, Skills, and Abilities</p>
<ul>
<li>You should have previously worked with and have a good understanding of Javascript and ReactJS. Familiarity with AngularJS is also beneficial.</li>
<li>You must be able to quickly learn new technologies, architectures, and best practices.</li>
<li>Whilst pre-existing knowledge of due diligence and compliance processes would be ideal, you should be able to quickly understand the service they are building.</li>
<li>Strong leadership and communication skills are a must.</li>
<li>High proficiency in the English language (both spoken and written) is required.</li>
<li>You must be comfortable working without daily oversight whilst working cohesively together with the rest of the team.</li>
</ul>`,
  },


   {
    question: "EDD/AML Executives",
    answer:
      `<p>Want to join a dynamic and forward-thinking leader in the marketplace but be based in Gibraltar with offices looking out to Spain &amp; Africa? Our client and ourselves as your agent look after from start to finish - Relocation Guidance &amp; Assistance, Local Knowledge info - All rewarded with a UK comparative salary, lower tax, Full benefits package and most importantly the Mediterranean lifestyle</p>
<p><strong>My Client is an international award-winning company with offices and partners worldwide. They have built their own in-house technology, work with the latest stack/trends, and are continuing to take the online gaming world by storm. With new jurisdictions, gaming/betting platforms, and apps they are the company to work for!</strong></p>
<p><strong>Due to expansion, my client is looking for EDD/AML Executives.</strong></p>
<p>You will work closely with the AML Manager/ MLRO and compliance team. The AML/EDD Executive will be primarily responsible for the investigation of alerts generated by the Company&rsquo;s Transaction Monitoring system and provide support to the additional activities related to Suspicious Activity Reporting, PEPs, and Sanctions.</p>
<p>They are looking for a self-motivated individual who is enthusiastic and has a keen interest in EDD and related areas.</p>
<p>The successful EDD Executive will demonstrate good organisational skills and will be able to deal with issues independently and as part of a team even when working under pressure with challenging deadlines.</p>
<p>The primary role of the EDD Executive is reviewing customer accounts and activities for money laundering and suspicious activity conducting appropriate member risk profiling in addition to ongoing research and assessment to ensure group-wide compliance to AML legislation and industry regulatory requirements.</p>
<p>Requirements</p>
<p>Must have:</p>
<ul>
<li>Fluent English.</li>
<li>Fluent German would be an advantage.</li>
<li>A-Level education or equivalent.</li>
<li>Experience working in the Financial/Gaming sector required.</li>
<li>Understanding and familiar with AML legislation and industry licensing requirements (including but not limited to Money Laundering Act 2007, Proceeds of Crime 2002, UK Gambling Act 2005 and AML guidance notes) and all relevant technical, operating standards and expectations as defined by the group.</li>
<li>Strong investigation, risk analysis, assessment and decision making skills.</li>
<li>Ability to identify risk and escalate matters containing potentially suspicious activities or policy violations, or matters that may pose a higher risk to the group.</li>
</ul>
<p><strong>Nice to have:</strong></p>
<p>Key understanding and risk assessment of group products and services including bingo, casino, sports and lottery products.</p>`,
  },

 

   {
    question: "Web Development Manager - Sotogrande, Gibraltar or Fully Remote",
    answer:
      `<p>Want to work for an International eGaming company with offices worldwide and full remote flexibility? My client is offering a Hybrid role where you can base yourself out of the most prestigious locations in the South of Spain &ndash; Sotogrande or one of their established offices in Gibraltar or fully remote &ndash; the choice is yours.</p>
<p>Joining a brand new team working on an exciting new project which is due to go live in March 2022 now is an exciting time to join the business and be part of their journey.</p>
<p>With a complete open salary bracket, my client will be happy to pay for the right candidate.</p>
<p>Due to expansion, my client is looking for a Web Developer Manager &ndash; 1.Net and 1 PHP</p>
<p><strong>Role Responsibilities</strong></p>
<ul>
<li><strong>Line management of a medium to large development team composed of multiple streams including Software Engineers, QA, and TeamLeads, across multiple locations and time zones&nbsp;</strong></li>
<li><strong>Key stakeholder liaison and alignment with senior people in Project, Engineering, and Product management organisation, from product development to operations and architecture&nbsp;</strong></li>
<li><strong>Lead shaping software engineering practices and processes working in various flavours of Agile&nbsp;</strong></li>
<li><strong>Measuring and driving delivery and quality improvements through the capture and analysis of metrics.&nbsp;</strong></li>
<li><strong>Definition, implementation, and evolution of development team technical process and ways of working&nbsp;</strong></li>
<li><strong>Provision of technical input into the Project Management, Engineering Management, and Product Management</strong></li>
<li><strong>Work with Engineering management to drive through best practices, techniques, and technology both on the team and around the company&nbsp;</strong></li>
<li><strong>Foster a culture of open exchange of ideas, innovation, and continuous improvements&nbsp;</strong></li>
<li><strong>Balance the commercial needs of the business against the ideal technical design, proposing sound phased or tactical implementations where appropriate&nbsp;</strong></li>
<li><strong>Understand the importance of and be a strong advocate for non-functionals eg. monitoring, alerting, logging etc&nbsp;</strong></li>
<li><strong>Define adequate strategies to deal with technical debt&nbsp;</strong></li>
<li><strong>Collaborate with Support to enhance the company&rsquo;s Incident and Problem management capabilities&nbsp;</strong></li>
<li><strong>Planning, implementation, and evolution of technical processes and feedback to the wider company&nbsp;</strong></li>
<li><strong>Accountable for the quality of the implementation and deployment of development work&nbsp;</strong></li>
<li><strong>Accountable for the security, capacity, and performance of the system&nbsp;</strong></li>
<li><strong>Work in conjunction with Support and evolving Support engagement and operating model for your area of the business&nbsp;</strong></li>
<li><strong>Act as an escalation point in Incident management processes&nbsp;</strong></li>
<li><strong>Take ownership of RCA activities in your respective areas of management&nbsp;</strong></li>
<li><strong>Follow up on and own the completion of technical or process improvements identified as part of the RCA&nbsp;</strong></li>
<li><strong>Motivating and driving the team with technical leadership and vision.</strong></li>
</ul>`,
  },



  {
    question: "Senior Linux DBA - Sotogrande, Gibraltar or Fully Remote",
    answer:
      `<p>Want to work for an International eGaming company with offices worldwide and full remote flexibility?&nbsp;</p>
<p>My client is offering a Hybrid role where you can base yourself out of the most prestigious locations in the South of Spain &ndash; Sotogrande or one of their established offices in Gibraltar or fully remote &ndash; the choice is yours.</p>
<p>Joining a brand-new team working on an exciting new project which is due to go live in March 2022 now is an exciting time to join the business and be part of their journey.</p>
<p>With a complete open salary bracket, my client will be happy to pay for the right candidate.</p>
<p>Due to expansion, my client is looking for a Senior Linux DBA.</p>
<p><strong>GENERAL DUTIES &amp; RESPONSIBILITIES</strong></p>
<ul>
<li>Responsible for Redis, MySQL, PostgreSQL, and other NoSQL Server instances</li>
<li>Implements optimizes and maintains Redis, MySQL, and PostgreSQL high availability</li>
<li>Performance tuning through the different tools available in Redis, MySQL, and PosgreSQL</li>
<li>Administers security and disaster recovery Design and Planning of databases, including back up, restore, recovery, auditing, and health checks</li>
<li>Designs, implements and maintains complex Database Systems and Applications involved with these Databases (Store Procedures, Reports, Query optimizations, etc)</li>
<li>Performs Redis, MySQL, and PostgreSQL installations, configurations, patch updates, monitoring, and version upgrades when recommended and required</li>
<li>Works incident tickets including problem analysis, root cause, and solution implementation</li>
<li>Performs standard database operations, SQL programming, and optimization</li>
<li>Researches and test new Database Technologies planning PoCs accordingly</li>
<li>Effective communication with different IT Operations and Development Teams</li>
<li>Works towards automation and gaining efficiencies</li>
<li>Handles the deployment of Database Scripts through different environments and provide feedback to ensure Production Deployments are as safe as possible</li>
<li>Provides quick recovery solutions to ensure business continuity</li>
<li>Database Systems Analysis identifying inefficient Database Processes and recommendations</li>
<li>Efficient Capacity planning and addresses hardware needs efficiently</li>
<li>Documents Database Environments</li>
<li>Demonstrate strong operational Database Administration and troubleshooting skills</li>
<li>Maintains Database Standards and ensure Best Practices at all times</li>
<li>Measures Risks (Risk Assessment exercises) and provide recommendations accordingly</li>
</ul>`
  }





  
]

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
         

          <dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                    <span className="text-base font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>

                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <article
                    className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
