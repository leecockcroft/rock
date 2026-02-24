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
    question: "FullStack Developer - Fully Remote",
    answer: `
     <p>My client was founded to combine the most advanced technologies into products that solve specific casino problems.</p>
<p>They deliver innovative software systems on time, on-budget, every time. Their ProHost player &amp; staff management system drives revenue in some of the largest casinos on the planet. Using Artificial Intelligence in mobile applications, they deliver real-time insight, marketing &amp; gaming operations insight into the hands of staff throughout the casino.</p>
<p>Their clients use them to deliver software development projects that they don&rsquo;t have the time or resources to deliver...and they always deliver!</p>
<p>Due to expansion, my client is looking for a FullStack Developer. You will be comfortable with all aspects of web development with NodeJS as the backend and Angular/Ionic as Frontend.</p>
<p>You will have good knowledge and experience applying good practices in the design and implementation of applications, following SOLID principles and with proper use of design patterns. In addition, are proficient in the Linux console and is aware of the impact that design decisions have on the system&rsquo;s performance.</p>
<p>Qualifications CFGS DAW/DAM, graduate in computer science, software engineering or equivalent work experience.</p>
<ul>
<li>At least 3 years of experience developing web and/or mobile applications.</li>
<li>Excellent level of Typescript / JavaScript.</li>
<li>Excellent knowledge of Angular.</li>
<li>Good knowledge of Node.js.</li>
<li>Strong knowledge of object-oriented programming, design patterns and application of SOLID principles.</li>
<li>Experience consuming both relational databases (such as MySQL or MariaDB, MS SQL, ...)and non-SQL (such as MongoDB, ...).</li>
</ul>
<p>Added Value</p>
<ul>
<li>Good level of English (Reading and Writing)</li>
<li>Knowledge of TDD, reactive components, state management models, asynchronous</li>
<li>applications, hexagonal architecture, distributed applications, RabbitMQ or other message</li>
<li>broker, OpenAPI / Swagger, web services, OWASP best practices, continuous integration.</li>
</ul>
<p>In this role (depending on skills)</p>
<ul>
<li>Development of web applications or of their components and services using JS / Typescript</li>
<li>and frameworks such as Angular and runtime NodeJS. * Function implementation in new web</li>
<li>apps or existing mobile applications. * Participation in the design of microservices based</li>
<li>architectures and implementation using best practices and SOLID principles.</li>
</ul>
    `,
  },
  {
    question: "Java Developers - Algeciras or Malaga",
    answer:
      `<p><strong>Java Developers x 5.</strong></p>
<p>My Client is a Global Banking/Payments platform backed by one of the top banks in Spain and Global payments companies in the world.</p>
<p>Their mission is to allow companies to easily control their payments, each client&rsquo;s integration and needs are different, they will model payment strategies, increase conversion and reduce fraud rate. Offering various online payments for Enterprise, Payment Consulting, and Online payments for small and medium businesses.</p>
<p>Working with a cutting-edge technology stack in a collaborative, productive, development environment. As a Software Engineer, you will be involved in a strategic initiative to develop the applications, implementing new features, and enhancing their performance.</p>
<p><strong>Role Responsibilities</strong></p>
<ul>
<li>Perform Java development within a microservices architecture: back-end code (business model code, data access, flows), unit test code, test scripts, and HTML/JavaScript front-end code&nbsp;</li>
<li>Work as part of a development team in a fast-moving environment with new iterations every two weeks, communicating with Customers, Project Managers, Business Analysts, Testers, and other team members.&nbsp;</li>
<li>Participate in regular team reviews assessing each other&rsquo;s performance and helping to implement continuous improvement activities.&nbsp;</li>
<li>Ensure code quality with comprehensive unit and functional test coverage.&nbsp;</li>
<li>Apply design, coding, and documentation standards.&nbsp;</li>
<li>Diagnose and troubleshoot performance issues&nbsp;</li>
<li>Learn new technologies and keep abreast of existing ones&nbsp;</li>
</ul>
<p><strong>Qualifications and experience&nbsp;</strong></p>
<ul>
<li>Knowledge of professional software engineering practices &amp; best practices for the full software development life cycle, including coding standards, code reviews, source control management (Git, Gitflow), build processes (Maven), testing, and operations.&nbsp;</li>
<li>Excellent teamwork, flexibility, and smart problem-solving skills.&nbsp;</li>
<li>Experience with Java 8+, RESTful services.&nbsp;</li>
<li>Work with messaging-based frameworks (RabbitMQ) using JMS.&nbsp;</li>
<li>Experienced in Spring Boot 2 framework.&nbsp;</li>
<li>Experience in the usage of NoSQL (Mongo, ES) and MySQL.&nbsp;</li>
<li>Experience in software design patterns, best practices, and clean code.</li>
<li>Event-Driven Programming and Domain Driven Design is a plus.</li>
<li>Functional programming is a plus</li>
</ul>
<p>Now is a fantastic time to join the company as they grow and become part of a bigger journey and legacy. Please send your CV for a confidential chat and more information.</p>`,
  },
  {
    question: "Database Engineer - Malaga",
    answer:
      `<p><strong>The Company</strong></p>
<p>Our Client is an International award-winning Analytical Company with a global client base and partners. They have a long-standing reputation for quality and innovation in this market.</p>
<p>With London headquarters and their development hub in Malaga where they have a talented team of</p>
<p>software engineers and testers driven to make an impact within a fun, collaborative working</p>
<p>environment.</p>
<p>They are now looking for a Database Engineer to join their growing team. This is a brand new exciting role for the Malaga office.</p>
<p>Offering competitive salaries, full-time contracts, private medical, life insurance, free meals/lunch</p>
<p>vouchers, and a flexible and friendly environment. Modern offices in a great central location &ndash;&nbsp;with gym, lounge, kitchen, table football, beer fridge etc&hellip;</p>
<p>My client creates sophisticated risk models to assist insurers with risk selection and accurate pricing. Their range of models is broad spanning residential and commercial property perils, motor insurance, travel, pet, and health insurance. To feed their risk models they source many diverse datasets covering high-resolution weather data, property attributes, business activities and financial data, insurance claims and policies, medical information, aerial imagery and geodemographic data.</p>
<p><strong>Role Purpose</strong></p>
<p>Data is key to their business and this is an important and key new role to the Malaga office. This is a hybrid role with responsibility for the storage and organisation of their data as well as the processing, validation and output of high-quality data.</p>
<p>They are looking for a motivated, independent and well organised individual who enjoys working with</p>
<p>data. The Database Engineer (DBE) will be responsible for the design, maintenance and administration of a cloud-based database. They will use a data platform to source, structure and validate data.</p>
<p>Their competitive advantage is the quality of data, measured by accuracy, completeness, and</p>
<p>consistency. Validation of their data is critical, and you will be responsible for regular data quality</p>
<p>reporting and acting to improve data quality. This will include responding to customer queries on data issues and preparing data for internal and external customers.</p>
<p>The role will rely on high levels of automation and strong attention to detail to making sure that</p>
<p>processes flow smoothly and are effective. You will work with members of the Analytics, IT, and Sales</p>
<p>teams to ensure that data is up to date and remains best in class.</p>
<p><strong>Role Responsibilities</strong></p>
<ul>
<li>Maintain and extend a PostgreSQL DB which the whole Analytics team can use and is a</li>
<li>repository for all datasets in relation to home, motor, travel, commercial lines etc.</li>
<li>Assist data scientists with DB queries to aid the efficiency of analysts in UK, Ireland and Krakow</li>
<li>Assess which tools would be appropriate and establish an ETL process for new datasets</li>
<li>including full validation and data quality assessment.</li>
<li>Manage data for strategic projects.</li>
<li>Work with subject matter experts to identify how data errors should be corrected and create</li>
<li>sophisticated validation checks.</li>
<li>Create structured datasets from unstructured data</li>
<li>Take responsibility for the biannual updates of perils models including preparation of client</li>
<li>deliverables (This is not remodelling but rerunning existing models on new addresses/property</li>
<li>data)</li>
<li>Automation of data processes</li>
<li>Assist with customer queries on data e.g. addresses which fail to find a match</li>
<li>Extraction of data for prospective customers to test models</li>
<li>Ad hoc data processing projects</li>
<li>Assist with identification and sourcing of new datasets</li>
<li>Ensure that the correct levels of encryption are used whenever data is stored at rest and in</li>
<li>transit, and investigate the use of tokenization for data that may be regarded as personal or</li>
<li>sensitive.</li>
</ul>
<p><strong>Skills and Experience</strong></p>
<ul>
<li>3-5 years&rsquo; experience in a data management role</li>
<li>Relational Database Management Systems (RDBMS) and SQL , 3+ years</li>
<li>General, overall knowledge of AWS Cloud services, ideal if also AWS certified</li>
<li>Data engineering/wrangling and ETL pipeline building, 2+ years</li>
<li>Python programming and interfacing with RDBMS (e.g psycopg2) and AWS services (e.g&nbsp;</li>
<li>boto3), 2+ years</li>
<li>Jupyter Notebooks, 1+ years</li>
<li>Strong understanding of how to use automation to achieve processing scalability and speed</li>
<li>Experience working with data, including processes for data validation and quality control</li>
<li>An understanding of data management fundamentals, including concepts such as data</li>
<li>dictionaries, data models, validation, and reporting.</li>
<li>Experience in data aggregation and reporting</li>
<li>Experience in troubleshooting data quality issues</li>
<li>University degree in information technology or similar</li>
<li>Specific knowledge and commercial experience of as many of the following AWS services as</li>
<li>possible (in order of importance):</li>
</ul>
<p>- Lambda</p>
<p>- Glue and Glue Workflows</p>
<p>- Aurora/RDS Postgres</p>
<p>- S3</p>
<p>- Secrets Manager</p>
<p>- SNS</p>
<p>- IAM, roles and polices</p>
<p>- Athena</p>
<p>- EC2</p>
<ul>
<li>Desirable: Experience with BI tools such as Tableau</li>
<li>Desirable: A working knowledge of SAS</li>
<li>Desirable: A working knowledge of Python</li>
<li>Desirable: Experience of mapping software such as ArcGIS</li>
<li>Desirable: Experience within the insurance industry</li>
</ul>`,
  },
  {
    question: "Software Engineer - Malaga",
    answer:
     `<p>Software Engineer &ndash; My client builds innovative ways for their digital service deliveries alongside with cutting-edge technologies and agile methodologies. They are a company focused in the Development and Deployment of Software as a Service (SaaS) solutions and flexible, intuitive and efficient mobile applications. They collaborate with their customers exploring innovative paths to success the change, working alongside with our customers.</p>
<p>They have a global presence, with Spanish operations within a larger group. Located in the city centre of the multicultural and cosmopolitan Malaga.</p>
<p>Working in a friendly, fun and innovative team of like-minded developers and IT professionals where you can make an impact and put your name to your code and projects.</p>
<p>You will be part of an Agile/Scrum team and will develop the back-end and front end of rich applications. You will perform complete testing of Web applications from a unit and system perspective.</p>
<p><strong>Essential/Required Skills:</strong></p>
<ul>
<li>Experience with Microsoft .Net Framework (Or other OOP Language)</li>
<li>Entity Framework using Code First based design</li>
<li>Agile methodology</li>
<li>Knowledge of programming languages</li>
<li>SQL Server.</li>
<li>Distributed service orientated architectures using web services designs such as JSON, RESTful, etc</li>
<li>Able to easily pick up and follow required design guidelines for a development project. These may differ between applications and product releases.</li>
<li>Be aware of common industry standards and coding best-practices within your disciplines and apply them as required.</li>
</ul>
<p><strong>Desirable</strong></p>
<ul>
<li>Experience delivering cloud-based solutions</li>
<li>Experience of working with Use Cases</li>
<li>Unit Testing framework</li>
</ul>
<p>They really do work in a fun, dynamic environment and offer the full package.</p>
<p>An ideal environment where you can develop your professional career with the most advanced technologies in the sector.</p>
<p>They are always looking to improve to achieve excellence.</p>
<p><strong>This is a list of what you will be part of:</strong></p>
<ul>
<li>Flexible schedules. For them, personal and professional life must be reconciled.</li>
<li>Do you need to work from home? It is not a problem, the Internet provides everything we need to be connected so you will have the opportunity to work from home from time to time.</li>
<li>They are always preparing outdoor activities to strengthen peer ties (paintball, go-karting, BBQs).</li>
<li>Beer o&rsquo;clocks after work.</li>
<li>On Fridays we all have lunch together.</li>
<li>All the tools you need to grow.</li>
<li>Intensive day in summer to enjoy the sun of Malaga in the afternoon.</li>
</ul>`,
  },
  


  
]

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:py-32 lg:px-8 lg:py-40">
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
