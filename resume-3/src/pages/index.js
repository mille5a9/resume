import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Collapsible from 'react-collapsible'
import pdfResume from '../files/AndrewMiller_resume.pdf'

// styles
const pageStyles = {
  color: "white",
  padding: "48px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minWidth: 531,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 700,
  textAlign: "center",
}
const headingAccentStyles = {
  fontSize: "16px",
}
const paragraphStyles = {
  marginBottom: 24,
  maxWidth: 700,
  textAlign: "justify",
}
const categoryStyles = {
  fontSize: "24px",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#28282B",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 48,
  marginTop: 48,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: 700,
  paddingInlineStart: "0px",
}

const linkStyle = {
  textDecorationLine: "underline",
  textDecorationStyle: "solid",
  textDecorationColor: "#C00018",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "white",
  fontSize: "14px",
  paddingLeft: "8px",
}

const jobInfo = {
  display: "inline",
}
const jobInfoLeft = {
  float: "left",
}
const jobInfoRight = {
  float: "right",
}
const jobHeading = {
  paddingBottom: "4px",
}

// data
const experienceLinks = [
  {
    text: "Software Developer Co-op",
    subtext: "Myriad Neuroscience",
    date: "January 2020 - August 2020",
    location: "Mason, Ohio",
    headings: [
      "Contributed to the unit test coverage of multiple services to reduce QA workload",
      "Pioneered new component test assembly for microservice template",
      "Engaged in regular sprint ceremonies for the “Operations” agile development team",
      "Responded to the rapidly-changing needs of stakeholders",
    ],
    description:
      "At Myriad, I was faced with new technologies and new challenges. This was my most heavily-involved exposure to source control and developing in an Agile team environment. "
      + "I was participating in regular sprint ceremonies with my teammates and I would take User Stories and commit solutions to TFS and Github. Code reviews were the standard "
      + "that I met along with all the other developers - I was one of two co-ops at the company in Spring, and then I was the only temporary developer in the Summer. "
      + "This experience also saw the rise of Covid-19, and the challenges that came with it. I transitioned with the rest of the company to remote work, where I demonstrated "
      + "success at a new level of responsibility in isolation.",
  },
  {
    text: "Web Developer Co-op",
    subtext: "Fortech LLC",
    date: "Aug-Dec 2018 & May-Aug 2019",
    location: "Cincinnati, Ohio",
    headings: [
      "Acquired Microsoft 70-483 Programming in C# Certification",
      "Developed Web Applications in .NET Core with MVC and React",
      "Designed a dashboard for an MES application to assist P&G plant-floor personnel with data visualization",
      "Enhanced in-house Time Accounting software with additional features for proposal tracking and expense reporting",
    ],
    description:
      "Fortech was my first introduction to web development. I walked in the door with my prior experience in C++, and before I knew it I was using Knockout.js to make webpages "
      + "with working buttons. I gradually became more comfortable with .NET and MVC design principles by helping the full-fledged devs make MES sites for clients. During my first "
      + "term, I was given the opportunity to study for and take Microsoft's \"Programming in C#\" certification exam. Also that term I learned about React and how to make extremely "
      + "customizable websites with this more powerful tool. React came in handy for the design of this page as well!",
  },
  {
    text: "Undergaduate Researcher",
    subtext: "University of Cincinnati",
    date: "January 2018 - April 2018",
    location: "Cincinnati, Ohio",
    headings: [
      "Contributed to Dr. Wilsey’s High-Performance Computing Lab",
      "Adapted “warped2” simulation framework to new model for artificial neural networks",
    ],
    link: "https://www.github.com/wilseypa/warped2-models/tree/master/models/neuron",
    description:
      "My directive in the High-Performance Computing Lab at UC was to devise a new model for Dr. Wilsey's Discrete Event Simulation (DES) software. As my first co-op experience "
      + "there was quite a learning curve in regards to writing code. Myself and the other undergrads spent countless hours in the dreary, windowless lab receiving instruction from "
      + "a seasoned PhD student. I used an Ubuntu VM on my laptop for this work, because that is what we did in class and I didn't know how else to write C++. I learned the ins "
      + "and outs of vim during this course, which I put into play through all my later experiences with linux distributions. This occupation is also where I learned "
      + "how to commit to Github.",
  },
]
const educationLinks = [
  {
    text: "Bachelor of Science, Computer Engineering",
    subtext: "University of Cincinnati, College of Engineering and Applied Science",
    date: "August 2016 - May 2021",
    location: "Cincinnati, Ohio",
    headings: [
      "",
      "",
      "",
    ],
    description:
      "I knew I wanted to do something with computers from a very young age, but falling on Computer Engineering was incidental and I can't say I had "
      + "a good reason to pick it over Computer Science. My go-to excuse is that I simply read a pamphlet from UC about each major and I preferred the way that Computer "
      + "Engineering sounded. This is true, but I may also have been swayed by the occupation of my father, who has a Mechanical Engineering degree. During my schooling, "
      + "there was a point where I realized I may have been more apt for Computer Science courses, as I find all the software material I am studying to be highly interesting. "
      + "I stuck with Computer Engineering because I saw the breadth of the field, the education I was getting spans through CS and Electrical Engineering, as well as "
      + "Information Technology fields.",
  }
]
const projectLinks = [
  {
    text: "Professional Website",
    date: "April 2019 (rev. Feb 2021)",
    headings: [
      "Node.js website written with React",
      "Hosted with an Amazon Web Services EC2 instance with Windows server 2016",
    ],
    link: "http://seeandrewmiller.com",
    description:
      "This website came into being in Spring of 2019, with a jet black backround and all the resume information copied verbatim onto several obtusely-named pages. That first "
      + "implementation was from my first days with React, where I technically made the site with create-react-app, but I didn't use the power of the tool to create a cooler site. "
      + "The AWS EC2 instance was running slow, so I rewrote it the following Summer term without bootstrap and with some design pointers from a professional. The second one was "
      + "still slow, but this third incarnation ditches the bulky structure associated with a .NET React app in favor of a simple single-page Node JS site. I have found the "
      + "process of iteration to be a fun learning experience, and I know that this is typical of many projects in any engineering space. Having a URL that I can say is mine that "
      + "advocates for me is an empowering feeling and I believe the time investment has already paid off.",
  },
  {
    text: "Ubuntu Home Server",
    date: "January 2020",
    headings: [
      "Stores security camera footage on NAS with a systemd service",
      "Facilitates my remote development via VSCode's SSH capabilities",
      "Runs a game server for myself and my friends",
    ],
    description:
      "The server was born out of a desire for me to have an always-on machine for future home automation business. I was infatuated with the idea of building up infrastructure "
      + "and knowledge to be able to turn a future home into the smartest home I could. Merely installing PfSense onto a 1U server has given me more insight into enterprise "
      + "networking than anything I have ever done before, and having a powerful Ubuntu machine on standby has done wonders for my proficiency with Linux SSH environments. "
      + "I have gotten great use in my final school terms with writing programs for classes using the server, VS Code's Remote SSH extension providing a wonderful access point. "
      + "Adding drives in a Raid 5 array provided an exciting amount of storage for camera footage and logs, and I cannot wait to expand the system to fit into future homes "
      + "for the rest of my life.",
  },
  {
    text: "Github Repository",
    date: "December 2018",
    headings: [
      "Devised numerous small code projects created to explore new areas of programming",
      "Studied various aspects of web development and interacting with an API",
      "Implemented basic algorithms for data compression and web scraping",
    ],
    link: "https://github.com/mille5a9/charmed",
    description:
      "This collection of personal projects was inspired by my pursuits in learning about C#. I started with duplicating the common data structures that I wrote in C++ for a "
      + "previous college course, and it developed into seeing what sorts of things I could accomplish. I was able to create a chat bot for my friends to interact with, and "
      + "it was able to scrape the first page of google search results for a given query. This was an exciting development for me; I became more comfortable with seeking out "
      + "packages, extensions, and plugins to support my edeavors from here on out.",
  },
  {
    text: "Ethereum Miner",
    date: "December 2017",
    headings: [
      "Assembled parts and constructed wooden frame",
      "Utilizes five GPUs to mine on the Ethereum blockchain, providing security to the network",
      "Runs on a specialized linux distribution",
    ],
    description:
      "From an investment point-of-view, this project was an incredible leap of faith for me. I was still at the beginning of my college education and I was enthused by "
      + "all of the exciting new technologies in the blockchain space. I wanted to start investing for personal reasons, but I also wanted to learn about and participate in the "
      + "ecosystem as a computer engineer and as a lover of technology. This machine has followed me to numerous different apartments, heated my home throughout several "
      + "winters, and kept me up for a couple sleepless nights. This is and has been a fun adventure in consumer PC equipment, and I feel that my involvement with these "
      + "sorts of inventions is far from over.",
  },
]
const awardsLinks = [
  {
    text: "Cincinnatus Scholarship",
    date: "August 2016 - May 2021",
    headings: [
      "Maintained a GPA over 3.2 on a per-semester basis",
      "Annual community service",
    ],
    description:
      "This scholarship program required maintaining a certain GPA and completing community service on a yearly basis. For my contribution to my community, I got in touch "
      + "with one of my language arts teachers from middle school. I was able to come in to her classroom each day on all of my Spring breaks throughout college. I would "
      + "help with grading papers, and I would help students who were particularly struggling with completing their assignments on time so that they did not fall behind. "
      + "Teaching has always been a curiousity of mine, and being in the environment on the opposite side of what I am used to was interesting. I also found it very "
      + "satisfying to lend a hand to some of society's most underappreciated occupations. I know that the students in her study hall greatly appreciated having an adult "
      + "in the room that could help them with algebra.",
  },
  {
    text: "Boy Scouts of America - Eagle Scout Rank",
    date: "October 2015",
    headings: [
      "Demonstrated personal responsibility serving multiple terms in patrol and troop-level leadership positions",
    ],
    description:
      "I come from a family of Boy Scouts, my much-older brother and my Dad and my Grandfather before him were all Eagle Scouts from Troop 136 in Grove City. Naturally, "
      + "progressing to Eagle Scout was an expectation for me. There was a great deal of pressure on us scouts in the troop to progress through our ranks as quickly as possible, "
      + "as our scoutmaster saw that the step to high school causes most scouts to lose interest. I was able to do much of the work for my Eagle project just before Freshman year. "
      + "My project was fortunately funded by a local church, where I organized the purchase and delivery of a multitude of plants and a few dozen cubic meters of soil. I had about "
      + "70 individuals help me over three days of work, where we installed the garden and added mulch. I then set up a sprinkler system to grow new grass which required a visit twice a "
      + "day for the Summer of 2015.",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Andrew Miller</title>
      <h1 style={headingStyles}>
        Andrew Miller
        <br />
        <span style={headingAccentStyles}>andrewm192@outlook.com | 614-827-5168 | <a href="https://www.linkedin.com/in/andrewm192" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a> | <a href={ pdfResume } target="_blank" rel="noopener noreferrer">Resume PDF</a> </span>
      </h1>
      <p style={paragraphStyles}>
        Hi, I'm Andy, and I am an aspiring software developer with a B.S. in Computer Engineering from the University of Cincinnati. 
        My education included about two years of proper experience as a software developer. 
        These experiences have reaffirmed my passion for software development and my desire to continue writing programs that will have a positive effect on peoples lives.
      </p>
      {/* <p style={paragraphStyles}><a href={ pdfResume } target="_blank" rel="noopener noreferrer">Here is my resume</a> as a PDF</p> */}
      <ul style={listStyles}>
        <p style={categoryStyles}>Professional Experience</p>
        {experienceLinks.map(link => (
          <ul style={{ ...listItemStyles }}>
            <Collapsible style={link.Style} trigger={
              <ul style={descriptionStyle}>
                <div style={jobHeading}>
                  <div style={jobInfo}>
                    <span style={jobInfoLeft}>{link.text}</span>
                    <span style={jobInfoRight}>{link.date}</span>
                  </div>
                  <br />
                  <div style={jobInfo}>
                    <span style={jobInfoLeft}>{link.subtext}</span>
                    <span style={jobInfoRight}>{link.location}</span>
                  </div>
                  <br />
                </div>
                {link.headings.map(heading => (<li><span>{heading}</span></li>))}
                <a href={link.link} target="_blank" rel="noopener noreferrer" >{link.link}</a>
              </ul>
              }>
              <p style={descriptionStyle}>{link.description}</p>
            </Collapsible>
          </ul>
        ))}
        <p style={categoryStyles}>Education</p>
        {educationLinks.map(link => (
          <ul style={{ ...listItemStyles }}>
            <Collapsible style={link.Style} trigger={
              <ul style={descriptionStyle}>
              <div style={jobHeading}>
                <div style={jobInfo}>
                  <span style={jobInfoLeft}>{link.text}</span>
                  <span style={jobInfoRight}>{link.date}</span>
                </div>
                <br />
                <div style={jobInfo}>
                  <span style={jobInfoLeft}>{link.subtext}</span>
                  <span style={jobInfoRight}>{link.location}</span>
                </div>
                <br />
              </div>
              </ul>
              }>
              <p style={descriptionStyle}>{link.description}</p>
            </Collapsible>
          </ul>
        ))}
        <p style={categoryStyles}>Personal Projects</p>
        {projectLinks.map(link => (
          <ul style={{ ...listItemStyles }}>
            <Collapsible style={link.Style} trigger={
              <ul style={descriptionStyle}>
                <div style={jobHeading}>
                  <div style={jobInfo}>
                    <span style={jobInfoLeft}>{link.text}</span>
                    <span style={jobInfoRight}>{link.date}</span>
                  </div>
                  <br />
                </div>
                {link.headings.map(heading => (<li><span>{heading}</span></li>))}
                <a href={link.link} target="_blank" rel="noopener noreferrer" >{link.link}</a>
              </ul>
              }>
              <p style={descriptionStyle}>{link.description}</p>
            </Collapsible>
          </ul>
        ))}
        <p style={categoryStyles}>Awards</p>
        {awardsLinks.map(link => (
          <ul style={{ ...listItemStyles }}>
            <Collapsible style={link.Style} trigger={
              <ul style={descriptionStyle}>
                <div style={jobHeading}>
                  <div style={jobInfo}>
                    <span style={jobInfoLeft}>{link.text}</span>
                    <span style={jobInfoRight}>{link.date}</span>
                  </div>
                  <br />
                </div>
                {link.headings.map(heading => (<li><span>{heading}</span></li>))}
                <a href={link.link} target="_blank" rel="noopener noreferrer" >{link.link}</a>
              </ul>
              }>
              <p style={descriptionStyle}>{link.description}</p>
            </Collapsible>
          </ul>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
