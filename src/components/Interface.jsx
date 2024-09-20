import { motion } from "framer-motion";
import Section from "./Section";
import './Components.css';

export default function Interface() {
    return (
        <div className="container">
            <AboutSection />
            <SkillsSection />
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection />
        </div>
    );
};

const AboutSection = () => {
  return (
    <Section>
        <h1 className="aboutSection-Intro">Hi, I'm <br /> <span className="aboutSection-Intro-Name">Franck Fongang</span></h1>
        <motion.p 
            className="aboutSection-description"
            initial={{
                opacity: 0,
                y: 25,
            }}    
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.5,
            }}
        >
            I'm a software developer with a passion for building <br /> innovative and user-friendly applications.
        </motion.p>
        <motion.button 
            className="aboutSection-button"
            initial={{
                opacity: 0,
                y: 25,
            }}    
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 2,
            }}
        >
            Contact me
        </motion.button>
    </Section>
  );
}

const skills = [
  {
      title: "Threejs / React Three Fiber",
      level: 80,
  },
  {
      title: "React",
      level: 90,
  },
  {
      title: "Node.js",
      level: 70,
  },
  {
      title: "MongoDB",
      level: 50,
  },
];

const languages = [
  {
      title: "🇫🇷 French",
      level: 90,
  },
  {
      title: "🇺🇸 English",
      level: 80,
  },
]

const SkillsSection = () => {
    return (
      <Section>
        <motion.div whileInView={"visible"}>
          <h2 className="skills-title">Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div className="skill-box" key={index}>
                <motion.h3
                  className="skill-title"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="progress-bar">
                  <motion.div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="languages-title">Languages</h2>
            <div className="languages-container">
              {languages.map((lng, index) => (
                <div className="language-box" key={index}>
                  <motion.h3
                    className="language-title"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="progress-bar">
                    <motion.div
                      className="progress"
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    );
};
  

const ContactSection = () => {
    return (
      <Section>
        <h2 className="contact-title">Contact me</h2>
        <div className="contact-form-container">
          <form>
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
            />
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-textarea"
            />
            <button className="submit-button">Submit</button>
          </form>
        </div>
      </Section>
    );
};
  