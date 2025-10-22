/** @format */

import React from "react";

export default function Home({
  onViewProjects,
}: {
  onViewProjects?: () => void;
}) {
  return (
    <section className='home'>
      <div className='intro'>
        <h2>Hello, I'm Sadgun </h2>
        <p>
          <strong>Full Stack Developer</strong> who turns ideas into interactive
          web applications using React, Angular, Node.js, and Express.js, I
          build projects that are fast, reliable, and userfriendly. I enjoy
          solving challenges, experimenting with new technologies, and creating
          digital solutions that are both functional and visually appealing.
        </p>
      </div>

      <div className='cta'>
        <button className='btn' onClick={onViewProjects}>
          View Projects
        </button>
        <div className='skills'>
          <h3>
            Skills aquired in <TypingLoop />
          </h3>
        </div>
        <div className='heads'>
          <h2>Certifications</h2>
        </div>
        <div className='certifications'>
          <p>
            - Software Engineering (IBM){" "}
            <a
              href='https://www.coursera.org/account/accomplishments/certificate/OP0NWZ22S1A7'
              className='btn'
              target='_blank'>
              View Certificate
            </a>
          </p>
          <p>
            - Developing Frontend Apps with React (IBM){" "}
            <a
              href='https://www.coursera.org/account/accomplishments/certificate/01FCI8MW306L'
              className='btn'
              target='_blank'>
              View Certificate
            </a>
          </p>
          <p>
            - Developing Backend Apps with Node.js and Express.js (IBM){" "}
            <a
              href='https://www.coursera.org/account/accomplishments/certificate/6VM10WOO25CO'
              className='btn'
              target='_blank'>
              View Certificate
            </a>
          </p>
        </div>
        <div className='heads'>
          <h2>Experience</h2>
        </div>
        <div className='expereince'>
          <div className='company'>
            <h4>
              New York State DOE — Full Stack Developer | Jan 2025 - Current{" "}
            </h4>
            <ul>
              <li>Built responsive apps using React, Redux, and TypeScript.</li>
              <li>
                Developed REST APIs with Node.js, Express.js, MongoDB, and SQL.
              </li>
              <li>Secured and deployed apps on AWS.</li>
              <li>
                Created reusable UI components with React Native, HTML, and CSS.
              </li>
              <li>
                Used Docker and Git for containerization and version control.
              </li>
            </ul>
          </div>

          <div className='company'>
            <h4>Genpact — Frontend Engineer | Jun 2021 - Nov 2023</h4>
            <ul>
              <li>Built SPAs with Angular, TypeScript, and GraphQL.</li>
              <li>Optimized UI using JavaScript, HTML, and CSS.</li>
              <li>
                Integrated cloud services on AWS for serverless deployment.
              </li>
              <li>Developed APIs with Node.js, Express.js, and SQL/MongoDB.</li>
              <li>Managed state with Redux and versioning with Git.</li>
            </ul>
          </div>
        </div>
        <div className='heads'>
          <h2>Contact Me</h2>
        </div>
        <div className='contact'>
          <p>
            Email:{" "}
            <a href='mailto:sadgun.bojjapelly@gmail.com' className="email">
              sadgun.bojjapelly@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function TypingLoop() {
  const words = [
    "React",
    "Angular",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Java",
    "TypeScript",
    "React Native",
    "AWS",
    "Docker",
    "MongoDB",
    "SQL",
    "HTML",
    "CSS",
    "Git",
    "Redux",
    "GraphQL",
  ];
  const [wordIndex, setWordIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  const TYPING_SPEED = 110;
  const DELETING_SPEED = 30;
  const PAUSE_AFTER_WORD = 900;

  React.useEffect(() => {
    const current = words[wordIndex];

    if (!isDeleting && displayed.length < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }

    if (!isDeleting && displayed.length === current.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed.length === 0) {
      // move to next word
      setIsDeleting(false);
      setWordIndex((wi) => (wi + 1) % words.length);
    }
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className='typing' aria-live='polite'>
      {displayed.split("").map((ch, i) => (
        <strong key={i}>{ch}</strong>
      ))}
      <span className='cursor' aria-hidden='true'>
        &nbsp;
      </span>
    </span>
  );
}
