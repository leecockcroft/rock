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
    question: "Senior PHP Developer",
    answer: `
     <p>Senior PHP Developer - Want to work for an International eGaming company with offices worldwide and full remote flexibility? My client is offering a Hybrid role where you can base yourself out of the of the most prestigious locations in the South of Spain &ndash; Sotogrande or one of their established offices in Gibraltar or fully remote &ndash; the choice is yours.</p>
<p>Joining a brand-new team working on an exciting new project now is a great time to join the business and be part of their journey.</p>
<p>With a complete open salary bracket my client will be happy to pay for the right candidate.</p>
<p>As a Senior PHP Developer you will work closely with product owners to help shape and build the future of their tools and products. You'd spend your time developing and improving existing projects, for example:</p>
<ul>
<li>Building new websites and pages based on provided technical and functional specifications</li>
<li>Implementing different strategies for existing products and tools based on requirements&nbsp;</li>
</ul>
<p>You will also do a ton of work together like:&nbsp;</p>
<ul>
<li>Architecting and developing new features&nbsp;</li>
<li>Prototyping and evaluating potential implementations&nbsp;</li>
</ul>
<p>You would spend a lot of time programming, brainstorming on hard problems, and prototyping different ideas. You wouldn't be just churning through tickets in the backlog &mdash; you'd be helping to design entirely new products, figuring out what exactly we're even building and why.&nbsp;</p>
<p>While being a somewhat big company, they&rsquo;re split into small teams which means that even though they each have their areas of expertise, they all wear many hats. They&rsquo;re looking for a programmer, but you'd also help out with things like:&nbsp;</p>
<ul>
<li>Managing Git VCS issues and fixing bugs&nbsp;</li>
<li>Writing and improving the documentation for the products and tools we make&nbsp;</li>
<li>Helping customer support answer customer questions&nbsp;</li>
<li>Troubleshooting problems during live communication with other teams If you've ever maintained a large project, working with them carries a lot of the same responsibilities. Here are a few recent projects you might have worked on if you were already part of the team:&nbsp;</li>
<li>Building next version of their products from scratch with latest technologies&nbsp;</li>
<li>Building a performance testing architecture and laying the groundwork that will be used company wide&nbsp;</li>
<li>Refactoring the actual production application to simplify and speed up performance without any down time.</li>
</ul>
<p>Here are some of the technologies they work with day to day right now:&nbsp;</p>
<ul>
<li>Their main product itself is written in legacy PHP (Drupal7), and it is tested manually but they are working hard on changing that.&nbsp;</li>
<li>They have their own brand new version that is built with NodeJS and ExpressJS. &ndash; they use many different databases, but if you know MySQL you shouldn't have any problems.&nbsp;</li>
<li>Redis is powering their cache, but it is also used as a "database" for some projects. List of key skills they think you'd need:</li>
<li>English communication skills&nbsp;</li>
<li>Git&nbsp;</li>
<li>Linux terminal&nbsp;</li>
<li>MySQL&nbsp;</li>
<li>PHP&nbsp;</li>
</ul>
<p>List of optional skills we'd love you to have&nbsp;</p>
<ul>
<li>Ability to write and interpret technical documentation&nbsp;</li>
<li>Agile/Scrum&nbsp;</li>
<li>Drupal 7 and higher&nbsp;</li>
<li>REST/JSON/SOAP&nbsp;</li>
<li>RabbitMQ&nbsp;</li>
<li>Redis&nbsp;</li>
</ul>
    `,
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
</ul>`,
  },
  {
    question: "Senior Java Developer- “Greenfield Project”",
    answer:
     `<p>Want to work for an International eGaming company with offices worldwide and remote flexibility?&nbsp;</p>
<p>My client is offering a Hybrid role where you can base yourself out of the of the most prestigious locations in the South of Spain &ndash; Sotogrande or one of their established offices in Gibraltar, the choice is yours.</p>
<p>Joining a brand-new team working on an exciting new project building a brand-new ecosystem</p>
<p>now is an exciting time to join the business and be part of their journey.</p>
<p>With a complete open salary bracket my client will be happy to pay for the right candidate.</p>
<p>As a Senior Java Developer, you will be a Independent but collaborative, driven, assertive, and willing to work on simultaneous projects.</p>
<p><strong>GENERAL DUTIES &amp; RESPONSIBILITIES</strong></p>
<ul>
<li>Working across a number of business areas providing development, maintenance, and support.</li>
<li>Working as part of squads and occasionally solo developments as the business needs arise</li>
<li>Discuss/Meet business stakeholders to understand the problems they wish to address</li>
<li>Liaise with architects, analysts, business representatives, infrastructure specialists to jointly develop proposals for technical solutions including implementation deployment, support, and troubleshooting overviews</li>
<li>Scope and conduct needed Proof of Concepts when necessary</li>
<li>Help identify probable causes and provide immediate solutions during an incident</li>
<li>Work as part of Agile development team (Scrum): attend team meetings, report on assigned tasks progress, participate in sprints planning and tasks estimation</li>
<li>Complete tasks &amp; deliver projects on-time and according to company standards</li>
<li>Contribute significant ideas for making the applications better and easier to use</li>
<li>Provide assistance to other developers/projects as needed</li>
<li>Take part in OOH application support rota</li>
</ul>
<p><strong>MANDATORY SKILLS AND EXPERIENCE</strong></p>
<ul>
<li>Expert knowledge of Java 8, 11+ and Spring ecosystem you will also work with 17 LTS.</li>
<li>Advanced knowledge of SQL, preferably with PostgreSQL or MySQL databases</li>
<li>Experience in working with Java-based ORMs (know when to use them, when not to)</li>
<li>Experience designing and building RESTful web service APIs and REST API clients</li>
<li>Solid understanding of Java concurrency and multithreading</li>
<li>Demonstrable knowledge of Maven and Linux</li>
<li>Experience with CI tools and automation (Gitlab, Jenkins)</li>
<li>Passion for writing high quality, rock solid software</li>
<li>Demonstrable knowledge of application security and best practices</li>
<li>Knowledge of JVM monitoring and performance tuning Java applications, as well as troubleshooting issues in production</li>
</ul>
<p><strong>DESIRABLE SKILLS AND EXPERIENCE</strong></p>
<ul>
<li>Experience building highly transactional, high volume distributed server applications</li>
<li>Knowledge of Asynchronous Messaging (Kafka or RabbitMQ)</li>
<li>Distributed caching (Hazelcast or Redis)</li>
<li>Hands-on experience with Docker and Kubernetes</li>
<li>Development of back office applications using JS, React or Angular is a plus</li>
<li>Experience with NoSQL DB (MongoDB) is a plus&nbsp;</li>
</ul>
<p><strong>JOB QUALIFICATIONS</strong></p>
<ul>
<li>At least 5+ years of working experience in serving as a Java Developer working on varied types of software development projects</li>
<li>Ability to write and interpret technical documentation</li>
<li>Good oral and written English communication skills</li>
<li>Creative, analytical, and with strong problem-solving skills</li>
<li>Strong grasp of established and emerging technologies, systems, platforms, and software</li>
<li>Ability to organize and manage multiple priorities</li>
<li>Ability to work in a team and works well under pressure and deadlines</li>
<li>Background in Agile Software Development using Scrum Methodology is preferred but not required</li>
<li>Background in Online Gaming is preferred but not required</li>
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
