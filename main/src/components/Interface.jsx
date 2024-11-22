import { useAtom } from "jotai";
import { motion } from "framer-motion-3d";
import { currentProjectAtom, projects } from "./Projects";
import Section from "./Section";
import QuebecFlag from '../assets/quebec.svg';
import AmericanFlag from '../assets/unitedstates.svg';
import { useForm, ValidationError } from '@formspree/react';
import './Components.css';
import { useContext, useEffect } from "react";
import { WindowWidthContext } from "../App";


export default function Interface(props) {
  const { setSection } = props;

  const width = useContext(WindowWidthContext);

    return (
        <div className="container-container">
          <div className="test-test">
          <div className="container-about-section">
            <AboutSection setSection={setSection} />
          </div>
          <div className="container-education-section">
              <EducationSection />
          </div>
          <div className="container-work-section">
              <WorkSection />
          </div>
          <div className="container-skills-section">
              <SkillsSection width={width} />
          </div>
          </div>
          <div className="container-projects-section" id="RefRef">
              <ProjectsSection />
          </div>
          <div className="container-contact-section">
              <ContactSection />
          </div>
        </div>
    );
};

const AboutSection = (props) => {
  const { setSection } = props;

  return (
    <Section mobileTop>
        <h1 className="aboutSection-Intro">Hi, I'm <br /> <span className="aboutSection-Intro-Name">Franck Fongang</span></h1>
        <motion.p 
            className="aboutSection-description"
            initial={{
                opacity: 0,
                y: 10,
            }}    
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0,
                delay: 1,
            }}
        >
            I'm a software developer with a passion for building <br /> innovative and user-friendly applications.
        </motion.p>
        <motion.button 
          onClick={() => setSection(8)}
            className="aboutSection-button"
            initial={{
                opacity: 0,
                y: 10,
            }}    
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
                delay: 1.2,
            }}
        >
            Contact me
        </motion.button>
        <Contacts background="yes"/>
    </Section>
  );
}

const EducationSection = () => {
  return (
    <Section>
      <div className="container-fluid education-section">
      <div className="row">
      <h1 className="col">Education</h1>
      </div>
      <motion.div
        className="row education-grid"
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
          <motion.div
            className="col education-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3>Université de Montréal <br /> École Polytechnique</h3>
            <p>Expected graduation 2028</p>
            <div className="school-picture">
              <img src="schools/polymtl.png" style={{width: "270px", height: "100px"}}/>
            </div>
            <p>Bachelor in Engineering (B.Ing) Computer Engineering</p>
          </motion.div>

          <motion.div
            className="col education-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>Cégep de l'Outaouais</h3>
            <p>Graduated in 2024</p>
            <div className="school-picture">
              <img src="schools/cegep.png" style={{width: "270px", height: "120px"}}/>
            </div>
            <p>DEC (College level study) in Natural Science</p>
          </motion.div>

          <motion.div
            className="col education-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3>Collège Saint-Alexandre de la Gatineau</h3>
            <p>Graduated in 2022</p>
            <div className="school-picture">
              <img src="schools/stalex.png" style={{width: "270px", height: "120px"}}/>
            </div>
            <p>Private High School Diploma</p>
          </motion.div>
      </motion.div>
      </div>
    </Section>
  );
};

const WorkSection = () => {
  return (
    <Section>
      <div className="container-fluid work-section">
      <div className="row">
      <h1 className="col">Work Experience</h1>
      </div>
      <motion.div
        className="row work-grid"
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
          <motion.div
            className="col work-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3>Software Developer</h3>
            <p>Self-Employed</p>
            <p>2019 - 2023</p>
            <p>As a self-employed Full Stack Software Developer from 2019 to 2023, I designed, developed, deployed, and maintained over 20 e-commerce websites for small businesses using technologies like Next.js, Node.js, Express, Spring Boot, and MongoDB. Collaborating with a team of 3+ engineers, I built responsive and scalable platforms, achieving a 95% client satisfaction rate. I integrated Stripe for payment processing and implemented features such as inventory management, which improved operational efficiency by 80% and increased sales for some clients by up to 1000%. I deployed applications using CI/CD pipelines on GitHub, Vercel, and AWS, ensuring 100% uptime and resolved 90% of issues within 48 hours. Additionally, I managed projects and client communications, consistently delivering projects on time.</p>
          </motion.div>

          <motion.div
            className="col work-box"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>Software Engineer</h3>
            <p>Self-Employed</p>
            <p>2020 - 2023</p>
            <p>As a self-employed Software Engineer from 2020 to 2023, I specialized in developing automated sneaker purchasing systems using Node.js, Puppeteer, and Electron. I collaborated with a team to overcome site bot defenses, achieving a 90% success rate for high-demand sneaker drops. By containerizing applications with Docker, I reduced deployment times by 50%, ensuring consistent environments and performance optimization. I also managed development cycles and client communications, consistently delivering updates on schedule.</p>
          </motion.div>

      </motion.div>
      </div>
    </Section>
  );
}

const SkillsSection = (props) => {
  const { width } = props;
  let svgWidth = 48;
  let svgHeight = 48;

  const skills = [
    {
    Languages: [
      {
        title: "C",
        icon: (
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#394AAB"/>
                  <path d="M134.001 33C169.144 33 199.828 52.0863 216.262 80.4561L216.102 80.183L174.753 103.991C166.607 90.1977 151.672 80.8892 134.54 80.6975L134.001 80.6945C107.875 80.6945 86.6945 101.874 86.6945 127.999C86.6945 136.543 88.9723 144.552 92.9335 151.469C101.088 165.704 116.416 175.306 134.001 175.306C151.693 175.306 167.109 165.582 175.222 151.195L175.025 151.54L216.311 175.458C200.057 203.588 169.794 222.615 135.059 222.994L134.001 223C98.746 223 67.9753 203.796 51.582 175.276C43.5791 161.353 39 145.212 39 127.999C39 75.5334 81.5323 33 134.001 33Z" fill="white"/>
                  </svg>
                </g>
              </svg>
              ),
      },
      {
        title: "C++",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#00599C" rx="60"/><path fill="#fff" d="M110.759 210.517C65.1254 210.517 28 173.392 28 127.759C28 82.1254 65.1254 45 110.759 45C140.204 45 167.667 60.8458 182.427 86.3533L146.611 107.079C139.224 94.3111 125.485 86.3793 110.759 86.3793C87.9416 86.3793 69.3793 104.942 69.3793 127.759C69.3793 150.575 87.9416 169.138 110.759 169.138C125.486 169.138 139.225 161.206 146.613 148.436L182.429 169.161C167.669 194.671 140.206 210.517 110.759 210.517Z"/><path fill="#fff" d="M193.517 123.161H184.321V113.965H175.127V123.161H165.931V132.356H175.127V141.552H184.321V132.356H193.517V123.161Z"/><path fill="#fff" d="M228 123.161H218.804V113.965H209.61V123.161H200.414V132.356H209.61V141.552H218.804V132.356H228V123.161Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Java",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M101.634 182.619C101.634 182.619 93.9548 187.293 106.979 188.63C122.707 190.634 131.023 190.299 148.386 186.962C148.386 186.962 153.06 189.971 159.406 192.306C120.331 209.002 70.9089 191.304 101.634 182.619ZM96.6252 160.914C96.6252 160.914 88.2753 167.26 101.299 168.593C118.327 170.262 131.69 170.597 154.732 165.926C154.732 165.926 157.741 169.267 162.747 170.936C115.664 184.961 62.8975 172.269 96.6252 160.917V160.914ZM188.795 198.984C188.795 198.984 194.471 203.658 182.449 207.334C160.073 214.012 88.6104 216.019 68.5735 207.334C61.564 204.325 74.9197 199.982 79.2587 199.319C83.6012 198.317 85.9366 198.317 85.9366 198.317C78.2569 192.973 34.8424 209.337 63.8959 214.046C143.709 227.073 209.499 208.37 188.792 199.018L188.795 198.984ZM105.307 138.203C105.307 138.203 68.9052 146.888 92.2793 149.89C102.298 151.223 122 150.892 140.368 149.555C155.396 148.221 170.458 145.548 170.458 145.548C170.458 145.548 165.113 147.886 161.441 150.222C124.342 159.915 53.2107 155.573 73.5827 145.554C90.9526 137.204 105.307 138.203 105.307 138.203V138.203ZM170.423 174.604C207.83 155.234 190.46 136.534 178.438 138.873C175.429 139.54 174.096 140.207 174.096 140.207C174.096 140.207 175.097 138.203 177.436 137.54C201.145 129.19 219.849 162.586 169.757 175.61C169.757 175.61 170.092 175.275 170.423 174.608V174.604ZM108.979 227.364C145.046 229.703 200.147 226.03 201.484 208.995C201.484 208.995 198.817 215.673 171.764 220.683C141.042 226.359 102.968 225.692 80.5957 222.016C80.5957 222.016 85.2698 226.023 108.982 227.36L108.979 227.364Z"/><path fill="#F58219" d="M147.685 28C147.685 28 168.389 49.0388 127.983 80.7594C95.5891 106.472 120.632 121.168 127.983 137.861C108.948 120.833 95.2609 105.802 104.606 91.7762C118.331 71.0828 156.062 61.0644 147.685 28ZM137 123.842C146.683 134.862 134.333 144.881 134.333 144.881C134.333 144.881 159.044 132.195 147.692 116.494C137.338 101.466 129.324 94.1184 172.738 69.0689C172.738 69.0689 104.278 86.0968 137.007 123.835L137 123.842Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Go",
        icon:(<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#00B4E0" rx="60"/><path fill="#fff" d="M40.5 113.234C40.1 113.234 40 113.034 40.2 112.734L42.3 110.034C42.5 109.734 43 109.534 43.4 109.534H79.1C79.5 109.534 79.6 109.834 79.4 110.134L77.7 112.734C77.5 113.034 77 113.334 76.7 113.334L40.5 113.234Z"/><path fill="#fff" d="M25.4 122.434C25 122.434 24.9 122.234 25.1 121.934L27.2 119.234C27.4 118.934 27.9 118.734 28.3 118.734H73.9C74.3 118.734 74.5 119.034 74.4 119.334L73.6 121.734C73.5 122.134 73.1 122.334 72.7 122.334L25.4 122.434Z"/><path fill="#fff" d="M49.6 131.634C49.2 131.634 49.1 131.334 49.3 131.034L50.7 128.534C50.9 128.234 51.3 127.934 51.7 127.934H71.7C72.1 127.934 72.3 128.234 72.3 128.634L72.1 131.034C72.1 131.434 71.7 131.734 71.4 131.734L49.6 131.634Z"/><path fill="#fff" d="M153.4 111.434C147.1 113.034 142.8 114.234 136.6 115.834C135.1 116.234 135 116.334 133.7 114.834C132.2 113.134 131.1 112.034 129 111.034C122.7 107.934 116.6 108.834 110.9 112.534C104.1 116.934 100.6 123.434 100.7 131.534C100.8 139.534 106.3 146.134 114.2 147.234C121 148.134 126.7 145.734 131.2 140.634C132.1 139.534 132.9 138.334 133.9 136.934C130.3 136.934 125.8 136.934 114.6 136.934C112.5 136.934 112 135.634 112.7 133.934C114 130.834 116.4 125.634 117.8 123.034C118.1 122.434 118.8 121.434 120.3 121.434C125.4 121.434 144.2 121.434 156.7 121.434C156.5 124.134 156.5 126.834 156.1 129.534C155 136.734 152.3 143.334 147.9 149.134C140.7 158.634 131.3 164.534 119.4 166.134C109.6 167.434 100.5 165.534 92.5 159.534C85.1 153.934 80.9 146.534 79.8 137.334C78.5 126.434 81.7 116.634 88.3 108.034C95.4 98.7343 104.8 92.8343 116.3 90.7343C125.7 89.0343 134.7 90.1343 142.8 95.6343C148.1 99.1343 151.9 103.934 154.4 109.734C155 110.634 154.6 111.134 153.4 111.434Z"/><path fill="#fff" d="M186.5 166.734C177.4 166.534 169.1 163.934 162.1 157.934C156.2 152.834 152.5 146.334 151.3 138.634C149.5 127.334 152.6 117.334 159.4 108.434C166.7 98.8343 175.5 93.8343 187.4 91.7343C197.6 89.9343 207.2 90.9343 215.9 96.8343C223.8 102.234 228.7 109.534 230 119.134C231.7 132.634 227.8 143.634 218.5 153.034C211.9 159.734 203.8 163.934 194.5 165.834C191.8 166.334 189.1 166.434 186.5 166.734ZM210.3 126.334C210.2 125.034 210.2 124.034 210 123.034C208.2 113.134 199.1 107.534 189.6 109.734C180.3 111.834 174.3 117.734 172.1 127.134C170.3 134.934 174.1 142.834 181.3 146.034C186.8 148.434 192.3 148.134 197.6 145.434C205.5 141.334 209.8 134.934 210.3 126.334Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "JavaScript",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#F0DB4F"/>
                  <path d="M67.3117 213.932L86.9027 202.076C90.6821 208.777 94.1202 214.447 102.367 214.447C110.272 214.447 115.256 211.355 115.256 199.327V117.529H139.314V199.667C139.314 224.584 124.708 235.926 103.398 235.926C84.1533 235.926 72.9819 225.959 67.3113 213.93" fill="#323330"/>
                  <path d="M152.381 211.354L171.969 200.013C177.126 208.434 183.828 214.62 195.684 214.62C205.653 214.62 212.009 209.636 212.009 202.762C212.009 194.514 205.479 191.592 194.481 186.782L188.468 184.203C171.111 176.815 159.597 167.535 159.597 147.945C159.597 129.901 173.345 116.153 194.826 116.153C210.12 116.153 221.118 121.481 229.022 135.4L210.291 147.429C206.166 140.04 201.7 137.119 194.826 137.119C187.78 137.119 183.312 141.587 183.312 147.429C183.312 154.646 187.78 157.568 198.09 162.037L204.104 164.614C224.553 173.379 236.067 182.313 236.067 202.418C236.067 224.072 219.055 235.928 196.2 235.928C173.861 235.928 159.426 225.274 152.381 211.354" fill="#323330"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "TypeScript",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#007ACC" rx="60"/><path fill="#fff" d="M56.6112 128.849L56.5299 139.333H73.1902H89.8505L89.8505 186.673V234.012H101.635H113.419V186.673L113.419 139.333H130.079H146.739V129.052C146.739 123.363 146.618 118.609 146.455 118.487C146.333 118.325 126.056 118.243 101.472 118.284L56.7331 118.406L56.6112 128.849Z"/><path fill="#fff" d="M206.567 118.108C213.068 119.734 218.026 122.619 222.577 127.332C224.934 129.852 228.428 134.444 228.713 135.541C228.794 135.866 217.66 143.343 210.915 147.528C210.671 147.691 209.695 146.634 208.598 145.009C205.307 140.214 201.853 138.141 196.57 137.776C188.809 137.247 183.811 141.311 183.852 148.097C183.852 150.088 184.136 151.266 184.949 152.892C186.655 156.427 189.825 158.54 199.781 162.847C218.107 170.731 225.949 175.932 230.826 183.327C236.271 191.576 237.49 204.742 233.792 214.535C229.729 225.181 219.651 232.414 205.469 234.812C201.081 235.584 190.678 235.462 185.965 234.609C175.684 232.78 165.932 227.701 159.918 221.037C157.561 218.436 152.969 211.65 153.254 211.162C153.375 211 154.432 210.35 155.61 209.659C156.748 209.009 161.056 206.53 165.119 204.173L172.474 199.906L174.018 202.182C176.172 205.473 180.885 209.984 183.73 211.487C191.897 215.795 203.113 215.185 208.639 210.228C210.996 208.074 211.971 205.839 211.971 202.548C211.971 199.581 211.605 198.281 210.061 196.046C208.07 193.202 204.007 190.804 192.466 185.806C179.26 180.117 173.571 176.582 168.37 170.974C165.363 167.724 162.518 162.522 161.34 158.174C160.365 154.558 160.121 145.496 160.893 141.839C163.615 129.08 173.246 120.181 187.143 117.539C191.654 116.686 202.137 117.011 206.567 118.108Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Python",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#paint0_linear_2_47)" d="M127.279 29C76.5066 29 79.6772 51.018 79.6772 51.018L79.7338 73.8284H128.185V80.6772H60.4893C60.4893 80.6772 28 76.9926 28 128.222C28 179.452 56.3573 177.636 56.3573 177.636H73.2812V153.863C73.2812 153.863 72.369 125.506 101.186 125.506H149.24C149.24 125.506 176.239 125.942 176.239 99.4123V55.5461C176.239 55.5461 180.338 29 127.279 29ZM100.563 44.339C105.384 44.339 109.28 48.2351 109.28 53.0556C109.28 57.8761 105.384 61.7723 100.563 61.7723C95.7426 61.7723 91.8465 57.8761 91.8465 53.0556C91.8465 48.2351 95.7426 44.339 100.563 44.339Z"/><path fill="url(#paint1_linear_2_47)" d="M128.721 227.958C179.493 227.958 176.323 205.941 176.323 205.941L176.266 183.13H127.815V176.281H195.511C195.511 176.281 228 179.966 228 128.736C228 77.5062 199.643 79.323 199.643 79.323H182.719V103.096C182.719 103.096 183.631 131.453 154.814 131.453H106.76C106.76 131.453 79.7607 131.016 79.7607 157.546V201.412C79.7607 201.412 75.6615 227.958 128.721 227.958ZM155.437 212.619C150.616 212.619 146.72 208.723 146.72 203.903C146.72 199.082 150.616 195.186 155.437 195.186C160.257 195.186 164.154 199.082 164.154 203.903C164.154 208.723 160.257 212.619 155.437 212.619Z"/><defs><linearGradient id="paint0_linear_2_47" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="paint1_linear_2_47" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "Lua",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><g clip-path="url(#clip0_101_404)"><path fill="navy" d="M204.453 128.02C204.453 85.8242 170.195 51.5703 128 51.5703C85.8047 51.5703 51.5469 85.8242 51.5469 128.02C51.5469 170.219 85.8047 204.473 128 204.473C170.195 204.473 204.453 170.219 204.453 128.02Z"/><path fill="#fff" d="M182.066 96.3438C182.066 83.9883 172.035 73.957 159.68 73.957C147.324 73.957 137.293 83.9883 137.293 96.3438C137.293 108.695 147.324 118.73 159.68 118.73C172.035 118.73 182.066 108.695 182.066 96.3438Z"/><path fill="navy" d="M226.84 51.5469C226.84 39.1914 216.809 29.1602 204.453 29.1602C192.098 29.1602 182.066 39.1914 182.066 51.5469C182.066 63.9023 192.098 73.9336 204.453 73.9336C216.809 73.9336 226.84 63.9258 226.84 51.5469Z"/><path fill="#fff" d="M82.5078 160.586H107.281V166.227H76.1094V116.066H82.5078V160.586Z"/><path fill="#fff" d="M136.871 166.227V161.199C133.492 165.953 130.133 167.809 124.832 167.809C117.82 167.809 113.344 163.965 113.344 157.969V130.176H119.047V155.707C119.047 160.039 121.937 162.805 126.48 162.805C132.457 162.805 136.32 157.988 136.32 150.617V130.176H142.023V166.227H136.871Z"/><path fill="#fff" d="M183.945 167.199C182.086 167.684 181.199 167.809 180.016 167.809C176.301 167.809 174.504 166.164 174.102 162.508C170.047 166.227 166.395 167.809 161.855 167.809C154.566 167.809 150.027 163.691 150.027 157.145C150.027 152.457 152.16 149.227 156.363 147.516C158.559 146.629 159.805 146.352 167.914 145.316C172.457 144.77 173.891 143.734 173.891 141.328V139.805C173.891 136.363 171 134.441 165.848 134.441C160.48 134.441 157.863 136.426 157.379 140.84H151.59C151.738 137.27 152.414 135.203 154.062 133.344C156.469 130.66 160.797 129.141 166.035 129.141C174.906 129.141 179.594 132.582 179.594 138.98V160.188C179.594 161.98 180.691 163.016 182.699 163.016C183.035 163.016 183.313 163.016 183.945 162.867V167.199ZM173.891 148.402C171.969 149.289 170.723 149.562 164.664 150.387C158.539 151.273 155.984 153.215 155.984 156.996C155.984 160.652 158.602 162.785 163.078 162.785C166.457 162.785 169.266 161.684 171.613 159.551C173.32 157.969 173.891 156.809 173.891 154.863V148.402Z"/><path stroke="gray" stroke-dasharray="8.63 8.63" stroke-miterlimit="10" stroke-width="2.294" d="M216.09 83.121C223.164 97.0195 226.859 112.394 226.859 128C226.859 182.574 182.574 226.859 128 226.859C73.4257 226.859 29.1406 182.574 29.1406 128C29.1406 73.4257 73.4257 29.1406 128 29.1406C145.551 29.1406 162.762 33.8086 177.883 42.6367"/></g><defs><clipPath id="clip0_101_404"><rect width="200" height="200" fill="#fff" transform="translate(28 28)"/></clipPath></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "C#",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"></path>
              </svg>),
      },
      {
        title: "Html",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"/><path fill="#EBEBEB" d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"/><path fill="#EBEBEB" d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "SQL",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><g clip-path="url(#clip0_7_147)"><path fill="#fff" fill-rule="evenodd" d="M203.801 178.21C194.011 177.938 186.416 178.941 180.051 181.619C178.218 182.355 175.277 182.355 175.035 184.662C176.015 185.63 176.133 187.214 176.992 188.556C178.459 190.991 181.033 194.271 183.357 195.973L191.191 201.571C195.965 204.488 201.351 206.193 206.002 209.113C208.696 210.817 211.388 213.007 214.082 214.834C215.454 215.807 216.285 217.392 218 217.997V217.629C217.144 216.538 216.897 214.957 216.044 213.735L212.367 210.209C208.82 205.465 204.41 201.325 199.636 197.922C195.718 195.245 187.152 191.596 185.56 187.097L185.319 186.824C188.008 186.552 191.191 185.605 193.764 184.875C197.929 183.784 201.721 184.024 206.002 182.93L211.882 181.226V180.135C209.678 177.946 208.087 175.025 205.763 172.959C199.521 167.606 192.661 162.373 185.56 157.994C181.766 155.562 176.868 153.977 172.829 151.913C171.356 151.182 168.911 150.817 168.055 149.601C165.846 146.929 164.625 143.397 163.034 140.232L152.997 119.064C150.794 114.319 149.444 109.574 146.755 105.195C134.144 84.5124 120.431 71.9828 99.375 59.6932C94.8477 57.1382 89.4616 56.0393 83.7353 54.7032L74.5546 54.2124C72.5928 53.3616 70.6364 51.0493 68.9216 49.9531C61.9441 45.5739 43.9475 36.0847 38.8029 48.5897C35.4966 56.4974 43.7006 64.2824 46.4855 68.299C48.5708 71.0966 51.2597 74.2597 52.7332 77.4228C53.5563 79.4897 53.8307 81.682 54.6895 83.8717C56.6458 89.2243 58.4842 95.1878 61.0551 100.178C62.427 102.733 63.8675 105.413 65.5824 107.723C66.5619 109.086 68.2768 109.67 68.6417 111.859C66.9268 114.294 66.8089 117.94 65.8293 120.986C61.42 134.734 63.1349 151.766 69.377 161.888C71.3389 164.928 75.9622 171.622 82.2345 169.065C87.744 166.875 86.5148 159.941 88.1062 153.857C88.4766 152.399 88.2297 151.425 88.9623 150.449V150.722L93.9834 160.819C97.7781 166.78 104.391 172.986 109.897 177.125C112.833 179.315 115.16 183.089 118.831 184.425V184.057H118.59C117.854 182.966 116.751 182.475 115.772 181.624C113.569 179.435 111.121 176.757 109.406 174.325C104.267 167.513 99.7399 159.968 95.6983 152.183C93.7365 148.412 92.0216 144.275 90.4357 140.504C89.6949 139.043 89.6949 136.85 88.4739 136.125C86.6355 138.797 83.9466 141.115 82.5939 144.398C80.2672 149.628 80.0257 156.077 79.1697 162.769C78.6758 162.891 78.8953 162.769 78.6758 163.041C74.7631 162.071 73.4132 158.051 71.9453 154.648C68.274 146.01 67.6594 132.141 70.8422 122.164C71.6983 119.609 75.375 111.579 73.9071 109.146C73.1662 106.834 70.7242 105.498 69.3743 103.671C67.7829 101.359 66.0735 98.4409 64.9705 95.8859C62.0346 89.0689 60.5667 81.5293 57.3812 74.7151C55.9077 71.552 53.3396 68.2662 51.257 65.3486C48.9303 62.0628 46.3648 59.7505 44.5265 55.8593C43.9146 54.4959 43.0585 52.3309 44.0381 50.8693C44.2795 49.8959 44.7734 49.5059 45.7475 49.2878C47.3389 47.9244 51.8716 49.6532 53.463 50.3785C57.9903 52.2054 61.7849 53.907 65.5796 56.4592C67.2945 57.6754 69.1329 59.9877 71.3361 60.5985H73.9098C77.8279 61.4493 82.2317 60.8712 85.9002 61.9619C92.3893 64.0343 98.2637 67.0719 103.532 70.3604C119.567 80.4577 132.792 94.8143 141.725 111.971C143.193 114.769 143.805 117.324 145.155 120.244C147.729 126.208 150.912 132.289 153.477 138.132C156.051 143.85 158.498 149.694 162.17 154.438C164.008 156.993 171.35 158.329 174.654 159.668C177.104 160.759 180.896 161.741 183.105 163.077C187.264 165.632 191.427 168.552 195.342 171.35C197.298 172.806 203.423 175.849 203.787 178.276L203.801 178.21ZM78.9584 72.4873C77.267 72.4724 75.5809 72.6769 73.9427 73.0954V73.3681H74.1842C75.1637 75.315 76.8786 76.6538 78.1023 78.3581L80.9202 84.1989L81.1616 83.9262C82.8765 82.71 83.7353 80.7631 83.7353 77.8454C83 76.9947 82.8793 76.1412 82.2674 75.2904C81.5321 74.0743 79.9407 73.4635 78.9584 72.4928V72.4873Z" clip-rule="evenodd"/></g><defs><clipPath id="clip0_7_147"><rect width="180" height="180" fill="#fff" transform="translate(38 38)"/></clipPath></defs></svg>
                </g>
              </svg>),
      },
    ],
    Frameworks: [
      {
        title: "Angular",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#242938"/>
                  <path d="M34.25 61.125L127.325 28L222.85 60.6125L207.412 183.7L127.325 228L48.5375 184.275L34.25 61.125Z" fill="#E23237"/>
                  <path d="M222.85 60.6125L127.325 28V228L207.412 183.7L222.85 60.6125Z" fill="#B52E31"/>
                  <path d="M127.469 51.375L69.4688 180.375L91.1125 179.937L102.8 150.788H154.675L167.375 180.163L188.012 180.6L127.469 51.375ZM127.612 92.7875L147.237 133.769H110.5L127.669 92.7875H127.612Z" fill="white"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "React",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00D8FF" d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" clip-rule="evenodd"/></svg>
                </g>
              </svg>),
      },
      {
        title: "ThreeJs",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#242938"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M93.213 222.94L50 48L223.23 97.874L93.213 222.94Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M136.583 72.9419L158.174 160.438L71.6071 135.493L136.583 72.9419Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M115.103 147.36L104.379 103.895L147.387 116.241L115.103 147.36Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6509 60.4829L104.375 103.948L61.3669 91.6019L93.6509 60.4829Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M179.663 85.2598L190.387 128.725L147.379 116.379L179.663 85.2598Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M115.108 147.39L125.832 190.855L82.824 178.509L115.108 147.39Z" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linejoin="round"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "Bootstrap",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="url(#paint0_linear_158_100)" rx="60"/><g filter="url(#filter0_d_158_100)"><path fill="url(#paint1_linear_158_100)" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/><path stroke="#fff" stroke-width="2" d="M131.97 196.157C161.646 196.157 179.529 181.626 179.529 157.66C179.529 139.543 166.77 126.428 147.823 124.351V123.597C161.743 121.332 172.666 108.405 172.666 93.9689C172.666 73.3992 156.427 60 131.68 60H76V196.157H131.97ZM97.6533 77.2674H126.46C142.12 77.2674 151.013 84.2497 151.013 96.8935C151.013 110.387 140.67 117.935 121.917 117.935H97.6533V77.2674V77.2674ZM97.6533 178.89V134.071H126.266C146.76 134.071 157.393 141.619 157.393 156.339C157.393 171.058 147.05 178.89 127.523 178.89H97.6533V178.89Z"/></g><defs><filter id="filter0_d_158_100" width="137.529" height="170.157" x="59" y="47" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_158_100"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_158_100" mode="normal" result="shape"/></filter><linearGradient id="paint0_linear_158_100" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#9013FE"/><stop offset="1" stop-color="#6B11F4"/></linearGradient><linearGradient id="paint1_linear_158_100" x1="85.793" x2="148.541" y1="68.962" y2="175.084" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#F1E5FC"/></linearGradient></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "CSS",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#0277BD"/>
                  <path d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z" fill="#EBEBEB"/>
                  <path d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z" fill="#EBEBEB"/>
                  <path d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z" fill="#EBEBEB"/>
                  <path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill="white"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "jQuery",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                  <g transform="translate(0, 0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                      <rect width="256" height="256" rx="60" fill="url(#paint0_linear_7_245)"/>
                      <path d="M79.2383 68.7408C69.2524 83.3576 70.4962 102.373 78.1042 117.886L78.6637 118.991L79.0417 119.691C79.1117 119.827 79.1929 119.961 79.2648 120.093C79.3971 120.339 79.5294 120.575 79.6428 120.817L80.3705 122.089L80.7864 122.789L81.6313 124.135L82.0093 124.702C82.3874 125.307 82.8145 125.908 83.2342 126.501C83.2436 126.516 83.2568 126.533 83.2682 126.548C83.3343 126.643 83.4081 126.737 83.4572 126.832C83.8201 127.342 84.2133 127.845 84.5913 128.344L85.0109 128.888L86.0411 130.178L86.4343 130.658C86.9028 131.223 87.3817 131.781 87.8708 132.329L87.901 132.359C87.9199 132.383 87.9388 132.397 87.9577 132.421C88.4316 132.956 88.9181 133.479 89.417 133.99L89.8857 134.47L91.052 135.635L91.5283 136.096C92.0524 136.598 92.5849 137.091 93.1255 137.576L93.4279 137.84L94.8777 139.088L95.4788 139.576L96.6885 140.521L97.335 141.022L99.1836 142.373C99.2308 142.405 99.2724 142.439 99.3197 142.471C99.7544 142.774 100.195 143.067 100.637 143.36L101.208 143.747L103.272 145.033L103.843 145.36L105.393 146.244C105.676 146.399 105.966 146.547 106.249 146.694L107.357 147.261L107.612 147.386L108.066 147.609L109.823 148.437L110.196 148.626C110.874 148.927 111.557 149.216 112.245 149.493L112.744 149.694L114.677 150.423L114.919 150.51C115.633 150.762 116.352 151.002 117.074 151.229L117.594 151.387C118.35 151.614 119.059 151.885 119.819 152.03C168.109 161.02 182.14 122.494 182.14 122.494C170.359 138.126 149.447 142.246 129.635 137.659C128.884 137.47 128.156 137.249 127.423 137.028L126.871 136.839C126.157 136.616 125.446 136.379 124.743 136.134L124.45 136.026C123.821 135.799 123.195 135.563 122.573 135.317L122.044 135.105C121.363 134.832 120.687 134.546 120.017 134.247L119.613 134.066L117.904 133.253L117.413 133.011C116.969 132.788 116.528 132.559 116.089 132.325L115.207 131.852C114.673 131.56 114.145 131.258 113.623 130.947L113.088 130.644C112.392 130.229 111.704 129.794 111.024 129.359C110.835 129.236 110.653 129.106 110.466 128.981L108.997 127.987L108.525 127.647L107.136 126.626L106.519 126.153L105.266 125.155L104.707 124.702L103.147 123.379C103.094 123.331 103.034 123.284 102.958 123.233C102.403 122.736 101.856 122.226 101.318 121.713L100.856 121.26L99.6769 120.084L99.2157 119.611C98.7244 119.101 98.2424 118.582 97.7697 118.054C97.747 118.027 97.7206 118.003 97.6979 117.978C97.1983 117.421 96.7093 116.853 96.2311 116.277L95.8474 115.812L94.7889 114.483L94.4014 113.992L93.1822 112.338C82.1813 97.0558 78.2497 75.9802 87.0202 58.6699L79.2383 68.7408ZM110.237 56.4244C103.017 67.0094 103.408 81.1745 109.041 92.3682C109.983 94.2477 111.05 96.062 112.235 97.7987C113.317 99.377 114.517 101.258 115.953 102.524C116.473 103.091 117.017 103.658 117.573 104.237C117.713 104.382 117.857 104.52 118 104.666C118.54 105.201 119.092 105.724 119.656 106.233C119.679 106.252 119.7 106.274 119.724 106.293C120.36 106.858 121.009 107.406 121.673 107.938L122.112 108.285C122.772 108.805 123.447 109.306 124.134 109.79C124.152 109.805 124.171 109.82 124.191 109.834C124.493 110.047 124.805 110.249 125.113 110.453C125.261 110.552 125.4 110.656 125.548 110.748C126.041 111.071 126.541 111.383 127.047 111.684L127.259 111.809L128.582 112.565C128.737 112.654 128.895 112.731 129.054 112.814L129.999 113.302C130.047 113.327 130.094 113.345 130.139 113.368C130.776 113.689 131.417 113.992 132.073 114.285C132.213 114.347 132.356 114.404 132.5 114.464C133.024 114.691 133.553 114.911 134.088 115.12L134.768 115.374C135.251 115.553 135.736 115.725 136.224 115.89L136.881 116.103C137.575 116.324 138.261 116.6 138.985 116.723C176.269 123.014 184.879 93.7764 184.879 93.7764C177.12 105.155 162.095 110.588 146.058 106.35C145.349 106.161 144.645 105.953 143.947 105.726C143.733 105.66 143.524 105.59 143.312 105.537C142.817 105.374 142.325 105.201 141.836 105.019L141.168 104.766C140.633 104.577 140.104 104.341 139.581 104.114C139.437 104.051 139.293 103.995 139.152 103.929C138.494 103.641 137.845 103.334 137.205 103.008C136.876 102.844 136.553 102.672 136.229 102.501L135.666 102.207C135.25 101.978 134.839 101.742 134.432 101.498L134.137 101.309C133.634 101.008 133.136 100.698 132.644 100.379C132.492 100.28 132.345 100.19 132.194 100.073L131.226 99.4205C130.542 98.9365 129.871 98.4361 129.211 97.9196L128.757 97.5567C121.739 91.9126 116.174 84.2007 113.53 75.4548C110.757 66.3819 111.356 56.2032 116.176 47.9412L110.237 56.4244ZM136.303 47.2229C132.046 53.6042 131.629 61.5279 134.602 68.5745C137.717 76.054 144.1 81.923 151.549 84.7035C151.856 84.8206 152.164 84.9246 152.494 85.0305L152.903 85.1628C153.341 85.3026 153.778 85.4652 154.23 85.5521C174.818 89.6028 180.401 74.7932 181.887 72.6138C176.995 79.7871 168.775 81.509 158.689 79.0159C157.895 78.8174 157.016 78.5244 156.231 78.2485C155.244 77.8913 154.277 77.4819 153.334 77.0217C151.539 76.1415 149.837 75.0834 148.253 73.8632C139.208 66.8884 133.6 53.5853 139.49 42.7507" fill="white"/>
                      <path d="M90.8364 182.681L89.4415 187.626L90.8364 182.683V182.681ZM98.0116 193.414L96.4749 193.404L98.0116 193.414ZM97.6336 200.797L88.4246 200.831L97.6336 200.797ZM99.5615 193.425L98.0229 193.416L99.5615 193.425ZM98.4615 200.169L100.068 194.051L98.4615 200.169ZM132.353 171.992L129.366 186.042L132.353 171.992ZM124.669 171.992L122.401 182.489L124.669 171.992Z" fill="white"/>
                      <path d="M131.823 171.359H125.434C125.079 171.359 124.727 171.643 124.652 171.99L120.115 192.985C120.04 193.331 119.688 193.614 119.335 193.614H114.812C110.336 193.614 110.854 190.52 111.787 186.28L111.816 186.152L112.358 183.26L112.592 182.069L114.657 171.99C114.728 171.643 114.496 171.357 114.141 171.357H107.582C107.401 171.363 107.227 171.428 107.086 171.542C106.946 171.656 106.846 171.813 106.803 171.988L103.848 186.002C102.223 193.419 102.654 200.493 111.485 200.714L111.74 200.719H125.599C125.954 200.719 126.304 200.436 126.38 200.088L132.356 171.988C132.432 171.641 132.199 171.357 131.846 171.357L131.823 171.359ZM157.316 193.688C157.672 193.688 157.883 193.971 157.832 194.319L157.212 197.353L157.316 193.688ZM156.592 200.389L157.212 197.353L156.592 200.389ZM155.814 201.027L144.038 201.084L155.814 201.027Z" fill="white"/>
                      <path d="M140.223 189.783C140.218 189.45 140.596 188.879 140.951 188.879L140.153 188.866C139.775 192.484 140.223 189.783 140.223 189.783ZM144.62 201.082H144.497H144.62ZM157.316 193.688C157.672 193.688 157.883 193.971 157.832 194.319L157.11 197.846L157.316 193.688ZM147.644 201.092H147.618H147.644ZM146.075 201.08H145.985H146.075ZM145.597 201.082H145.446H145.597ZM145.13 201.082H144.998H145.13ZM146.003 201.08H145.616H146.003Z" fill="white"/>
                      <path d="M147.62 201.092L146.077 201.097L147.62 201.092ZM155.817 201.044L147.642 201.094L155.817 201.044ZM156.573 200.389L157.093 197.848L156.573 200.39V200.389ZM145.429 201.082H145.13H145.467H145.429ZM144.493 201.082H144.04H144.493ZM144.979 201.082H144.601H144.979ZM51.4903 189.858L52.4827 185.458L51.3486 190.486L51.2163 191.117L51.4922 189.855L51.4903 189.858ZM63.3721 171.287H56.3538C56.1724 171.294 55.9981 171.359 55.8563 171.473C55.7145 171.586 55.6126 171.741 55.5656 171.917L54.2349 177.776C54.2125 177.852 54.2088 177.932 54.224 178.01C54.2392 178.087 54.2729 178.16 54.3223 178.222C54.3716 178.284 54.4352 178.333 54.5075 178.365C54.5798 178.397 54.6588 178.411 54.7377 178.406H61.8108C62.1661 178.406 62.5177 178.122 62.5933 177.776L63.8786 171.903C63.9542 171.558 63.7274 171.274 63.3683 171.274L63.3721 171.287ZM61.8448 181.056L59.7656 190.579L61.8448 181.056ZM41.4572 212.612L47.245 212.658C45.5362 212.658 42.7142 212.626 41.4553 212.611L41.4572 212.612Z" fill="white"/>
                      <path d="M53.4561 181.056L52.4619 185.456L53.4561 181.056ZM61.3382 180.426H54.2632C54.0819 180.433 53.9076 180.498 53.7657 180.612C53.6239 180.725 53.5221 180.88 53.475 181.056L51.4903 189.856L51.2143 191.119L49.3242 200.103C49.2305 200.522 49.117 200.937 48.9839 201.345C48.9839 201.345 47.6608 205.277 45.4417 205.233L43.2396 205.192C43.059 205.197 42.8847 205.259 42.742 205.37C42.5992 205.481 42.4955 205.634 42.4458 205.808L40.9809 211.975C40.9577 212.051 40.9531 212.131 40.9673 212.208C40.9815 212.286 41.0142 212.359 41.0626 212.421C41.1109 212.483 41.1736 212.533 41.2453 212.566C41.3169 212.599 41.3954 212.614 41.4742 212.611L47.2638 212.658C52.8134 212.658 55.7376 209.582 57.6145 200.736L61.8674 181.078C61.943 180.733 61.7124 180.449 61.3571 180.449L61.3382 180.426ZM161.824 200.723C161.469 200.723 161.257 200.44 161.314 200.092L166.635 175.168L161.824 200.723ZM169.219 200.09L171.374 189.452L169.219 200.09Z" fill="white"/>
                      <path d="M161.391 200.408C161.348 200.234 161.373 199.808 161.448 199.462L163.973 187.63L161.312 200.092C161.236 200.44 161.467 200.723 161.822 200.723H162.469C162.114 200.723 161.433 200.581 161.391 200.408ZM168.801 200.581C168.608 200.657 168.158 200.723 167.803 200.723H168.449C168.63 200.716 168.803 200.65 168.943 200.536C169.083 200.422 169.181 200.265 169.224 200.09L169.353 199.459C169.283 199.806 168.975 200.504 168.786 200.581H168.801ZM170.294 194.771L171.245 190.076L170.294 194.771ZM191.29 176.837L191.583 178.047C191.665 178.393 191.44 178.674 191.086 178.676" fill="white"/>
                      <path d="M169.347 199.459L170.292 194.771L169.347 199.459ZM191.001 175.574L191.29 176.814L191.001 175.574ZM171.245 190.076L171.506 188.821L172.521 184.067L171.372 189.45L171.245 190.074V190.076ZM166.722 174.758L166.501 175.797L163.975 187.63L166.637 175.168L166.722 174.76V174.758Z" fill="white"/>
                      <path d="M191.585 178.047L191.292 176.837L190.858 174.947C190.283 172.716 188.597 171.425 184.934 171.425L168.073 171.414C167.892 171.42 167.719 171.485 167.578 171.599C167.438 171.713 167.338 171.87 167.295 172.045L167.034 173.28L166.656 175.145L161.469 199.44C161.393 199.788 161.369 200.196 161.412 200.385C161.456 200.574 162.136 200.701 162.49 200.701H167.82C168.175 200.701 168.623 200.636 168.818 200.559C169.013 200.481 169.298 199.803 169.385 199.436L171.408 189.429L173.572 179.29C173.647 178.944 173.997 178.663 174.351 178.661L191.122 178.653C191.476 178.653 191.701 178.37 191.619 178.024L191.585 178.047ZM213.177 167.097L211.886 167.102H206.518C206.321 167.114 206.13 167.168 205.955 167.26C205.781 167.352 205.629 167.48 205.508 167.635L193.638 185.025C193.438 185.318 193.209 185.275 193.128 184.931L192.254 181.099C192.207 180.924 192.106 180.768 191.964 180.655C191.822 180.542 191.648 180.477 191.466 180.47H183.836C183.48 180.47 183.269 180.748 183.367 181.09L186.769 193.07C186.867 193.41 186.873 193.971 186.788 194.317L185.276 200.115C185.25 200.189 185.243 200.268 185.256 200.346C185.269 200.424 185.301 200.497 185.349 200.559C185.397 200.621 185.46 200.67 185.532 200.702C185.604 200.734 185.683 200.747 185.762 200.74H193.322C193.678 200.74 194.041 200.457 194.128 200.116L195.64 194.319C195.758 193.911 195.944 193.525 196.188 193.178L215.479 167.598C215.693 167.314 215.578 167.084 215.222 167.087L213.2 167.101L213.177 167.097ZM152.547 182.099C152.502 182.477 152.147 182.761 151.791 182.761H142.113C141.779 182.761 141.609 182.534 141.66 182.25L141.667 182.199L141.711 182.035C142.656 179.578 144.518 177.965 148.054 177.965C152.037 177.965 152.814 179.912 152.544 182.099H152.547ZM149.708 170.932C137.29 170.932 134.347 178.47 132.697 186.078C131.045 193.833 131.188 201.086 144.038 201.086H146.075L147.644 201.08L155.821 201.031C156.001 201.023 156.172 200.957 156.311 200.843C156.45 200.729 156.548 200.573 156.59 200.398L157.832 194.327C157.904 193.979 157.672 193.695 157.316 193.695H145.763C141.17 193.695 139.804 192.474 140.306 188.885H158.774C159.076 188.879 159.35 188.696 159.458 188.409C159.477 188.358 159.496 188.303 159.503 188.248C162.244 177.909 161.458 170.94 149.712 170.94L149.708 170.932ZM91.0103 182.058L90.8364 182.676C90.8364 182.678 89.4415 187.62 89.4415 187.62L88.0465 192.561C87.9886 192.736 87.8791 192.888 87.7327 192.999C87.5862 193.109 87.4096 193.173 87.2262 193.181H79.8431C74.2444 193.181 72.8815 188.802 74.2444 182.343C75.6053 175.737 78.2799 171.629 83.7898 171.214C91.3203 170.647 92.8249 175.943 91.0103 182.056V182.058ZM96.0723 192.803C96.0723 192.803 99.5502 184.354 100.344 179.472C101.421 172.937 98.1515 163.462 85.5156 163.462C72.9515 163.462 67.4964 172.508 65.4153 182.364C63.3361 192.268 66.0617 200.956 78.5521 200.888L97.6165 200.818C97.7993 200.809 97.9749 200.744 98.1194 200.632C98.2639 200.519 98.3701 200.365 98.4236 200.19L100.03 194.07C100.056 193.996 100.063 193.916 100.051 193.839C100.039 193.761 100.007 193.688 99.9591 193.626C99.9113 193.563 99.8487 193.514 99.7769 193.482C99.7052 193.45 99.6266 193.436 99.5483 193.442L96.473 193.423C96.1705 193.421 96.0004 193.227 96.0345 192.97C96.042 192.922 96.0534 192.875 96.0723 192.826V192.803Z" fill="white"/>
                      <path d="M158.267 187.15C158.267 187.384 158.078 187.573 157.844 187.573C157.609 187.573 157.42 187.384 157.42 187.15C157.42 186.915 157.609 186.726 157.844 186.726C158.078 186.726 158.267 186.915 158.267 187.15Z" fill="white"/>
                      <defs>
                      <linearGradient id="paint0_linear_7_245" x1="0" y1="0" x2="256" y2="256" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF5C00"/>
                      <stop offset="1" stop-color="#FF0F00"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </g>
                </svg>),
      },
      {
        title: "Framermotion",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path>
              </svg>),
      },
      {
        title: "Saas",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#CD6799" rx="60"/><g clip-path="url(#clip0_137_201)"><path fill="#fff" d="M200.107 139.163C193.133 139.199 187.073 140.879 181.998 143.361C180.136 139.674 178.274 136.388 177.945 133.978C177.58 131.167 177.142 129.451 177.58 126.092C178.018 122.733 179.99 117.951 179.953 117.586C179.917 117.22 179.515 115.505 175.499 115.468C171.483 115.432 168.015 116.235 167.613 117.294C167.211 118.352 166.445 120.762 165.934 123.245C165.24 126.896 157.901 139.93 153.703 146.757C152.352 144.092 151.184 141.755 150.928 139.893C150.563 137.082 150.125 135.366 150.563 132.007C151.001 128.648 152.973 123.865 152.936 123.5C152.9 123.135 152.498 121.419 148.482 121.383C144.466 121.346 140.997 122.149 140.596 123.208C140.194 124.267 139.756 126.75 138.916 129.159C138.077 131.569 128.329 153.329 125.773 158.951C124.459 161.835 123.327 164.135 122.524 165.705C122.524 165.705 122.487 165.815 122.378 165.997C121.684 167.348 121.282 168.078 121.282 168.078C121.282 168.078 121.282 168.078 121.282 168.115C120.735 169.101 120.15 170.013 119.858 170.013C119.639 170.013 119.238 167.385 119.931 163.807C121.392 156.249 124.86 144.493 124.824 144.092C124.824 143.873 125.481 141.828 122.56 140.769C119.712 139.71 118.69 141.463 118.434 141.463C118.179 141.463 117.996 142.084 117.996 142.084C117.996 142.084 121.173 128.867 111.936 128.867C106.167 128.867 98.2081 135.183 94.2651 140.879C91.7824 142.23 86.4885 145.114 80.8295 148.217C78.6755 149.422 76.4484 150.627 74.3673 151.759C74.2213 151.613 74.0753 151.43 73.9292 151.284C62.7573 139.345 42.0928 130.912 42.969 114.884C43.2976 109.042 45.3056 93.7083 82.655 75.0883C113.396 59.9368 137.858 64.1354 142.093 73.4454C148.153 86.7349 128.986 111.415 97.2224 114.993C85.1012 116.344 78.7485 111.671 77.1421 109.919C75.4626 108.093 75.2071 107.984 74.5864 108.349C73.5641 108.896 74.2213 110.539 74.5864 111.488C75.5356 113.971 79.4422 118.352 86.0504 120.506C91.892 122.405 106.094 123.464 123.29 116.819C142.531 109.371 157.573 88.6699 153.155 71.3278C148.738 53.7302 119.53 47.9251 91.892 57.7462C75.4626 63.5878 57.6459 72.7882 44.831 84.7634C29.6065 99.0022 27.1968 111.379 28.1826 116.563C31.724 134.964 57.0983 146.939 67.2479 155.811C66.7368 156.103 66.2622 156.359 65.8606 156.578C60.7857 159.097 41.4356 169.21 36.6163 179.908C31.1399 192.029 37.4926 200.718 41.6912 201.886C54.7251 205.501 68.1242 199.002 75.3166 188.268C82.509 177.534 81.6328 163.588 78.3104 157.199C78.2739 157.126 78.2374 157.053 78.1643 156.98C79.4787 156.213 80.8295 155.41 82.1439 154.643C84.7361 153.11 87.2917 151.686 89.4823 150.517C88.241 153.913 87.3283 157.965 86.8901 163.807C86.3425 170.671 89.1537 179.579 92.8412 183.084C94.4842 184.617 96.4192 184.654 97.6605 184.654C101.969 184.654 103.904 181.076 106.058 176.841C108.686 171.656 111.06 165.632 111.06 165.632C111.06 165.632 108.102 181.916 116.134 181.916C119.055 181.916 122.012 178.119 123.327 176.184C123.327 176.22 123.327 176.22 123.327 176.22C123.327 176.22 123.4 176.111 123.546 175.855C123.838 175.38 124.02 175.088 124.02 175.088C124.02 175.088 124.02 175.052 124.02 175.015C125.189 172.971 127.817 168.334 131.724 160.63C136.762 150.7 141.618 138.287 141.618 138.287C141.618 138.287 142.056 141.317 143.553 146.355C144.429 149.313 146.255 152.562 147.715 155.702C146.547 157.345 145.817 158.257 145.817 158.257C145.817 158.257 145.817 158.257 145.853 158.294C144.904 159.535 143.882 160.886 142.75 162.2C138.77 166.947 134.024 172.387 133.367 173.957C132.6 175.819 132.783 177.169 134.243 178.265C135.302 179.068 137.2 179.177 139.135 179.068C142.713 178.812 145.233 177.936 146.474 177.388C148.409 176.695 150.673 175.636 152.79 174.066C156.697 171.182 159.07 167.056 158.851 161.616C158.741 158.622 157.755 155.629 156.551 152.817C156.916 152.306 157.244 151.795 157.609 151.284C163.78 142.266 168.562 132.372 168.562 132.372C168.562 132.372 169 135.402 170.497 140.441C171.227 142.996 172.724 145.771 174.039 148.473C168.234 153.183 164.656 158.659 163.378 162.237C161.078 168.882 162.867 171.875 166.262 172.569C167.796 172.898 169.986 172.168 171.593 171.474C173.637 170.817 176.047 169.685 178.347 168.005C182.253 165.121 186.014 161.105 185.795 155.665C185.685 153.183 185.028 150.736 184.115 148.363C189.044 146.319 195.397 145.187 203.502 146.136C220.881 148.181 224.313 159.024 223.655 163.588C222.998 168.151 219.347 170.634 218.142 171.401C216.938 172.168 216.536 172.423 216.646 172.971C216.792 173.774 217.376 173.737 218.398 173.591C219.822 173.336 227.525 169.904 227.854 161.507C228.402 150.773 218.179 139.053 200.107 139.163ZM66.0431 184.362C60.2746 190.641 52.2425 193.015 48.7741 191.007C45.0501 188.852 46.5105 179.579 53.5933 172.934C57.9015 168.882 63.4509 165.121 67.1384 162.821C67.9781 162.31 69.2195 161.58 70.7164 160.667C70.9719 160.521 71.118 160.448 71.118 160.448C71.41 160.265 71.7021 160.083 71.9942 159.9C74.5864 169.393 72.1037 177.754 66.0431 184.362ZM108.029 155.811C106.021 160.704 101.823 173.226 99.2669 172.533C97.0763 171.948 95.7255 162.456 98.8288 153.073C100.399 148.363 103.721 142.741 105.656 140.55C108.796 137.045 112.264 135.877 113.104 137.301C114.163 139.163 109.271 152.744 108.029 155.811ZM142.677 172.387C141.837 172.825 141.034 173.117 140.669 172.898C140.413 172.752 141.034 172.168 141.034 172.168C141.034 172.168 145.379 167.494 147.095 165.377C148.08 164.135 149.249 162.675 150.49 161.032C150.49 161.178 150.49 161.361 150.49 161.507C150.49 167.093 145.087 170.853 142.677 172.387ZM169.402 166.289C168.781 165.851 168.891 164.391 170.972 159.827C171.775 158.038 173.674 155.045 176.923 152.16C177.288 153.329 177.544 154.46 177.507 155.519C177.471 162.566 172.432 165.194 169.402 166.289Z"/></g><defs><clipPath id="clip0_137_201"><rect width="200" height="149.909" fill="#fff" transform="translate(28 53)"/></clipPath></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "Flask",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#242938"/>
                  <path d="M89.7778 193.926C82.5397 188.233 74.8187 182.775 69.5426 175.089C58.4409 161.535 49.893 145.842 44.0494 129.352C40.5173 118.628 39.3076 107.132 34.7543 96.8229C29.9911 89.3355 35.5705 81.1506 43.772 78.7706C47.4235 78.0698 53.8439 74.6256 46.0938 77.0873C39.1456 82.1851 38.4732 72.46 45.598 71.8441C50.4604 71.1978 52.2503 67.2173 50.5875 63.634C45.368 60.2303 63.2441 56.4895 54.2496 51.4107C44.8797 41.3017 67.356 39.3557 61.8107 50.8365C60.4834 59.6647 77.5161 49.2184 73.5641 59.4131C77.5809 64.3089 88.6059 60.5274 88.3324 67.3958C94.1838 67.798 96.192 72.7214 101.685 73.0993C107.378 75.6702 117.698 77.6961 119.635 84.1113C113.987 88.5828 100.909 74.875 100.28 87.2525C101.986 105.537 101.552 124.373 108.242 141.785C111.406 152.328 119.077 160.628 126.004 168.839C132.633 176.881 141.611 182.543 150.762 187.31C158.79 191.096 167.444 193.607 176.193 195.182C179.741 192.468 186.006 182.378 191.542 186.633C191.804 191.414 180.555 196.627 191.012 196.098C197.153 194.246 201.412 200.848 206.469 194.893C211.128 200.411 225.833 191.367 222.518 202.647C218.036 205.539 211.498 203.791 207.009 207.769C199.606 204.072 193.713 211.078 185.518 210.192C176.417 211.822 167.158 212.48 157.931 212.494C142.794 211.298 127.336 210.794 112.936 205.524C104.824 203.167 96.9075 198.547 89.7778 193.926V193.926ZM102.562 199.465C110.483 202.891 118.229 206.501 126.91 207.59C140.683 209.506 154.906 212.452 168.728 209.765C162.472 206.94 156.005 210.865 149.772 207.745C142.298 209.353 134.276 207.335 126.678 206.341C118.036 202.492 108.711 199.846 100.619 194.849C90.5074 191.156 105.848 199.586 108.579 200.268C114.9 203.856 101.628 198.429 99.7569 196.938C94.4627 193.968 93.788 194.589 99.2327 197.605C100.329 198.246 101.413 198.919 102.562 199.465V199.465ZM87.4891 188.813C95.165 191.657 87.4552 183.416 83.9378 183.894C82.3794 181.191 77.9838 179.483 81.0845 178.03C75.507 179.967 75.2418 170.667 72.6201 171.996C66.7196 170.133 70.3236 163.532 63.2951 159.479C62.6535 155.208 56.3119 151.504 54.2892 145.062C53.3959 141.764 47.1246 132.292 50.977 141.107C54.2572 149.593 60.0284 156.86 64.8312 164.118C68.5605 171.029 72.9641 178.252 79.7559 182.564C82.0454 184.76 84.2559 188.125 87.4891 188.813ZM65.3763 164.535C65.6442 163.376 66.7801 167.044 65.3763 164.535V164.535ZM96.6817 192.222C98.3815 191.461 94.2375 191.263 96.6817 192.222V192.222ZM100.849 193.742C100.417 191.643 98.9464 194.915 100.849 193.742V193.742ZM106.064 195.917C108.547 193.553 102.237 194.427 106.064 195.917V195.917ZM115.004 200.9C116.513 198.669 110.174 200.058 115.004 200.9V200.9ZM97.8376 188.933C101.694 186.438 92.8561 188.899 97.8376 188.933V188.933ZM101.75 190.884C101.641 189.565 100.356 191.475 101.75 190.884V190.884ZM121.306 203.09C124.449 205.074 139.663 207.438 130.137 203.903C128.543 204.239 112.472 199.358 121.306 203.09ZM90.2609 178.911C89.9552 177.588 85.3813 177.451 90.2609 178.911V178.911ZM99.3646 184.217C101.734 182.565 94.4471 182.942 99.3646 184.217V184.217ZM107.022 188.912C110.422 187.63 101.507 187.624 107.022 188.912V188.912ZM86.5564 174.877C90.2453 177.706 101.433 175.239 92.2057 173.188C88.0058 170.949 78.5402 169.417 84.9922 174.538L86.5564 174.877L86.5564 174.877ZM112.209 190.533C113.745 187.915 105.765 189.038 112.209 190.533V190.533ZM104.414 184.338C113.434 186.89 96.8286 178.634 102.188 183.399L103.376 183.937L104.414 184.338L104.414 184.338ZM120.042 193.371C128.585 193.453 112.326 192.193 120.042 193.371V193.371ZM83.2695 169.934C82.9359 168.343 81.1614 170.068 83.2695 169.934V169.934ZM134.492 201.477C134.72 198.603 131.705 203.615 134.492 201.477V201.477ZM97.8478 178.862C97.3311 177.349 95.1786 178.8 97.8478 178.862V178.862ZM84.0797 168.936C88.984 168.641 77.3653 166.775 84.0797 168.936V168.936ZM67.7695 158.393C67.1591 156.042 62.4328 154.167 67.7695 158.393V158.393ZM110.588 185.567C109.689 184.542 110.165 185.791 110.588 185.567V185.567ZM137.239 201.922C137.154 200.356 135.788 202.514 137.239 201.922V201.922ZM108.229 183.131C108.709 181.114 104.047 182.52 108.229 183.131V183.131ZM88.374 170.548C92.0226 170.157 82.5292 168.081 88.374 170.548V170.548ZM121.96 191.418C127.646 189.165 116.419 190.318 121.96 191.418V191.418ZM104.49 179.559C111.043 180.404 96.6934 175.102 103.052 179.084L104.49 179.559L104.49 179.559V179.559ZM127.264 193.562C133.382 189.904 131.365 202.126 137.644 194.594C143.837 190.072 132.295 200.185 139.928 195.401C145.448 191.709 153.601 197.151 158.752 198.926C162.456 198.744 166.056 202.129 169.854 200.07C177.163 198.101 155.56 197.15 161.223 193.657C154.534 195.603 149.593 191.336 146.302 187.052C138.799 185.319 130.125 181.484 126.381 174.845C124.854 172.352 128.586 175.196 125.063 171.121C120.542 167.1 118.285 162.536 115.25 157.648C111.624 155.714 111.202 150.021 110.836 157.457C110.864 152.764 106.458 149.605 105.383 150.918C105.364 146.399 110.098 148.664 106.784 145.32C106.071 140.636 103.722 135.754 103.016 130.465C101.919 127.916 102.861 122.456 99.2719 128.227C97.9643 134.327 98.8379 120.732 100.871 125.215C103.541 120.64 99.9132 121.178 99.7646 121.813C101.503 117.954 100.865 112.479 99.311 114.567C100.237 110.476 100.775 99.5116 97.9243 101.455C99.6521 97.1768 101.201 81.88 93.7005 87.7122C90.6607 87.7549 85.3966 88.8156 82.9083 90.0531C90.7102 94.3538 82.1235 91.6063 78.9476 90.9227C78.5338 94.9021 75.3881 93.181 71.4582 93.22C77.7352 93.9966 68.4016 99.6398 64.8007 97.4478C60.1241 99.6829 68.8367 105.262 64.8945 106.987C65.379 109.588 57.73 106.048 58.3307 112.054C53.7907 110.144 57.7056 119.178 59.9769 116.123C67.6987 118.213 65.4129 122.977 65.6095 127.503C64.3514 130.141 59.3979 121.304 64.5063 121.714C60.4762 115.167 60.0483 119.347 56.6994 122.389C55.9203 122.609 65.2417 126.716 59.392 128.747C64.5385 129.541 64.6849 134.044 65.7326 136.894C68.8259 140.116 68.1928 133.337 71.8941 137.208C69.5519 133.759 59.4879 127.489 67.5908 129.5C67.5475 126.028 66.1253 123.229 68.6078 123.297C71.0662 118.845 66.0331 134.274 71.5744 128.616C73.1083 127.946 73.4883 124.158 76.2455 128.973C80.2501 132.913 77.692 135.768 72.0429 132.16C73.0536 135.589 79.5999 136.814 78.3697 142.176C79.6738 146.891 81.4985 145.155 83.0889 144.882C84.3365 149.464 85.045 146.095 85.1042 143.914C90.8167 145.137 89.4786 148.514 91.266 150.873C95.2024 152.65 85.6317 138.829 92.3898 146.717C99.5 153.137 95.0564 155.817 88.6756 154.788C92.7141 154.462 94.0165 160.248 99.0679 160.045C103.674 162.236 106.793 170.653 98.8531 167.149C96.0992 164.666 86.3536 161.603 94.3135 166.326C101.665 169.73 107.504 171.767 114.595 176.04C119.669 179.663 121.861 183.812 123.785 184.633C119.52 186.67 110.932 183.007 117.309 181.884C113.332 181.16 108.858 179.148 112.668 184.104C115.907 186.809 124.145 186.522 125.622 186.828C124.37 189.587 122.222 189.806 125.673 190.02C121.823 192.072 126.907 192.389 127.264 193.562H127.264ZM119.391 171.328C117.048 168.878 116.443 164.289 118.975 168.282C120.273 168.803 123.135 175.78 119.391 171.328H119.391ZM145.032 187.615C146.493 187.52 145.074 188.725 145.032 187.615V187.615ZM115.692 165.321C115.602 161.617 116.539 168.177 115.692 165.321V165.321ZM113.144 161.892C110.197 156.199 116.858 163.504 113.144 161.892V161.892ZM82.2613 140.577C83.9924 140.115 83.113 143.538 82.2613 140.577V140.577ZM106.84 153.899C107.903 149.907 108.089 157.249 106.84 153.899V153.899ZM89.4758 141.826C88.2518 139.623 92.0362 143.892 89.4758 141.826V141.826ZM104.378 146.603C101.586 140.348 106.354 143.186 104.995 147.628L104.378 146.603ZM78.6793 129.464C77.4313 127.413 75.3669 121.392 76.0315 119.554C76.6327 122.547 82.3966 132.435 78.8588 123.65C74.9493 116.286 83.5321 126.041 84.415 127.877C84.8261 129.705 82.0029 127.378 83.9158 131.663C80.4273 126.785 81.8564 134.357 78.6793 129.464V129.464ZM70.7371 123.992C71.064 119.221 72.5552 127.263 70.7371 123.992V123.992ZM74.3096 125.221C76.0143 121.621 77.2002 130.241 74.3096 125.221V125.221ZM65.7158 118.573C62.7589 115.635 60.6191 112.927 65.8542 116.75C67.8713 116.829 61.3725 110.59 66.34 114.769C71.5634 115.721 68.9193 123.333 65.7158 118.573ZM70.23 118.455C71.9472 116.754 71.1416 120.131 70.23 118.455V118.455ZM73.0076 119.346C70.4043 114.466 76.1672 121.392 73.0076 119.346V119.346ZM67.4859 114.069C58.8899 106.419 78.2873 118.069 68.8902 115.487L67.4858 114.069L67.4859 114.069V114.069ZM92.1147 128.379C88.3949 126.149 91.1289 112.677 92.3975 121.891C96.0137 120.721 92.1978 126.649 94.895 126.594C94.47 130.334 93.2633 131.679 92.1147 128.379ZM101.224 133.763C101.589 129.703 101.992 136.539 101.224 133.763V133.763ZM99.642 132.199C100.052 130.465 99.6844 134.242 99.642 132.199V132.199ZM69.1721 111.555C63.6498 103.936 85.2215 119.262 72.7091 113.488C71.4016 113.146 69.8285 113.024 69.1721 111.555ZM86.7142 120.856C86.1916 114.441 87.8813 121.919 86.714 120.856L86.7142 120.856ZM100.033 129.4C101.063 125.745 100.11 131.817 100.033 129.4V129.4ZM70.0181 108.647C73.3002 107.945 83.6198 114.412 74.1431 110.494C73.0902 109.329 70.8454 109.858 70.0181 108.647ZM98.2029 122.695C98.5537 116.135 100.162 118.776 98.215 123.634L98.203 122.695L98.2029 122.695H98.2029ZM72.4613 106.365C73.7986 104.403 68.9113 97.4957 73.1657 103.887C75.0041 105.348 78.4884 106.334 75.4121 106.949C80.2503 111.217 74.232 108.105 72.4613 106.365V106.365ZM96.8088 120.646C97.7327 113.173 97.6236 125.024 96.8088 120.646V120.646ZM69.6683 99.4626C70.6897 99.0261 70.2077 100.824 69.6683 99.4626V99.4626ZM76.0192 103.243C77.6536 99.813 79.0343 107.068 76.0192 103.243V103.243ZM93.9334 113.208C93.9161 111.891 94.2714 115.124 93.9334 113.208V113.208ZM92.8957 110.911C90.4093 104.777 95.2085 114.159 92.8957 110.911V110.911ZM91.369 106.889C90.9517 104.354 92.7875 110.073 91.369 106.889L91.369 106.889ZM93.8536 102.85C92.1474 99.8432 96.0083 89.5998 96.4391 95.9527C94.6382 100.903 95.9196 103.672 97.1759 97.0325C99.4959 91.8072 96.6747 107.344 93.8536 102.85L93.8536 102.85V102.85ZM96.407 87.6163C97.1507 86.703 96.572 88.7167 96.407 87.6163V87.6163ZM92.1429 171.638C91.1316 170.755 92.27 172.2 92.1429 171.638V171.638ZM100.927 176.082C105.813 177.335 105.788 175.321 101.372 174.723C98.9969 172.513 91.5019 170.17 98.2103 174.449C98.6546 175.574 100.058 175.548 100.927 176.082V176.082ZM83.5787 164.559C86.2706 166.566 93.7181 170.248 87.4135 165.323C89.5391 162.853 83.345 161.539 85.3997 159.887C80.1734 156.689 81.2769 156.973 84.9384 157.074C78.6574 154.266 85.8451 154.476 85.5066 153.038C83.0847 152.559 73.4769 148.767 79.1291 153.349C73.3833 150.42 77.7599 154.441 76.0232 154.016C70.1477 152.413 81.2557 158.49 75.0901 156.982C78.4608 159.653 84.163 163.824 76.5152 159.809C75.5075 161.259 81.988 163.458 83.5787 164.559ZM92.7659 169.837C103.937 173.436 87.2893 165.439 92.7659 169.837V169.837ZM139.795 198.327C139.939 196.111 138.269 200.218 139.795 198.327V198.327ZM144.629 200.362C147.206 197.864 144.734 204.34 148.9 199.75C148.945 196.465 148.771 194.524 144.113 198.515C142.829 199.227 142.256 202.255 144.629 200.362V200.362ZM67.8987 152.174C67.1072 149.062 62.3506 149.078 67.8987 152.174V152.174ZM73.0602 155.556C71.1435 152.378 66.2214 152.679 73.0602 155.556V155.556ZM102.424 173.265C105.291 175.811 115.592 175.133 105.907 173.578C104.472 171.457 96.798 171.968 102.424 173.265ZM142.791 198.194C147.203 194.492 138.515 199.846 142.791 198.194V198.194ZM151.967 204.5C151.995 203.312 150.066 205.021 151.967 204.5V204.5ZM151.982 202.837C156.868 197.66 147.247 203.143 151.982 202.837H151.982ZM55.2036 141.545C51.039 135.603 52.6148 132.932 48.5987 128.081C47.8384 124.371 41.7091 115.951 45.4285 124.871C48.8352 130.087 49.8476 138.164 55.2036 141.545V141.545ZM150.449 201.191C159.438 195.381 146.759 198.66 150.449 201.191V201.191ZM157.311 203.88C161.813 200.014 154.464 203.071 157.311 203.88V203.88ZM66.3687 145.606C67.6571 143.689 63.0414 145.36 66.3687 145.606V145.606ZM155.878 202.044C160.237 199.234 154.874 199.665 155.088 202.303L155.878 202.044H155.878ZM96.7253 164.76C96.5755 162.862 94.4236 164.921 96.7253 164.76V164.76ZM100.381 166.863C99.2191 164.514 98.5947 167.232 100.381 166.863V166.863ZM162.872 203.943C168.456 199.915 159.487 203.172 161.7 204.706L162.872 203.943ZM160.734 202.91C165.283 199.098 155.931 204.599 160.734 202.91V202.91ZM171.659 210.185C174.713 208.14 167.948 209.523 171.659 210.185V210.185ZM69.1698 144.223C73.2638 145.141 85.5304 154.306 78.2936 144.857C74.5872 143.76 76.8101 134.7 73.0295 136.304C75.567 140.543 75.1172 142.347 69.7896 139.675C63.0937 136.406 66.0267 141.294 67.3353 142.642C65.552 143.047 69.6942 144.189 69.1698 144.223V144.223ZM50.5177 129.493C51.2506 126.462 43.7691 112.816 46.9848 122.656C48.1456 124.717 48.0276 128.623 50.5177 129.493ZM84.7523 150.599C82.6442 148.836 84.6521 150.35 84.7523 150.599V150.599ZM89.9437 151.808C89.941 148.596 84.2054 150.504 89.9437 151.808V151.808ZM134.931 180.168C134.073 177.974 131.539 180.117 134.931 180.168L134.931 180.168ZM137.091 181.746C136.772 180.518 135.845 181.983 137.091 181.746V181.746ZM154.922 192.977C156.637 191.71 152.782 192.816 154.922 192.977V192.977ZM59.8346 131.872C64.7399 129.972 54.5789 130.517 59.8346 131.872V131.872ZM130.97 176.688C130.916 173.512 127.843 177.475 130.97 176.688V176.688ZM57.8965 127.355C61.0474 126.291 54.9816 126.654 57.8965 127.355V127.355ZM67.0422 131.786C66.9851 130.742 66.0748 132.181 67.0422 131.786V131.786ZM178.593 200.19C182.645 199.369 191.878 202.252 193.371 199.116C188.45 198.996 176.347 195.644 175.774 199.916L176.852 200.085L178.593 200.19V200.19ZM69.949 132.518C70.0194 129.3 67.4396 132.398 69.949 132.518V132.518ZM45.9025 115.838C44.8104 109.706 41.749 114.91 45.9025 115.838V115.838ZM51.6367 117.279C51.7071 115.31 46.3882 115.507 51.6367 117.279V117.279ZM54.9136 118.888C53.9664 118.121 54.1722 119.858 54.9136 118.888V118.888ZM75.5326 132.115C76.5033 131.224 73.2345 131.455 75.5326 132.115V132.115ZM52.731 115.259C52.1768 110.628 46.0896 114.565 52.731 115.259V115.259ZM40.975 107.631C40.8078 105.493 39.8294 108.437 40.975 107.631V107.631ZM42.7237 106.31C42.4384 103.776 41.2223 106.632 42.7237 106.31V106.31ZM52.3855 112.077C56.4711 110.472 44.9437 108.758 51.5507 111.774L52.3855 112.077ZM181.694 191.949C184.309 189.552 178.371 191.208 181.694 191.949V191.949ZM197.316 200.047C198.364 196.947 194.677 200.455 197.316 200.047V200.047ZM53.3729 107.013C53.8033 104.015 50.1339 107.608 53.3729 107.013V107.013ZM39.6265 97.8031C38.888 93.5698 38.989 86.1392 46.0524 88.6503C36.6239 90.5222 52.5779 100.369 50.5632 92.5946C54.5277 92.7887 58.3186 90.2516 56.2381 94.1018C64.0492 93.2391 69.4646 86.4658 77.0096 87.4149C82.8868 86.6372 89.3127 86.0473 95.6461 83.6816C100.853 83.3064 105.866 77.7 103.012 74.3769C95.9106 73.7761 88.4772 74.6646 80.6283 76.2247C71.9308 78.0327 64.0306 81.468 55.255 82.9425C46.7013 84.0916 56.9755 86.1084 54.5253 86.5577C50.0619 88.1064 59.8484 89.1507 53.9467 90.7834C50.3019 90.0904 46.5082 88.838 48.0651 84.9971C39.8714 86.0604 32.6715 89.461 39.145 97.7992L39.6265 97.8029L39.6265 97.8026V97.8031ZM59.3703 87.7476C61.2914 80.6703 69.6628 93.5714 62.5192 88.6876C61.6659 88.0491 60.2626 87.5281 59.3703 87.7476ZM59.7441 84.3163C62.5168 82.2507 61.218 85.4744 59.7441 84.3163V84.3163ZM63.2648 84.3722C63.5151 81.1156 71.3244 86.0963 64.5525 85.5446L63.2648 84.3722ZM68.0809 82.4358C69.8396 80.3808 68.5864 84.2637 68.0809 82.4358V82.4358ZM69.3129 81.6108C72.2414 78.0921 85.8973 79.3651 75.9017 81.2677C73.2225 79.2507 71.1688 82.457 69.3129 81.6108ZM87.1342 78.8637C86.6887 69.2521 95.988 82.2793 87.1342 78.8637V78.8637ZM92.1909 78.836C94.0397 73.9917 99.3652 76.8921 93.0464 77.8626C93.1836 78.3781 92.8611 80.3635 92.1909 78.836ZM51.3789 104.527C56.9028 101.144 45.5148 101.592 51.3789 104.527V104.527ZM55.4632 105.661C57.3999 103.602 51.255 104.826 55.4632 105.661V105.661ZM43.429 97.1207C46.5853 94.696 39.6939 96.1988 43.429 97.1207V97.1207ZM206.536 199.161C206.628 196.348 204.124 200.428 206.536 199.161V199.161ZM189.963 187.85C190.434 184.612 187.833 188.133 189.963 187.85V187.85ZM211.094 200.251C215.507 200.266 224.465 198.881 214.863 198.885C213.356 199.12 206.084 199.07 211.094 200.251L211.094 200.251V200.251ZM59.0559 103.676C62.6273 103.431 64.6436 99.7368 58.3651 99.9491C48.6345 98.9417 66.9503 103.281 57.1169 102.04C55.7955 102.915 58.9791 103.918 59.0559 103.676ZM62.2013 105.268C61.8284 102.975 61.0969 106.487 62.2013 105.268V105.268ZM65.9324 95.3192C67.4823 93.3969 63.7878 94.8053 65.9324 95.3192V95.3192ZM54.0548 75.4651C60.4288 73.2967 69.1451 70.8601 72.1547 76.5327C69.0918 72.8463 70.9186 69.2172 73.8115 74.6071C77.9022 80.0605 79.95 72.1267 77.2894 70.2976C80.3214 74.0648 83.7699 75.845 79.3194 70.5357C84.1556 64.7182 69.6358 71.2975 66.3356 71.2312C64.7477 71.9439 49.942 75.0071 54.0548 75.4651V75.4651ZM57.7903 68.3109C61.4254 65.5672 70.3626 69.9429 64.6277 65.5842C64.067 65.0889 52.0682 68.8895 57.7903 68.3109V68.3109ZM71.0429 68.858C75.2974 68.9666 69.2078 63.1426 74.2775 65.7816C73.4449 63.0616 68.375 62.5524 65.8963 61.4656C64.4944 63.9525 68.7499 68.8914 71.0429 68.858ZM60.1141 56.8279C61.5859 54.8327 57.5346 57.8395 60.1141 56.8279V56.8279ZM65.5306 58.1244C72.3867 57.215 63.783 55.1719 64.1491 58.0513L65.5306 58.1244V58.1244V58.1244ZM55.4168 50.2106C50.5894 43.9088 64.4954 51.2699 59.5908 44.6717C55.4627 41.3845 51.4959 48.3709 55.4168 50.2106ZM117.369 83.5798C119.583 79.6548 108.228 78.2891 115.877 82.1887C116.582 82.4241 116.422 83.8513 117.369 83.5798Z" fill="white"/>
                  </svg>
                </g>
              </svg>)
      },
      {
        title: "Django",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#092E20"/>
                  <path d="M112.689 51H141.304V183.45C126.625 186.237 115.848 187.352 104.143 187.352C69.2093 187.351 51 171.559 51 141.271C51 112.098 70.3253 93.1471 100.24 93.1471C104.885 93.1471 108.415 93.5175 112.689 94.6323V51ZM112.689 117.671C109.345 116.558 106.558 116.186 103.028 116.186C88.5346 116.186 80.1725 125.105 80.1725 140.712C80.1725 155.95 88.163 164.311 102.842 164.311C105.999 164.311 108.602 164.125 112.689 163.569V117.671Z" fill="white"/>
                  <path d="M186.826 95.1893V161.522C186.826 184.378 185.154 195.34 180.137 204.817C175.491 213.923 169.359 219.682 156.724 226L130.153 213.364C142.788 207.419 148.92 202.218 152.821 194.225C156.91 186.05 158.212 176.573 158.212 151.675V95.1893H186.826ZM158.212 51.1519H186.826V80.5102H158.212V51.1519Z" fill="white"/>
                  </svg>
                </g>
              </svg>)
      },
      {
        title: ".Net",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#512BD4" rx="60"/><path fill="#fff" d="M24.0522 168.943C21.8155 168.943 19.9143 168.212 18.3486 166.749C16.7829 165.248 16 163.466 16 161.402C16 159.301 16.7829 157.5 18.3486 155.999C19.9143 154.499 21.8155 153.748 24.0522 153.748C26.3262 153.748 28.246 154.499 29.8118 155.999C31.4147 157.5 32.2162 159.301 32.2162 161.402C32.2162 163.466 31.4147 165.248 29.8118 166.749C28.246 168.212 26.3262 168.943 24.0522 168.943Z"/><path fill="#fff" d="M113.467 167.705H98.9285L60.625 108.387C59.6558 106.886 58.8539 105.328 58.2205 103.715H57.8848C58.1831 105.441 58.3322 109.137 58.3322 114.802V167.705H45.4707V87H60.96L97.9781 144.912C99.5439 147.314 100.55 148.964 100.998 149.865H101.221C100.849 147.726 100.662 144.106 100.662 139.002V87H113.467V167.705Z"/><path fill="#fff" d="M176.098 167.705H131.084V87H174.309V98.3688H144.393V121.218H171.961V132.53H144.393V156.393H176.098V167.705Z"/><path fill="#fff" d="M240.071 98.3688H217.033V167.705H203.724V98.3688H180.742V87H240.071V98.3688Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Spring",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#5FB832" d="M209.545 171.821C184.93 204.618 132.347 193.547 98.6353 195.139C98.6353 195.139 92.6673 195.471 86.6563 196.461C86.6563 196.461 88.9292 195.491 91.8279 194.492C115.506 186.304 126.695 184.659 141.082 177.269C168.114 163.421 195.018 133.259 200.492 101.925C190.202 132.061 158.909 157.998 130.415 168.53C110.911 175.727 75.6419 182.731 75.6368 182.734C75.6533 182.759 74.2312 181.996 74.2113 181.979C50.2253 170.309 49.5332 118.359 93.0965 101.613C112.197 94.2661 130.466 98.3015 151.114 93.387C173.136 88.151 198.642 71.644 209.009 50.063C220.631 84.5351 234.592 138.467 209.545 171.821V171.821ZM209.973 39.3809C207.043 46.343 203.466 52.6167 199.344 58.2281C181.197 39.6038 155.868 27.9999 127.871 27.9999C72.7989 27.9999 28 72.8039 28 127.866C28 156.731 40.3209 182.764 59.9644 201.012L62.1514 202.949C58.4993 199.971 57.9377 194.608 60.8977 190.952C63.8759 187.295 69.2444 186.728 72.8983 189.69C76.562 192.658 77.1202 198.035 74.1538 201.697C71.1984 205.361 65.8202 205.914 62.1614 202.958L63.6497 204.276C81.0254 218.906 103.424 227.743 127.871 227.743C180.511 227.743 223.736 186.778 227.436 135.073C230.176 109.757 222.699 77.6106 209.973 39.3809Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "NodeJs",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#81CD39" d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"/><path fill="#81CD39" d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Express",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M228 182.937C225.089 184.04 221.875 184.037 218.965 182.931C216.056 181.824 213.652 179.69 212.209 176.932C203.146 163.365 193.138 150.41 183.519 137.177L179.348 131.617C167.894 146.963 156.44 161.697 145.987 176.988C144.625 179.624 142.352 181.675 139.59 182.759C136.828 183.844 133.766 183.887 130.975 182.882L173.955 125.223L133.977 73.1236C136.855 72.0845 140.003 72.0702 142.89 73.0832C145.777 74.0962 148.226 76.0744 149.824 78.6838C159.109 92.2506 169.396 105.206 179.626 118.94C189.913 105.317 200.088 92.3062 209.596 78.8506C210.965 76.2574 213.24 74.258 215.988 73.2328C218.735 72.2076 221.764 72.2281 224.497 73.2904L208.984 93.8631C202.034 103.037 195.195 112.267 187.967 121.219C187.384 121.741 186.918 122.379 186.599 123.093C186.28 123.807 186.115 124.58 186.115 125.362C186.115 126.143 186.28 126.916 186.599 127.63C186.918 128.344 187.384 128.982 187.967 129.504C201.256 147.13 214.433 164.811 228 182.937V182.937Z"/><path fill="#fff" d="M28 124.5C29.1676 118.94 29.8905 112.879 31.5029 107.208C41.122 73.0129 80.3214 58.7788 107.288 79.9632C123.079 92.3624 127.027 109.933 126.249 129.727H37.2855C35.8399 165.09 61.3611 186.441 93.9994 175.543C99.2938 173.649 104.033 170.467 107.79 166.283C111.547 162.099 114.202 157.045 115.517 151.578C117.241 146.018 120.021 145.073 125.303 146.685C124.433 153.454 122.04 159.938 118.303 165.649C114.567 171.36 109.584 176.149 103.73 179.657C94.0573 184.947 82.96 187.042 72.0247 185.644C61.0894 184.246 50.8763 179.426 42.8457 171.873C34.9011 162.94 30.0973 151.654 29.1676 139.735C29.1676 137.845 28.4448 135.954 28.0556 134.175C28.0185 130.876 28 127.651 28 124.5ZM37.3967 122.109H117.853C117.352 96.4769 101.172 78.2951 79.5986 78.1283C55.5785 77.7947 38.3976 95.5873 37.3411 121.998L37.3967 122.109Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Electron",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <g fill="#47848f"><path d="M49.07 32.66c-14.37-2.62-25.72.12-30.25 8-3.38 5.85-2.41 13.61 2.34 21.9a1.47 1.47 0 002.56-1.47c-4.28-7.47-5.12-14.17-2.35-19 3.76-6.51 13.89-9 27.17-6.54a1.47 1.47 0 10.53-2.9zM28.63 72.61a92.2 92.2 0 0022 17.34c20.84 12 43 15.25 54 7.79a1.47 1.47 0 00-1.66-2.43C93.11 102 72 98.92 52.07 87.39a89.27 89.27 0 01-21.26-16.77 1.47 1.47 0 00-2.18 2z"></path><path d="M101.06 70.81c9.41-11.11 12.69-22.29 8.17-30.11-3.32-5.76-10.35-8.8-19.69-8.92a1.47 1.47 0 000 2.95c8.4.11 14.45 2.73 17.18 7.45 3.75 6.5.82 16.47-7.87 26.74a1.47 1.47 0 102.25 1.9zM76.89 33.15a92 92 0 00-26.25 10.4C29.13 56 15.09 74.29 17 87.57a1.47 1.47 0 003-.43C18.23 75.35 31.53 58 52.11 46.11A89.07 89.07 0 0177.51 36a1.47 1.47 0 10-.62-2.88z"></path><path d="M42 96.78C47 110.51 55 119 64.05 119c6.6 0 12.7-4.5 17.46-12.42A1.47 1.47 0 1079 105c-4.28 7.12-9.53 11-14.94 11-7.52 0-14.69-7.54-19.24-20.24a1.47 1.47 0 00-2.77 1zm45-2.69a92.5 92.5 0 003.91-27.3c0-24.41-8.54-45.44-20.71-50.85a1.47 1.47 0 00-1.2 2.7c10.85 4.82 19 24.78 19 48.15a89.57 89.57 0 01-3.78 26.42 1.47 1.47 0 002.81.88zM114.71 92.65a7.05 7.05 0 10-7.05 7.05 7.05 7.05 0 007.05-7.05zm-2.95 0a4.1 4.1 0 11-4.1-4.1 4.1 4.1 0 014.1 4.1zM20.34 99.7a7.05 7.05 0 10-7.05-7.05 7.05 7.05 0 007.05 7.05zm0-2.95a4.1 4.1 0 114.1-4.1 4.1 4.1 0 01-4.1 4.1z"></path><path d="M64.05 23.13A7.05 7.05 0 1057 16.08a7.05 7.05 0 007.05 7.05zm0-2.95a4.1 4.1 0 114.1-4.1 4.1 4.1 0 01-4.1 4.1zM65.13 71.77A5.1 5.1 0 1169 65.71a5.1 5.1 0 01-3.87 6.06z"></path></g>
              </svg>),
      },
      {
        title: "Puppeteer",
        icon:(<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#dfdedf" d="M106.01 71.762H21.86v-4.745a5.773 5.773 0 015.773-5.773h72.602a5.773 5.773 0 015.774 5.773z"></path><path fill="#fff" d="M100.147 126.796H27.722a5.863 5.863 0 01-5.862-5.862V71.762h84.15v49.172a5.862 5.862 0 01-5.863 5.862z"></path><path fill="#00d8a2" d="M91.832 44.428l10.297-4.971v-4.971l-23.79-11.36 23.79-12.25V6.081l-9.942-4.615L64.02 15.49 35.377 1.466l-9.23 4.971v4.26l22.368 12.25-22.369 11.362v5.148l9.587 4.97L64.137 29.87z"></path><path d="M35.671.07a.66.66 0 00-.593.001L24.905 5.243a.66.66 0 00-.36.587v5.31c0 .251.142.48.366.592l7.202 3.559L30.7 30.739l-5.687 2.823a.66.66 0 00-.366.58l-.094 5.22a.66.66 0 00.36.6l4.722 2.389-.28 3.063-6.436 16.688a6.422 6.422 0 00-1.792 4.45v54.99A6.464 6.464 0 0027.583 128h72.834a6.464 6.464 0 006.456-6.458V66.553a6.424 6.424 0 00-1.608-4.25l-6.586-20.12 4.05-1.96a.66.66 0 00.371-.595v-5.455a.657.657 0 00-.368-.592l-5.163-2.537-1.294-16.066 6.463-3.246a.66.66 0 00.362-.59V5.917a.658.658 0 00-.358-.585L92.483.075a.66.66 0 00-.6-.002l-27.568 13.99a.657.657 0 01-.591.002zm-.287 2.345L64.02 17.26 92.178 2.42l7.17 3.673-26.073 13.12c-1.043.525-1.04 2.013.003 2.535l25.804 12.916-6.689 3.467L64.02 23.59 35.147 38.425l-6.595-3.786L55.21 21.388c1.056-.524 1.049-2.033-.014-2.546v.002L28.458 5.934zm65.49 5.404v2.359l-22.64 11.367v-.002c-.033-.02-2.387-1.132-2.387-1.132zm-73.77.14L52.04 20.397l-2.521 1.008-22.415-11.099zm66.103 8.56l1.04 12.895-13.507-6.636zm-58.04.281L47 22.647l-12.956 6.432zm29.966 10.345l25.765 12.73v2.56l-25.765-13.2v-2.088zm-2.227.004v2.087L36.488 42.603v-2.356zm.816 4.273a.658.658 0 01.595.002L91.626 45.31a.66.66 0 00.585.006l3.193-1.547 1.315 16.327H31.205l1.278-13.947.76-1.97 2.233 1.129a.66.66 0 00.595 0zm-36.951 4.765l7.49 4.298v1.713l-7.49-3.79zm74.104.055v2.405L93.123 42.4v-2.14zM99.489 54.88l1.724 5.27a6.33 6.33 0 00-.796-.056h-.51zM28.294 57l-.282 3.094h-.429a6.64 6.64 0 00-.491.024zm-.71 5h72.833a4.55 4.55 0 014.547 4.55v4.258H23.036v-4.256a4.55 4.55 0 014.547-4.551zm.63 3.113a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.925 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.772 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm-14.875 7.603h81.928v48.825a4.55 4.55 0 01-4.547 4.55H27.583a4.55 4.55 0 01-4.547-4.55zm4.994 19.144v10.954h1.775v-4.157h2.292c.25 0 .487-.02.71-.06.224-.039.436-.1.633-.177a2.836 2.836 0 001.028-.7 2.992 2.992 0 00.646-1.076c.071-.205.124-.423.16-.656.036-.232.055-.478.055-.737 0-.257-.019-.501-.055-.733a3.677 3.677 0 00-.162-.655 2.94 2.94 0 00-1.133-1.488 2.796 2.796 0 00-.55-.288 3.22 3.22 0 00-.627-.17 4.19 4.19 0 00-.705-.057zm45.23 1.34v2.182h-1.546v1.562h1.547v2.993c0 .242.016.467.047.677.03.21.076.404.139.583.062.18.14.343.235.492.094.148.204.282.33.4.127.12.265.226.415.316.15.09.312.167.486.227.173.06.359.107.556.137.197.03.406.045.626.045.148 0 .298-.011.45-.033.152-.022.306-.054.462-.098.157-.044.315-.101.476-.168.161-.067.325-.145.491-.235l-.55-1.592a3.23 3.23 0 01-.626.26c-.1.03-.198.05-.294.065-.095.015-.19.022-.28.022-.088 0-.17-.007-.248-.02a1.074 1.074 0 01-.216-.058.839.839 0 01-.444-.41 1.175 1.175 0 01-.08-.213 1.678 1.678 0 01-.05-.252 2.418 2.418 0 01-.017-.29v-2.848h2.357v-1.562H75.17V93.2zm-43.455.514h2.292c.03 0 .058 0 .086.002a1.886 1.886 0 01.397.055c.025.006.05.014.073.021.024.008.048.015.07.024a1.17 1.17 0 01.253.133 1.22 1.22 0 01.164.135l.051.05a1.693 1.693 0 01.165.23c.012.02.022.041.033.062.01.021.022.042.031.063a1.61 1.61 0 01.053.135l.022.07c.007.025.015.048.021.073l.016.076a1.827 1.827 0 01.035.321l.002.087c0 .029 0 .057-.002.086 0 .028-.002.056-.004.084l-.008.082a1.747 1.747 0 01-.023.159l-.016.076c-.006.025-.014.048-.021.072a1.662 1.662 0 01-.139.339 1.346 1.346 0 01-.12.176c-.014.019-.03.037-.045.055v.002a1.222 1.222 0 01-.468.317c-.022.009-.046.016-.07.024l-.072.021a1.728 1.728 0 01-.314.051 2.003 2.003 0 01-.17.008h-2.292zm20.078 1.45c-.239 0-.467.018-.685.051-.219.033-.428.081-.627.147a3.288 3.288 0 00-1.072.6v-.58H45.59v10.656h1.909v-4.005c.162.13.334.245.514.343.181.097.371.178.57.242.199.065.406.115.622.147.217.033.443.05.678.05.238 0 .47-.024.693-.07.222-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.024 4.024 0 001.016-1.05 3.507 3.507 0 00.33-.649c.088-.228.153-.467.196-.718.044-.251.065-.514.065-.789s-.021-.537-.065-.789a3.611 3.611 0 00-.527-1.372 3.829 3.829 0 00-1.017-1.061 3.422 3.422 0 00-.603-.339 3.22 3.22 0 00-.644-.201 3.448 3.448 0 00-.687-.069zm9.282 0c-.238 0-.466.018-.685.051-.219.033-.428.081-.626.147a3.288 3.288 0 00-1.073.6v-.58h-1.909v10.656h1.909v-4.005c.163.13.334.245.515.343.18.097.37.178.57.242.198.065.405.115.622.147.217.033.442.05.677.05.239 0 .469-.024.691-.07.223-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.05 4.05 0 00.803-.753 3.6 3.6 0 00.395-.613 3.81 3.81 0 00.346-1.051c.044-.251.065-.514.065-.789s-.02-.537-.065-.789a3.844 3.844 0 00-.346-1.055 3.57 3.57 0 00-.18-.317 3.841 3.841 0 00-.464-.587 3.999 3.999 0 00-.556-.474 3.238 3.238 0 00-1.247-.54 3.428 3.428 0 00-.685-.069zm8.14 0c-.264 0-.516.024-.758.069a3.453 3.453 0 00-1.323.536 3.78 3.78 0 00-1.04 1.046 3.533 3.533 0 00-.339.655 3.69 3.69 0 00-.203.728c-.045.255-.069.52-.069.8a4.577 4.577 0 00.153 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.452 3.452 0 001.317.537c.24.045.491.068.752.068.202 0 .397-.012.587-.035.19-.023.373-.059.55-.106a3.73 3.73 0 00.989-.423 3.3 3.3 0 00.798-.696c.115-.139.222-.288.317-.449.096-.16.18-.334.257-.518l-1.707-.36c-.094.159-.202.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.367.059-.573.059-.112 0-.222-.01-.325-.03a1.56 1.56 0 01-.576-.233 1.971 1.971 0 01-.67-.73 2.256 2.256 0 01-.14-.323 2.67 2.67 0 01-.096-.36h5.493v-.652a4.735 4.735 0 00-.092-.775 3.858 3.858 0 00-.216-.7 3.517 3.517 0 00-.804-1.185 3.91 3.91 0 00-.56-.446 3.498 3.498 0 00-1.274-.515 3.838 3.838 0 00-.713-.067zm14.702 0c-.263 0-.516.024-.758.069a3.449 3.449 0 00-1.323.536 3.76 3.76 0 00-.818.748 3.528 3.528 0 00-.56.953 3.685 3.685 0 00-.204.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.153 1.172 3.675 3.675 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.563.466a3.473 3.473 0 001.318.537c.24.045.491.068.751.068.203 0 .398-.012.588-.035a4.14 4.14 0 00.552-.106 3.698 3.698 0 00.986-.423 3.3 3.3 0 00.799-.696c.115-.139.221-.288.317-.449.096-.16.18-.334.256-.518l-1.705-.36c-.094.159-.201.297-.323.416-.12.12-.256.218-.405.298-.149.08-.314.14-.491.18-.177.04-.368.059-.574.059a1.654 1.654 0 01-.624-.118 1.654 1.654 0 01-.532-.344 1.971 1.971 0 01-.414-.53 2.256 2.256 0 01-.14-.324 2.67 2.67 0 01-.096-.36h5.492v-.652a4.743 4.743 0 00-.092-.775 3.856 3.856 0 00-.215-.7 3.51 3.51 0 00-.805-1.185 3.914 3.914 0 00-.56-.446 3.498 3.498 0 00-1.272-.515 3.858 3.858 0 00-.712-.067zm8.574 0c-.264 0-.518.024-.76.069a3.566 3.566 0 00-1.323.536 3.746 3.746 0 00-.817.748 3.529 3.529 0 00-.56.953 3.685 3.685 0 00-.203.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.152 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.456 3.456 0 001.317.537c.24.045.49.068.75.068.203 0 .4-.012.59-.035a4.11 4.11 0 00.55-.106 3.724 3.724 0 00.986-.423 3.307 3.307 0 001.116-1.145c.095-.16.182-.334.258-.518l-1.707-.36c-.094.159-.201.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.369.059-.575.059a1.654 1.654 0 01-.622-.118 1.654 1.654 0 01-.533-.344 1.971 1.971 0 01-.413-.53 2.256 2.256 0 01-.14-.324 2.672 2.672 0 01-.099-.36h5.495v-.652a4.742 4.742 0 00-.094-.775 3.853 3.853 0 00-.213-.7 3.51 3.51 0 00-.807-1.185 3.9 3.9 0 00-.558-.446 3.498 3.498 0 00-1.274-.515 3.836 3.836 0 00-.713-.067zm9.599.118a3.03 3.03 0 00-1.116.2 2.82 2.82 0 00-.943.598 3.512 3.512 0 00-.274.286 4.098 4.098 0 00-.255.331v-1.313h-1.908v7.213h1.908v-2.328c0-.258.015-.5.041-.726.027-.226.066-.437.12-.63.053-.194.12-.37.2-.53.08-.162.174-.306.281-.435a1.96 1.96 0 01.805-.58c.16-.064.334-.112.522-.144a3.6 3.6 0 01.605-.047h.42l.1-1.838a.894.894 0 00-.214-.045 2.874 2.874 0 00-.292-.012zm-63.684.1v4.396c0 .224.016.438.049.64.032.203.082.394.148.576a2.783 2.783 0 001.03 1.339c.154.106.319.195.493.266.175.071.359.125.554.16.196.036.402.055.619.055.234 0 .458-.019.67-.055.21-.036.411-.09.6-.162a2.828 2.828 0 00.998-.65v.65h1.909v-7.215h-1.909v3.196c0 .208-.008.402-.027.584a3.897 3.897 0 01-.082.507 2.6 2.6 0 01-.141.426c-.056.13-.121.245-.196.349a1.396 1.396 0 01-.56.466 1.61 1.61 0 01-.364.115c-.13.026-.273.04-.423.04-.112 0-.217-.01-.317-.03a1.309 1.309 0 01-.526-.233 1.356 1.356 0 01-.212-.2 1.384 1.384 0 01-.178-.248 1.585 1.585 0 01-.127-.29 1.98 1.98 0 01-.074-.329 2.557 2.557 0 01-.024-.362v-3.991zm13.054 1.446a2.487 2.487 0 01.425.037 1.959 1.959 0 01.56.196c.057.03.113.065.168.102.027.018.054.039.08.059.027.02.053.039.078.06l.077.069.074.07a1.87 1.87 0 01.343.498 2.028 2.028 0 01.14.395 2.542 2.542 0 01.073.444 3.164 3.164 0 01-.027.703 2.368 2.368 0 01-.184.603 1.96 1.96 0 01-.211.343 1.863 1.863 0 01-.443.409 1.945 1.945 0 01-.936.327 2.209 2.209 0 01-.415 0 2.133 2.133 0 01-.378-.077 1.932 1.932 0 01-.528-.256 2.37 2.37 0 01-.474-.419 1.85 1.85 0 01-.387-.728 2.206 2.206 0 01-.077-.433 2.895 2.895 0 01.028-.689 2.186 2.186 0 01.201-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.374 2.374 0 01.337-.227 1.954 1.954 0 01.358-.152 1.879 1.879 0 01.576-.085zm9.282 0a2.479 2.479 0 01.423.037 1.964 1.964 0 01.56.196c.057.03.114.065.168.102.027.018.054.039.08.059l.079.06c.026.022.051.046.076.069l.075.07a1.838 1.838 0 01.342.498 2.044 2.044 0 01.143.395 2.758 2.758 0 01.078.683 2.707 2.707 0 01-.078.677 2.167 2.167 0 01-.239.566 1.995 1.995 0 01-.246.32 2.123 2.123 0 01-.478.357 1.83 1.83 0 01-.558.196 2.3 2.3 0 01-.622.03 2.133 2.133 0 01-.378-.077 1.93 1.93 0 01-.53-.256 2.231 2.231 0 01-.326-.266 1.975 1.975 0 01-.381-.494 1.882 1.882 0 01-.153-.387 2.206 2.206 0 01-.076-.433 2.895 2.895 0 01.027-.689 2.186 2.186 0 01.202-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.235 2.235 0 01.335-.227 1.954 1.954 0 01.358-.152 1.952 1.952 0 01.577-.085zm8.472 0a1.809 1.809 0 01.245.016 1.809 1.809 0 01.072.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.484 1.484 0 01.303.292 1.615 1.615 0 01.16.25c.025.046.047.092.067.141l.03.075a2.228 2.228 0 01.053.156l.023.082h-3.484a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.021-.049 1.599 1.599 0 01.136-.243 1.599 1.599 0 01.178-.21 1.599 1.599 0 01.043-.042 1.599 1.599 0 01.213-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.077-.01 1.904 1.904 0 01.252-.02zm14.703 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.44 1.44 0 01.21.184c.017.017.032.035.048.053l.047.055.043.058a1.488 1.488 0 01.115.192 2.065 2.065 0 01.15.374l.023.082h-3.485v-.002a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.178-.211 1.599 1.599 0 01.043-.041 1.599 1.599 0 01.214-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.076-.01 1.904 1.904 0 01.253-.02zm8.574 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.244.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.482 1.482 0 01.464.542c.024.046.046.092.067.141l.03.075a2.271 2.271 0 01.052.156l.023.082h-3.486a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.176-.207 1.599 1.599 0 01.053-.05 1.599 1.599 0 01.207-.167 1.904 1.904 0 01.225-.135 1.904 1.904 0 01.053-.026 1.904 1.904 0 01.243-.098 1.904 1.904 0 01.249-.058 1.904 1.904 0 01.074-.01 1.904 1.904 0 01.255-.02z"></path>
              </svg>),
      },
      {
        title: "Nginx",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#009639" rx="60"/><path fill="#fff" d="M195.338 213C190.746 213 186.224 211.213 182.847 207.829L78.3239 103.307V195.34C78.3239 205.095 70.4184 213 60.662 213C50.9126 213 43 205.095 43 195.34V60.6678C43 53.5189 47.3095 47.0834 53.908 44.3496C60.4995 41.6087 68.1012 43.1204 73.1525 48.1784L177.676 152.7V60.6678C177.676 50.9122 185.582 43.0074 195.338 43.0074C205.095 43.0074 213 50.9122 213 60.6678V195.34C213 202.481 208.69 208.924 202.092 211.658C199.909 212.562 197.62 213 195.338 213Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Vite",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"></stop><stop offset="1" stop-color="#bd34fe"></stop></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"></stop><stop offset=".083" stop-color="#ffdd35"></stop><stop offset="1" stop-color="#ffa800"></stop></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"></path><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"></path>
              </svg>),
      },
      {
        title: "Tensorflow",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#242938"/>
                  <path d="M124.228 229L90.623 208.89V90.31L40 120.459L40.123 75.545L124.228 26V229ZM131.784 26V229L165.393 208.89V151.781L190.763 166.895L190.612 127.833L165.393 112.988V90.31L216 120.459L215.878 75.545L131.784 26Z" fill="#FF6F00"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "Pytorch",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#242938"/>
                  <path d="M180.975 90.4153L167.567 103.824C189.508 125.765 189.508 161.115 167.567 182.65C145.625 204.591 110.275 204.591 88.7404 182.65C66.7991 160.709 66.7991 125.359 88.7404 103.824L123.481 69.0835L128.357 64.2077V38L75.9413 90.4153C46.6862 119.67 46.6862 166.804 75.9413 196.059C105.196 225.314 152.33 225.314 180.975 196.059C210.23 166.6 210.23 119.67 180.975 90.4153Z" fill="#EE4C2C"/>
                  <path d="M154.77 87.1705C160.156 87.1705 164.522 82.8045 164.522 77.4188C164.522 72.0331 160.156 67.667 154.77 67.667C149.385 67.667 145.019 72.0331 145.019 77.4188C145.019 82.8045 149.385 87.1705 154.77 87.1705Z" fill="#EE4C2C"/>
                  </svg>
                </g>
              </svg>),
      },
    ],
    Databases: [
      {
        title: "MongoDB",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10AA50" d="M171.173 107.591C160.636 61.1097 138.676 48.7357 133.074 39.9886C130.764 36.1353 128.717 32.1299 126.949 28C126.653 32.1292 126.109 34.7307 122.599 37.862C115.552 44.1454 85.6217 68.5354 83.1028 121.348C80.756 170.59 119.303 200.953 124.395 204.092C128.311 206.019 133.08 204.133 135.407 202.364C153.988 189.612 179.376 155.614 171.193 107.591"/><path fill="#B8C4C2" d="M128.545 177.871C127.575 190.059 126.88 197.141 124.416 204.106C124.416 204.106 126.033 215.709 127.169 228H131.188C132.147 219.345 133.61 210.753 135.572 202.268C130.369 199.708 128.745 188.566 128.545 177.871Z"/><path fill="#12924F" d="M135.565 202.275C130.307 199.846 128.786 188.469 128.552 177.871C129.852 160.388 130.231 142.849 129.688 125.326C129.412 116.132 129.818 40.1676 127.423 29.0461C129.062 32.8129 130.949 36.4662 133.074 39.9818C138.676 48.7358 160.643 61.1097 171.173 107.591C179.376 155.532 154.126 189.44 135.565 202.275Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "PostgreSQL",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#336791" d="M203.48 148.688C183.16 152.878 181.684 145.995 181.684 145.995C203.15 114.143 212.129 73.7134 204.38 63.8204C183.259 36.8204 146.689 49.5962 146.077 49.9266L145.88 49.9618C141.414 49.0656 136.873 48.5924 132.317 48.5485C123.12 48.4079 116.145 50.9602 110.844 54.9751C110.844 54.9751 45.6078 28.1016 48.6453 88.7743C49.2922 101.684 67.1375 186.509 88.4422 160.845C96.2891 151.409 103.812 143.484 103.812 143.484C107.539 145.966 112.018 147.232 116.708 146.775L117.073 146.466C116.966 147.681 117.016 148.905 117.221 150.108C111.737 156.239 113.354 157.315 102.385 159.572C91.2898 161.857 97.8148 165.928 102.062 166.997C107.223 168.291 119.162 170.119 127.234 158.827L126.91 160.113C129.062 161.836 130.566 171.314 130.313 179.906C130.06 188.499 129.891 194.391 131.579 199.003C133.266 203.616 134.954 213.98 149.368 210.956C161.413 208.376 167.649 201.675 168.528 190.524C169.147 182.592 170.539 183.759 170.638 176.672L171.763 173.311C173.049 162.553 171.973 159.087 179.391 160.704L181.198 160.866C186.662 161.112 193.813 159.987 198.003 158.039C207.038 153.849 212.396 146.845 203.487 148.688H203.48Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M146.07 48.5961C143.82 49.2993 182.38 34.4985 204.303 62.504C212.038 72.3969 203.073 112.827 181.606 144.678M128.098 153.784C127.536 173.795 128.239 193.946 130.194 198.784C132.148 203.621 136.346 213.198 150.767 210.118C162.812 207.538 167.199 202.538 169.098 191.506L173.548 156.231L128.098 153.784ZM110.816 53.4688C110.816 53.4688 45.5375 26.7782 48.575 87.4508C49.2219 100.36 67.0672 185.185 88.3719 159.521C96.1484 150.148 103.18 142.815 103.18 142.815L110.816 53.4688Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5.034" d="M181.613 144.664C181.613 144.664 183.02 151.555 203.41 147.35C212.319 145.508 206.954 152.511 197.926 156.702C190.515 160.147 173.893 161.026 173.619 156.28C172.916 144.01 182.366 147.737 181.684 144.664C181.065 141.894 176.832 139.18 174.048 132.402C171.608 126.495 140.579 81.1438 182.654 87.8727C184.201 87.5563 171.685 47.7946 132.31 47.2181C92.9352 46.6415 94.1797 95.6282 94.1797 95.6282"/><path stroke="#fff" stroke-linejoin="round" stroke-width="5.034" d="M117.08 148.869C111.596 155 113.213 156.076 102.245 158.333C91.1492 160.618 97.6742 164.689 101.921 165.758C107.082 167.052 119.021 168.88 127.093 157.58C129.554 154.135 127.079 148.651 123.704 147.259C122.073 146.584 119.893 145.74 117.095 148.876L117.08 148.869Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M116.722 148.763C116.159 145.156 117.903 140.874 119.766 135.854C122.565 128.331 129.02 120.807 123.859 96.9219C120.013 79.1329 94.1867 93.2165 94.1867 95.6282C94.1867 98.0399 95.3539 107.863 93.7648 119.288C91.6766 134.209 103.257 146.823 116.588 145.536"/><path fill="#fff" stroke="#fff" stroke-width="1.68" d="M110.577 95.2695C110.457 96.0922 112.088 98.293 114.205 98.5883C116.321 98.8836 118.128 97.168 118.248 96.3383C118.367 95.5086 116.736 94.6086 114.62 94.3133C112.503 94.018 110.682 94.4539 110.577 95.2695V95.2695Z"/><path fill="#fff" stroke="#fff" stroke-width=".837" d="M175.011 93.5891C175.123 94.4118 173.499 96.6125 171.383 96.9079C169.266 97.2032 167.445 95.4875 167.34 94.6579C167.234 93.8282 168.852 92.9282 170.968 92.6329C173.084 92.3375 174.905 92.7735 175.011 93.5891Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.034" d="M182.577 87.8867C182.928 94.3555 181.184 98.75 180.959 105.634C180.636 115.632 185.727 127.079 178.055 138.54"/></svg>
                </g>
              </svg>),
      },
      {
        title: "MySQL",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><g clip-path="url(#clip0_7_147)"><path fill="#fff" fill-rule="evenodd" d="M203.801 178.21C194.011 177.938 186.416 178.941 180.051 181.619C178.218 182.355 175.277 182.355 175.035 184.662C176.015 185.63 176.133 187.214 176.992 188.556C178.459 190.991 181.033 194.271 183.357 195.973L191.191 201.571C195.965 204.488 201.351 206.193 206.002 209.113C208.696 210.817 211.388 213.007 214.082 214.834C215.454 215.807 216.285 217.392 218 217.997V217.629C217.144 216.538 216.897 214.957 216.044 213.735L212.367 210.209C208.82 205.465 204.41 201.325 199.636 197.922C195.718 195.245 187.152 191.596 185.56 187.097L185.319 186.824C188.008 186.552 191.191 185.605 193.764 184.875C197.929 183.784 201.721 184.024 206.002 182.93L211.882 181.226V180.135C209.678 177.946 208.087 175.025 205.763 172.959C199.521 167.606 192.661 162.373 185.56 157.994C181.766 155.562 176.868 153.977 172.829 151.913C171.356 151.182 168.911 150.817 168.055 149.601C165.846 146.929 164.625 143.397 163.034 140.232L152.997 119.064C150.794 114.319 149.444 109.574 146.755 105.195C134.144 84.5124 120.431 71.9828 99.375 59.6932C94.8477 57.1382 89.4616 56.0393 83.7353 54.7032L74.5546 54.2124C72.5928 53.3616 70.6364 51.0493 68.9216 49.9531C61.9441 45.5739 43.9475 36.0847 38.8029 48.5897C35.4966 56.4974 43.7006 64.2824 46.4855 68.299C48.5708 71.0966 51.2597 74.2597 52.7332 77.4228C53.5563 79.4897 53.8307 81.682 54.6895 83.8717C56.6458 89.2243 58.4842 95.1878 61.0551 100.178C62.427 102.733 63.8675 105.413 65.5824 107.723C66.5619 109.086 68.2768 109.67 68.6417 111.859C66.9268 114.294 66.8089 117.94 65.8293 120.986C61.42 134.734 63.1349 151.766 69.377 161.888C71.3389 164.928 75.9622 171.622 82.2345 169.065C87.744 166.875 86.5148 159.941 88.1062 153.857C88.4766 152.399 88.2297 151.425 88.9623 150.449V150.722L93.9834 160.819C97.7781 166.78 104.391 172.986 109.897 177.125C112.833 179.315 115.16 183.089 118.831 184.425V184.057H118.59C117.854 182.966 116.751 182.475 115.772 181.624C113.569 179.435 111.121 176.757 109.406 174.325C104.267 167.513 99.7399 159.968 95.6983 152.183C93.7365 148.412 92.0216 144.275 90.4357 140.504C89.6949 139.043 89.6949 136.85 88.4739 136.125C86.6355 138.797 83.9466 141.115 82.5939 144.398C80.2672 149.628 80.0257 156.077 79.1697 162.769C78.6758 162.891 78.8953 162.769 78.6758 163.041C74.7631 162.071 73.4132 158.051 71.9453 154.648C68.274 146.01 67.6594 132.141 70.8422 122.164C71.6983 119.609 75.375 111.579 73.9071 109.146C73.1662 106.834 70.7242 105.498 69.3743 103.671C67.7829 101.359 66.0735 98.4409 64.9705 95.8859C62.0346 89.0689 60.5667 81.5293 57.3812 74.7151C55.9077 71.552 53.3396 68.2662 51.257 65.3486C48.9303 62.0628 46.3648 59.7505 44.5265 55.8593C43.9146 54.4959 43.0585 52.3309 44.0381 50.8693C44.2795 49.8959 44.7734 49.5059 45.7475 49.2878C47.3389 47.9244 51.8716 49.6532 53.463 50.3785C57.9903 52.2054 61.7849 53.907 65.5796 56.4592C67.2945 57.6754 69.1329 59.9877 71.3361 60.5985H73.9098C77.8279 61.4493 82.2317 60.8712 85.9002 61.9619C92.3893 64.0343 98.2637 67.0719 103.532 70.3604C119.567 80.4577 132.792 94.8143 141.725 111.971C143.193 114.769 143.805 117.324 145.155 120.244C147.729 126.208 150.912 132.289 153.477 138.132C156.051 143.85 158.498 149.694 162.17 154.438C164.008 156.993 171.35 158.329 174.654 159.668C177.104 160.759 180.896 161.741 183.105 163.077C187.264 165.632 191.427 168.552 195.342 171.35C197.298 172.806 203.423 175.849 203.787 178.276L203.801 178.21ZM78.9584 72.4873C77.267 72.4724 75.5809 72.6769 73.9427 73.0954V73.3681H74.1842C75.1637 75.315 76.8786 76.6538 78.1023 78.3581L80.9202 84.1989L81.1616 83.9262C82.8765 82.71 83.7353 80.7631 83.7353 77.8454C83 76.9947 82.8793 76.1412 82.2674 75.2904C81.5321 74.0743 79.9407 73.4635 78.9584 72.4928V72.4873Z" clip-rule="evenodd"/></g><defs><clipPath id="clip0_7_147"><rect width="180" height="180" fill="#fff" transform="translate(38 38)"/></clipPath></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "SQLite",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <g clip-path="url(#clip0_307_145)">
                  <path d="M60 0C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H168.46C166.681 250.757 165.288 242.454 164.504 232.977C163.829 224.825 163.605 215.806 163.979 207.107C163.878 205.821 163.817 204.985 163.817 204.985C163.817 204.985 161.943 192.375 159.246 182.016C158.052 177.418 156.693 173.26 155.266 170.85C154.531 169.607 155.346 164.499 157.397 156.934C158.597 159.005 163.66 167.866 164.677 170.722C165.822 173.95 166.062 174.875 166.062 174.875C166.062 174.875 163.285 160.603 158.729 152.275C159.728 148.908 160.921 145.187 162.271 141.209C163.849 143.976 167.436 150.33 168.732 153.341C168.852 153.62 168.96 153.882 169.039 154.098C169.223 154.62 169.378 155.063 169.517 155.469C170.248 157.587 170.426 158.261 170.426 158.261C170.426 158.261 170.155 156.875 169.651 154.737C169.438 153.834 169.173 152.772 168.878 151.641C167.73 147.232 165.986 141.46 163.753 136.937C169.485 107.143 187.934 68.1305 207.81 47.0689C209.523 45.2554 211.244 43.5577 212.968 42.0275C224.587 31.7274 236.36 28.2483 246.083 36.9095C253.117 43.1773 255.995 51.8346 256 61.8004V60C256 26.8629 229.137 0 196 0H60Z" fill="#D9D9D9"/>
                  <path d="M60 0C26.8629 0 0 26.8629 0 60V196C0 229.137 26.8629 256 60 256H168.46C166.681 250.757 165.288 242.454 164.504 232.977C163.829 224.825 163.605 215.806 163.979 207.107C163.878 205.821 163.817 204.985 163.817 204.985C163.817 204.985 161.943 192.375 159.246 182.016C158.052 177.418 156.693 173.26 155.266 170.85C154.531 169.607 155.346 164.499 157.397 156.934C158.597 159.005 163.66 167.866 164.677 170.722C165.822 173.95 166.062 174.875 166.062 174.875C166.062 174.875 163.285 160.603 158.729 152.275C159.728 148.908 160.921 145.187 162.271 141.209C163.849 143.976 167.436 150.33 168.732 153.341C168.852 153.62 168.96 153.882 169.039 154.098C169.223 154.62 169.378 155.063 169.517 155.469C170.248 157.587 170.426 158.261 170.426 158.261C170.426 158.261 170.155 156.875 169.651 154.737C169.438 153.834 169.173 152.772 168.878 151.641C167.73 147.232 165.986 141.46 163.753 136.937C169.485 107.143 187.934 68.1305 207.81 47.0689C209.523 45.2554 211.244 43.5577 212.968 42.0275C224.587 31.7274 236.36 28.2483 246.083 36.9095C253.117 43.1773 255.995 51.8346 256 61.8004V60C256 26.8629 229.137 0 196 0H60Z" fill="url(#paint0_linear_307_145)"/>
                  <path d="M246.083 36.9095C236.36 28.2483 224.587 31.7274 212.968 42.0275C211.244 43.5577 209.523 45.2554 207.81 47.0689C187.934 68.1305 169.485 107.143 163.753 136.937C165.986 141.46 167.73 147.232 168.878 151.641C169.173 152.772 169.438 153.834 169.651 154.737C170.155 156.875 170.426 158.261 170.426 158.261C170.426 158.261 170.248 157.587 169.517 155.469C169.378 155.063 169.223 154.62 169.039 154.098C168.96 153.882 168.852 153.62 168.732 153.341C167.436 150.33 163.849 143.976 162.271 141.209C160.921 145.187 159.728 148.908 158.729 152.275C163.285 160.603 166.062 174.875 166.062 174.875C166.062 174.875 165.822 173.95 164.677 170.722C163.66 167.866 158.597 159.005 157.397 156.934C155.346 164.499 154.531 169.607 155.266 170.85C156.693 173.26 158.052 177.418 159.246 182.016C161.943 192.375 163.817 204.985 163.817 204.985C163.817 204.985 163.878 205.821 163.979 207.107C163.605 215.806 163.829 224.825 164.504 232.977C165.397 243.768 167.079 253.039 169.223 258L170.678 257.207C167.53 247.433 166.251 234.623 166.811 219.849C167.658 197.268 172.861 170.036 182.473 141.653C198.713 98.8063 221.245 64.4287 241.867 48.0113C223.071 64.9667 197.632 119.85 190.017 140.174C181.491 162.933 175.448 184.291 171.807 204.753C178.09 185.57 198.405 177.324 198.405 177.324C198.405 177.324 208.369 165.05 220.013 147.514C213.038 149.103 201.585 151.823 197.748 153.433C192.09 155.804 190.565 156.613 190.565 156.613C190.565 156.613 208.895 145.463 224.621 140.415C246.249 106.39 269.811 58.0531 246.083 36.9095" fill="#003B57"/>
                  <path d="M28.5202 49C25.4571 49 22.9663 49.8947 21.0568 51.6832C19.1473 53.4733 18.1786 55.8197 18.1786 58.6947C18.1786 60.1847 18.4192 61.5432 18.8932 62.788C19.3672 64.0354 20.1048 65.1909 21.0965 66.235C22.0882 67.2801 24.0732 68.6997 27.0315 70.5046C30.6616 72.6912 33.0372 74.4658 34.1773 75.8514C35.3183 77.2358 35.8844 78.6867 35.8844 80.1993C35.8844 82.2246 35.2087 83.8412 33.8201 85.0565C32.429 86.2722 30.5687 86.8779 28.2622 86.8779C25.8294 86.8779 23.7103 86.0317 21.8905 84.3514C20.0707 82.6686 19.1521 80.4429 19.1314 77.6532H18V87.7788H19.1314C19.4768 86.82 19.9548 86.3295 20.5804 86.3295C20.8814 86.3295 21.5864 86.5343 22.6845 86.917C25.3562 87.855 27.55 88.3076 29.2745 88.3076C32.2464 88.3076 34.7832 87.2806 36.8967 85.1935C39.0071 83.1074 40.0727 80.591 40.0727 77.6532C40.0727 75.3752 39.3692 73.3485 37.9885 71.5818C36.6077 69.813 33.9225 67.7556 29.9097 65.3929C26.4567 63.3459 24.2153 61.6787 23.1807 60.379C22.1446 59.0812 21.6126 57.6456 21.6126 56.0703C21.6126 54.3664 22.247 52.9977 23.4983 51.977C24.7496 50.9554 26.3892 50.4493 28.4408 50.4493C30.7497 50.4493 32.6743 51.1254 34.1972 52.4862C35.7185 53.8493 36.5982 55.7383 36.857 58.1659H37.9885V49.3917H36.9364C36.8078 49.839 36.6887 50.125 36.5791 50.2535C36.4727 50.3812 36.2679 50.4493 35.9638 50.4493C35.5978 50.4493 34.9451 50.2973 34.0186 49.9988C32.0336 49.3392 30.2035 49 28.5202 49ZM65.4999 49C61.7674 49 58.3787 49.868 55.3171 51.6048C52.2507 53.3385 49.8235 55.7459 48.0323 58.8122C46.2419 61.8782 45.3526 65.1346 45.3526 68.6048C45.3526 73.2671 46.8993 77.4206 50.0173 81.0611C53.1368 84.6993 56.8749 86.9663 61.2124 87.8376C62.2041 88.3474 63.6229 89.6635 65.48 91.7938C67.573 94.1978 69.3435 95.9318 70.7997 96.9643C72.2543 97.9974 73.8248 98.7545 75.4842 99.2558C77.1452 99.7549 78.9412 100 80.8832 100C83.235 100 85.3406 99.5967 87.1954 98.7661L86.7785 97.7477C85.7019 98.1309 84.5538 98.3157 83.3446 98.3157C81.7034 98.3157 80.0448 97.7817 78.3822 96.7097C76.722 95.635 74.6457 93.5846 72.1693 90.5599C71.0053 89.1106 70.2018 88.1962 69.7477 87.8376C74.4933 86.9232 78.3957 84.6538 81.439 81.0219C84.4816 77.3916 86.0044 73.2484 86.0044 68.6048C86.0044 63.0913 84.0163 58.4576 80.0694 54.6797C76.1194 50.9015 71.2618 49 65.4999 49ZM88.5848 49L88.6444 50.1947C91.1295 50.1947 92.5214 50.917 92.8326 52.3687C92.9485 52.8881 93.0017 53.8471 93.0113 55.2281L92.9914 81.6486C92.9708 83.6219 92.6858 84.8818 92.1379 85.4286C91.5893 85.9715 90.6619 86.3115 89.3193 86.447L89.2598 87.6417H114.032L114.667 81.6486H113.536C113.213 83.2812 112.472 84.4508 111.293 85.1152C110.11 85.7845 108.02 86.1141 105 86.1141H102.658C99.9412 86.1141 98.3691 85.1449 97.9539 83.1959C97.8681 82.8103 97.8387 82.3968 97.8348 81.9424L97.934 55.2281C97.9334 53.258 98.1857 51.9378 98.7081 51.2915C99.2361 50.6475 100.188 50.2871 101.566 50.1947L101.507 49H88.5849H88.5848ZM65.8969 50.4493C70.1065 50.4493 73.5437 52.0852 76.1988 55.3848C78.853 58.6855 80.1687 63.2094 80.1687 68.9378C80.1687 74.366 78.834 78.7123 76.1591 81.9816C73.4841 85.2498 69.9239 86.8779 65.4999 86.8779C61.2497 86.8779 57.803 85.199 55.1583 81.8249C52.5159 78.4507 51.2082 74.0701 51.2082 68.6832C51.2082 63.1476 52.5318 58.7164 55.198 55.4044C57.8626 52.0959 61.4307 50.4493 65.8969 50.4493ZM122.865 56.129C122.261 56.129 121.8 56.3304 121.456 56.7362C121.103 57.1404 120.995 57.63 121.118 58.2247C121.237 58.8015 121.567 59.307 122.091 59.7327C122.612 60.158 123.174 60.379 123.778 60.379C124.362 60.379 124.808 60.158 125.128 59.7327C125.448 59.307 125.545 58.8015 125.426 58.2247C125.302 57.63 124.984 57.1404 124.493 56.7362C123.996 56.3304 123.449 56.129 122.865 56.129ZM139.201 60.1832C138.174 64.08 135.949 66.1888 132.532 66.5288L132.571 67.6452H136.561L136.482 80.8456C136.488 83.1025 136.558 84.605 136.72 85.3698C137.113 87.2007 138.325 88.1313 140.352 88.1313C143.286 88.1313 146.364 86.368 149.582 82.8433L148.61 82.0207C146.286 84.3419 144.231 85.5069 142.437 85.5069C141.334 85.5069 140.65 84.8811 140.392 83.6463C140.321 83.3464 140.293 82.996 140.293 82.5887L140.333 67.6452H146.426L146.367 65.8629H140.352V60.1832H139.201H139.201ZM162.762 65.1578C159.354 65.1578 156.581 66.7905 154.426 70.0346C152.281 73.2842 151.617 76.8845 152.461 80.8456C152.957 83.1658 153.945 84.9641 155.458 86.2316C156.968 87.4985 158.884 88.1313 161.174 88.1313C163.307 88.1313 166.277 87.5985 167.526 86.5253C168.779 85.4528 169.934 83.7152 171 81.3353L170.146 80.4539C168.446 83.5413 165.013 85.0956 162.425 85.0956C158.866 85.0956 156.687 83.1692 155.875 79.3376C155.769 78.8485 155.69 78.323 155.636 77.7707C159.87 77.1094 163.078 75.9383 165.244 74.2454C167.407 72.5516 169.58 70.7562 169.174 68.8594C168.932 67.7324 168.339 66.8462 167.427 66.1763C166.503 65.5067 164.103 65.1578 162.762 65.1578ZM125.505 65.2949L118.161 66.9597V68.2523L120.701 67.9389C121.932 67.9389 122.656 68.4888 122.885 69.5841C122.962 69.9507 123.01 70.4654 123.024 71.1118L122.944 82.9608C122.924 84.6005 122.739 85.5537 122.369 85.8399C121.995 86.1266 121.009 86.2707 119.411 86.2707L119.371 87.3871H131.023L131.003 86.2707C129.384 86.2707 128.335 86.1447 127.867 85.8986C127.407 85.6541 127.091 85.2091 126.954 84.5276C126.848 84.0365 126.802 83.1903 126.795 82.0207L126.835 65.2949H125.505H125.505ZM160.897 67.4885C161.606 67.4885 162.291 67.7587 162.981 68.2915C163.661 68.8224 164.076 69.4128 164.211 70.0541C164.876 73.2043 162.045 75.3822 155.676 76.5956C155.494 74.2986 155.898 72.2134 156.927 70.3283C157.948 68.4451 159.278 67.4885 160.897 67.4885Z" fill="#003B57"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_307_145" x1="147.614" y1="5.2389" x2="147.614" y2="241.763" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#97D9F6"/>
                  <stop offset="0.920245" stop-color="#0F80CC"/>
                  <stop offset="1" stop-color="#0F80CC"/>
                  </linearGradient>
                  <clipPath id="clip0_307_145">
                  <rect width="256" height="256" rx="60" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "Firebase",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#ffa000" d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"></path><path fill="#f57c00" d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"></path><path fill="#ffca28" d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"></path><path fill="#fff" fill-opacity=".2" d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"></path><path fill="#a52714" d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z" opacity=".2"></path>
              </svg>),
      },
    ],
    DevOps: [
      {
        title: "AWS",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M84.7447 111.961C84.7447 114.395 85.0079 116.368 85.4684 117.816C85.9947 119.263 86.6526 120.842 87.5737 122.553C87.9026 123.079 88.0342 123.605 88.0342 124.066C88.0342 124.724 87.6395 125.382 86.7842 126.039L82.6395 128.803C82.0474 129.197 81.4553 129.395 80.929 129.395C80.2711 129.395 79.6132 129.066 78.9553 128.474C78.0342 127.487 77.2447 126.434 76.5869 125.382C75.929 124.263 75.2711 123.013 74.5474 121.5C69.4158 127.553 62.9684 130.579 55.2053 130.579C49.679 130.579 45.2711 129 42.0474 125.842C38.8237 122.684 37.179 118.474 37.179 113.211C37.179 107.618 39.1526 103.079 43.1658 99.6579C47.179 96.2368 52.5079 94.5263 59.2842 94.5263C61.5211 94.5263 63.8237 94.7237 66.2579 95.0526C68.6921 95.3816 71.1921 95.9079 73.8237 96.5V91.6974C73.8237 86.6974 72.7711 83.2105 70.7316 81.1711C68.6263 79.1316 65.0737 78.1447 60.0079 78.1447C57.7053 78.1447 55.3368 78.4079 52.9026 79C50.4684 79.5921 48.1 80.3158 45.7974 81.2368C44.7447 81.6974 43.9553 81.9605 43.4947 82.0921C43.0342 82.2237 42.7053 82.2895 42.4421 82.2895C41.5211 82.2895 41.0605 81.6316 41.0605 80.25V77.0263C41.0605 75.9737 41.1921 75.1842 41.5211 74.7237C41.85 74.2632 42.4421 73.8026 43.3632 73.3421C45.6658 72.1579 48.429 71.1711 51.6526 70.3816C54.8763 69.5263 58.2974 69.1316 61.9158 69.1316C69.7447 69.1316 75.4684 70.9079 79.1526 74.4605C82.7711 78.0132 84.6132 83.4079 84.6132 90.6447V111.961H84.7447ZM58.0342 121.961C60.2053 121.961 62.4421 121.566 64.8105 120.776C67.179 119.987 69.2842 118.539 71.0605 116.566C72.1132 115.316 72.9026 113.934 73.2974 112.355C73.6921 110.776 73.9553 108.868 73.9553 106.632V103.868C72.0474 103.408 70.0079 103.013 67.9026 102.75C65.7974 102.487 63.7579 102.355 61.7184 102.355C57.3105 102.355 54.0868 103.211 51.9158 104.987C49.7447 106.763 48.6921 109.263 48.6921 112.553C48.6921 115.645 49.4816 117.947 51.1263 119.526C52.7053 121.171 55.0079 121.961 58.0342 121.961ZM110.863 129.066C109.679 129.066 108.889 128.868 108.363 128.408C107.837 128.013 107.376 127.092 106.982 125.842L91.5211 74.9868C91.1263 73.6711 90.929 72.8158 90.929 72.3553C90.929 71.3026 91.4553 70.7105 92.5079 70.7105H98.9553C100.205 70.7105 101.061 70.9079 101.521 71.3684C102.047 71.7632 102.442 72.6842 102.837 73.9342L113.889 117.487L124.153 73.9342C124.482 72.6184 124.876 71.7632 125.403 71.3684C125.929 70.9737 126.85 70.7105 128.034 70.7105H133.297C134.547 70.7105 135.403 70.9079 135.929 71.3684C136.455 71.7632 136.916 72.6842 137.179 73.9342L147.574 118.013L158.955 73.9342C159.35 72.6184 159.811 71.7632 160.271 71.3684C160.797 70.9737 161.653 70.7105 162.837 70.7105H168.955C170.008 70.7105 170.6 71.2368 170.6 72.3553C170.6 72.6842 170.534 73.0132 170.468 73.4079C170.403 73.8026 170.271 74.3289 170.008 75.0526L154.153 125.908C153.758 127.224 153.297 128.079 152.771 128.474C152.245 128.868 151.389 129.132 150.271 129.132H144.613C143.363 129.132 142.508 128.934 141.982 128.474C141.455 128.013 140.995 127.158 140.732 125.842L130.534 83.4079L120.403 125.776C120.074 127.092 119.679 127.947 119.153 128.408C118.626 128.868 117.705 129.066 116.521 129.066H110.863ZM195.403 130.842C191.982 130.842 188.561 130.447 185.271 129.658C181.982 128.868 179.416 128.013 177.705 127.026C176.653 126.434 175.929 125.776 175.666 125.184C175.403 124.592 175.271 123.934 175.271 123.342V119.987C175.271 118.605 175.797 117.947 176.784 117.947C177.179 117.947 177.574 118.013 177.968 118.145C178.363 118.276 178.955 118.539 179.613 118.803C181.85 119.789 184.284 120.579 186.85 121.105C189.482 121.632 192.047 121.895 194.679 121.895C198.824 121.895 202.047 121.171 204.284 119.724C206.521 118.276 207.705 116.171 207.705 113.474C207.705 111.632 207.113 110.118 205.929 108.868C204.745 107.618 202.508 106.5 199.284 105.447L189.745 102.487C184.942 100.974 181.389 98.7368 179.218 95.7763C177.047 92.8816 175.929 89.6579 175.929 86.2368C175.929 83.4737 176.521 81.0395 177.705 78.9342C178.889 76.8289 180.468 74.9868 182.442 73.5395C184.416 72.0263 186.653 70.9079 189.284 70.1184C191.916 69.3289 194.679 69 197.574 69C199.021 69 200.534 69.0658 201.982 69.2632C203.495 69.4605 204.876 69.7237 206.258 69.9868C207.574 70.3158 208.824 70.6447 210.008 71.0395C211.192 71.4342 212.113 71.8289 212.771 72.2237C213.692 72.75 214.35 73.2763 214.745 73.8684C215.139 74.3947 215.337 75.1184 215.337 76.0395V79.1316C215.337 80.5132 214.811 81.2368 213.824 81.2368C213.297 81.2368 212.442 80.9737 211.324 80.4474C207.574 78.7368 203.363 77.8816 198.692 77.8816C194.942 77.8816 191.982 78.4737 189.942 79.7237C187.903 80.9737 186.85 82.8816 186.85 85.5789C186.85 87.4211 187.508 89 188.824 90.25C190.139 91.5 192.574 92.75 196.061 93.8684L205.403 96.8289C210.139 98.3421 213.561 100.447 215.6 103.145C217.639 105.842 218.626 108.934 218.626 112.355C218.626 115.184 218.034 117.75 216.916 119.987C215.732 122.224 214.153 124.197 212.113 125.776C210.074 127.421 207.639 128.605 204.811 129.461C201.85 130.382 198.758 130.842 195.403 130.842Z"/><path fill="#F90" fill-rule="evenodd" d="M207.837 162.816C186.192 178.803 154.745 187.29 127.705 187.29C89.8105 187.29 55.6658 173.276 29.8763 149.987C27.8369 148.145 29.679 145.645 32.1132 147.092C60.0079 163.276 94.4158 173.079 130.008 173.079C154.021 173.079 180.403 168.079 204.679 157.816C208.297 156.171 211.389 160.184 207.837 162.816Z" clip-rule="evenodd"/><path fill="#F90" fill-rule="evenodd" d="M216.85 152.553C214.087 149 198.561 150.842 191.521 151.697C189.416 151.961 189.087 150.118 190.995 148.737C203.363 140.053 223.692 142.553 226.061 145.447C228.429 148.408 225.403 168.737 213.824 178.474C212.047 179.987 210.337 179.197 211.126 177.224C213.758 170.711 219.613 156.039 216.85 152.553Z" clip-rule="evenodd"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Docker",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#2396ED" rx="60"/><path fill="#fff" d="M141.187 122.123H161.904V103.379H141.187V122.123ZM116.525 122.123H137.241V103.379H116.525V122.123ZM92.3554 122.123H113.072V103.379H92.3554V122.123ZM68.1859 122.123H88.4093V103.379H68.1859V122.123ZM43.5233 122.123H64.2399V103.379H43.5233V122.123ZM68.1859 99.4333H88.4093V80.6896H68.1859V99.4333ZM92.3554 99.4333H113.072V80.6896H92.3554V99.4333ZM116.525 99.4333H137.241V80.6896H116.525V99.4333ZM116.525 76.7436H137.241V58H116.525V76.7436ZM228 113.738C228 113.738 219.121 105.352 200.871 108.312C198.898 94.0075 183.607 85.6222 183.607 85.6222C183.607 85.6222 169.303 102.886 179.661 122.123C176.702 123.603 171.769 125.576 164.37 125.576H28.7257C26.2594 134.948 26.2594 197.097 94.3284 197.097C143.16 197.097 179.661 174.408 196.925 132.974C222.574 134.948 228 113.738 228 113.738Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Google Cloud",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#EA4335" d="M161.009 92.3895L178.394 75.0043L179.553 67.684C147.873 38.877 97.5124 42.1434 68.9538 74.4997C61.021 83.4864 55.1358 94.6903 51.9976 106.26L58.2241 105.382L92.9937 99.6489L95.678 96.9036C111.144 79.9176 137.295 77.6325 155.153 92.0848L161.009 92.3895Z"/><path fill="#4285F4" d="M203.16 105.749C199.164 91.033 190.96 77.8041 179.553 67.6846L155.153 92.0846C165.456 100.503 171.326 113.186 171.074 126.489V130.82C183.067 130.82 192.79 140.542 192.79 152.535C192.79 164.529 183.067 174.008 171.074 174.008H127.581L123.311 178.644V204.691L127.581 208.778H171.074C202.269 209.021 227.755 184.173 227.998 152.978C228.145 134.069 218.823 116.342 203.16 105.749Z"/><path fill="#34A853" d="M84.1488 208.778H127.581V174.008H84.1488C81.0543 174.007 78.0574 173.342 75.2433 172.056L69.0816 173.947L51.5746 191.332L50.0496 197.249C59.8675 204.662 71.8464 208.831 84.1488 208.778Z"/><path fill="#FBBC05" d="M84.1487 95.9886C52.9526 96.1746 27.8151 121.615 28.001 152.811C28.1049 170.231 36.2409 186.629 50.0495 197.249L75.2432 172.056C64.3128 167.118 59.4557 154.254 64.394 143.325C69.3315 132.395 82.1956 127.538 93.1245 132.475C97.9409 134.651 101.798 138.509 103.974 143.325L129.167 118.132C118.448 104.118 101.792 95.9254 84.1487 95.9886Z"/></svg>
                </g>
              </svg>),
      },
      {
        title: "Azure",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#paint0_linear_159_730)" d="M94.6743 34.0023H153.856L92.4196 216.032C91.7882 217.902 90.586 219.528 88.9824 220.679C87.3788 221.831 85.4545 222.45 83.4803 222.451H37.4223C35.9265 222.451 34.4522 222.095 33.1213 221.412C31.7904 220.729 30.6411 219.74 29.7687 218.525C28.8962 217.31 28.3256 215.905 28.104 214.425C27.8824 212.946 28.0162 211.435 28.4943 210.018L85.7327 40.4209C86.3639 38.5497 87.5662 36.9236 89.1703 35.7717C90.7744 34.6198 92.6995 34.0001 94.6743 34V34.0023Z"/><path fill="#0078D4" d="M180.674 156.095H86.8261C85.9536 156.094 85.101 156.356 84.3795 156.847C83.6579 157.337 83.1008 158.034 82.7807 158.845C82.4606 159.657 82.3923 160.546 82.5848 161.397C82.7773 162.248 83.2217 163.022 83.86 163.616L144.165 219.903C145.92 221.54 148.232 222.451 150.633 222.451H203.774L180.674 156.095Z"/><path fill="url(#paint1_linear_159_730)" d="M94.6745 34.0023C92.6781 33.9946 90.7315 34.6255 89.1192 35.8028C87.5068 36.98 86.3131 38.642 85.7125 40.5459L28.5649 209.863C28.0546 211.286 27.8944 212.81 28.0979 214.308C28.3013 215.805 28.8624 217.232 29.7337 218.466C30.6051 219.701 31.7609 220.708 33.1036 221.401C34.4463 222.095 35.9362 222.455 37.4474 222.451H84.6942C86.4539 222.136 88.0986 221.36 89.4603 220.202C90.822 219.044 91.8519 217.546 92.4448 215.859L103.841 182.273L144.549 220.241C146.255 221.652 148.395 222.433 150.608 222.451H203.551L180.331 156.096L112.642 156.112L154.07 34.0023H94.6745Z"/><path fill="url(#paint2_linear_159_730)" d="M170.264 40.4118C169.634 38.5435 168.434 36.9201 166.832 35.7702C165.23 34.6204 163.308 34.002 161.336 34.0022H95.3792C97.3508 34.0023 99.2727 34.6208 100.874 35.7707C102.476 36.9205 103.677 38.5437 104.307 40.4118L161.548 210.016C162.026 211.433 162.16 212.944 161.939 214.424C161.718 215.904 161.147 217.309 160.275 218.525C159.402 219.74 158.253 220.73 156.922 221.413C155.591 222.096 154.116 222.453 152.62 222.453H218.579C220.075 222.452 221.55 222.096 222.88 221.413C224.211 220.729 225.36 219.739 226.233 218.524C227.105 217.308 227.675 215.903 227.896 214.423C228.118 212.944 227.984 211.433 227.505 210.016L170.264 40.4118Z"/><defs><linearGradient id="paint0_linear_159_730" x1="116.244" x2="54.783" y1="47.967" y2="229.54" gradientUnits="userSpaceOnUse"><stop stop-color="#114A8B"/><stop offset="1" stop-color="#0669BC"/></linearGradient><linearGradient id="paint1_linear_159_730" x1="135.444" x2="121.227" y1="132.585" y2="137.392" gradientUnits="userSpaceOnUse"><stop stop-opacity=".3"/><stop offset=".071" stop-opacity=".2"/><stop offset=".321" stop-opacity=".1"/><stop offset=".623" stop-opacity=".05"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="paint2_linear_159_730" x1="127.625" x2="195.091" y1="42.671" y2="222.414" gradientUnits="userSpaceOnUse"><stop stop-color="#3CCBF4"/><stop offset="1" stop-color="#2892DF"/></linearGradient></defs></svg>
                </g>
              </svg>),
      },
      {
        title: "Vercel",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path d="M64.002 8.576 128 119.424H0Zm0 0"></path>
              </svg>),
      },
    ],
    Testing: [
      {
        title: "Jest",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width={svgWidth} height={svgHeight} viewBox="0 0 256 256" fill="none" version="1.1">
                <g transform="translate(0, 0)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
                  <rect width="256" height="256" rx="60" fill="#99424F"/>
                  <path d="M213.353 126.495C213.353 114.45 205.073 104.317 193.956 101.422L218.854 28H95.461L120.418 101.654C109.647 104.781 101.715 114.74 101.715 126.552C101.715 135.238 106.057 142.939 112.658 147.687C110.053 151.393 107.042 154.81 103.625 158.052C97.1981 164.074 90.076 168.706 82.3747 171.775C75.4263 167.085 72.4153 158.805 75.1368 151.393C85.7332 148.151 93.4344 138.249 93.4344 126.61C93.4344 112.308 81.7957 100.727 67.5514 100.727C53.2491 100.727 41.6104 112.366 41.6104 126.668C41.6104 133.732 44.5056 140.218 49.1379 144.85C48.7326 145.661 48.3273 146.471 47.9219 147.34C44.0424 155.331 39.6417 164.364 37.9625 174.497C34.604 194.763 40.1049 211.034 53.3649 220.241C60.8345 225.394 69.0569 228 77.9161 228C93.1449 228 108.605 220.357 123.544 212.945C134.199 207.676 145.2 202.175 156.028 199.511C160.024 198.527 164.193 197.948 168.594 197.311C177.511 196.037 186.718 194.705 194.998 189.899C204.668 184.283 211.269 174.902 213.18 164.132C214.627 155.852 213.18 147.514 209.474 140.218C211.964 136.222 213.353 131.532 213.353 126.495V126.495ZM202.062 126.495C202.062 134.543 195.519 141.086 187.47 141.086C179.422 141.086 172.879 134.543 172.879 126.495C172.879 123.889 173.573 121.399 174.789 119.257C175.253 118.446 175.832 117.635 176.411 116.94C176.99 116.246 177.685 115.609 178.437 115.03L178.495 114.972C178.958 114.624 179.48 114.277 180.001 113.929C180.001 113.929 180.059 113.929 180.059 113.871C180.29 113.756 180.522 113.582 180.753 113.466C180.811 113.466 180.869 113.408 180.927 113.408C181.159 113.292 181.448 113.177 181.738 113.061C182.027 112.945 182.317 112.829 182.548 112.713C182.606 112.713 182.664 112.655 182.722 112.655C182.954 112.598 183.185 112.482 183.417 112.424C183.475 112.424 183.591 112.366 183.649 112.366C183.938 112.308 184.17 112.25 184.459 112.192H184.517L185.386 112.019C185.444 112.019 185.559 112.019 185.617 111.961C185.849 111.961 186.081 111.903 186.312 111.903H186.602C186.891 111.903 187.181 111.845 187.528 111.845H188.281C188.513 111.845 188.686 111.845 188.918 111.903H189.034C189.497 111.961 189.96 112.019 190.423 112.134C197.024 113.524 202.062 119.43 202.062 126.495V126.495ZM111.616 39.5808H202.699L181.796 101.248C180.927 101.422 180.059 101.712 179.19 102.001L157.187 57.1257L135.125 101.712C134.257 101.422 133.33 101.248 132.404 101.075L111.616 39.5808ZM153.017 121.457C151.917 116.014 149.138 111.15 145.2 107.56L157.187 83.3561L169.288 108.081C165.698 111.671 163.093 116.246 162.05 121.457H153.017ZM124.008 112.308C124.297 112.25 124.529 112.192 124.818 112.134H124.992C125.224 112.076 125.455 112.076 125.687 112.019H125.918C126.15 112.019 126.324 111.961 126.555 111.961H128.814C129.045 111.961 129.219 112.019 129.393 112.019C129.509 112.019 129.566 112.019 129.682 112.076C129.914 112.134 130.088 112.134 130.319 112.192C130.377 112.192 130.435 112.192 130.551 112.25C130.84 112.308 131.13 112.366 131.361 112.424H131.419C131.651 112.482 131.883 112.54 132.114 112.655C132.172 112.655 132.23 112.713 132.346 112.713C132.52 112.771 132.751 112.829 132.925 112.945C132.983 112.945 133.041 113.003 133.099 113.003C133.33 113.119 133.562 113.177 133.793 113.292H133.851C134.141 113.408 134.372 113.524 134.604 113.698H134.662C134.894 113.814 135.125 113.987 135.357 114.103C135.415 114.103 135.415 114.161 135.473 114.161C135.704 114.277 135.878 114.45 136.11 114.566L136.167 114.624C136.862 115.145 137.499 115.724 138.136 116.303L138.194 116.361C138.773 116.998 139.352 117.693 139.815 118.446C141.321 120.762 142.189 123.483 142.189 126.437C142.189 134.485 135.646 141.028 127.598 141.028C119.549 141.028 113.006 134.485 113.006 126.437C112.948 119.662 117.638 113.929 124.008 112.308V112.308ZM67.0302 111.903C75.0789 111.903 81.622 118.446 81.622 126.495C81.622 134.543 75.0789 141.086 67.0302 141.086C58.9816 141.086 52.4384 134.543 52.4384 126.495C52.4384 118.446 58.9816 111.903 67.0302 111.903ZM201.715 162.105C200.441 169.517 195.866 176.002 189.149 179.882C182.838 183.53 175.079 184.688 166.914 185.846C162.456 186.483 157.766 187.178 153.249 188.278C141.205 191.231 129.624 197.021 118.391 202.58C104.031 209.702 90.4813 216.419 77.9161 216.419C71.373 216.419 65.5247 214.566 59.9659 210.687C47.2271 201.885 47.864 185.383 49.3695 176.35C50.7592 167.896 54.6388 159.963 58.3446 152.378C58.5763 151.914 58.75 151.509 58.9816 151.046C60.2555 151.509 61.5873 151.856 62.977 152.088C60.7766 164.364 67.0302 177.045 79.19 183.298L81.3904 184.456L83.7644 183.588C93.8976 179.998 103.278 174.149 111.558 166.332C116.249 161.932 120.244 157.184 123.602 152.03C124.934 152.262 126.266 152.32 127.598 152.32C139.642 152.32 149.775 144.039 152.67 132.922H162.398C165.293 144.097 175.426 152.32 187.47 152.32C192.276 152.32 196.735 150.988 200.557 148.73C202.062 153.072 202.525 157.589 201.715 162.105V162.105Z" fill="white"/>
                  </svg>
                </g>
              </svg>),
      },
      {
        title: "Pytest",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width={svgWidth} height={svgHeight} viewBox="0, 0, 1500, 1500">
                <g id="pytest_logo">
                  <g id="graphics">
                    <path d="M521.576,213.75 L952.616,213.75 C964.283,213.75 973.741,223.208 973.741,234.875 L973.741,234.875 C973.741,246.542 964.283,256 952.616,256 L521.576,256 C509.909,256 500.451,246.542 500.451,234.875 L500.451,234.875 C500.451,223.208 509.909,213.75 521.576,213.75 z" fill="#696969" id="horizontal_bar"/>
                    <g id="top_bars">
                      <path d="M525.333,171 L612,171 L612,191 L525.333,191 L525.333,171 z" fill="#009FE3"/>
                      <path d="M638.667,171 L725.333,171 L725.333,191 L638.667,191 L638.667,171 z" fill="#C7D302"/>
                      <path d="M750.5,171 L837.167,171 L837.167,191 L750.5,191 L750.5,171 z" fill="#F07E16"/>
                      <path d="M861.861,171 L948.528,171 L948.528,191 L861.861,191 L861.861,171 z" fill="#DF2815"/>
                    </g>
                    <g id="bottom_bars">
                      <path d="M861.861,278 L948.528,278 L948.528,424.5 L861.861,424.5 L861.861,278 z" fill="#DF2815"/>
                      <path d="M750.5,278 L837.328,278 L837.328,516 L750.5,516 L750.5,278 z" fill="#F07E16"/>
                      <path d="M638.667,278 L725.328,278 L725.328,634.5 L638.667,634.5 L638.667,278 z" fill="#C7D302"/>
                      <path d="M525.333,278 L612,278 L612,712.5 L525.333,712.5 L525.333,278 z" fill="#009FE3"/>
                    </g>
                  </g>
                  <g id="pytest">
                    <path d="M252.959,1173.846 Q240.139,1173.846 229.71,1171.021 Q219.28,1168.196 210.914,1163.525 Q202.549,1158.853 196.139,1152.552 Q189.729,1146.25 184.732,1139.297 L182.124,1139.297 Q182.776,1146.685 183.428,1153.421 Q183.862,1159.07 184.297,1165.046 Q184.732,1171.021 184.732,1174.498 L184.732,1276.404 L145.186,1276.404 L145.186,930.921 L177.344,930.921 L182.993,963.079 L184.732,963.079 Q189.729,955.474 196.03,948.847 Q202.332,942.22 210.697,937.331 Q219.063,932.442 229.492,929.509 Q239.922,926.575 252.959,926.575 Q273.384,926.575 290.115,934.397 Q306.846,942.22 318.688,957.756 Q330.53,973.292 337.048,996.324 Q343.567,1019.356 343.567,1049.776 Q343.567,1080.413 337.048,1103.554 Q330.53,1126.695 318.688,1142.339 Q306.846,1157.984 290.115,1165.915 Q273.384,1173.846 252.959,1173.846 z M245.354,959.385 Q228.84,959.385 217.433,964.383 Q206.025,969.38 198.964,979.593 Q191.902,989.805 188.534,1005.015 Q185.166,1020.225 184.732,1040.867 L184.732,1049.776 Q184.732,1071.722 187.665,1088.779 Q190.598,1105.835 197.66,1117.46 Q204.722,1129.085 216.455,1135.06 Q228.189,1141.036 245.789,1141.036 Q275.122,1141.036 288.92,1117.352 Q302.717,1093.667 302.717,1049.341 Q302.717,1004.146 288.92,981.766 Q275.122,959.385 245.354,959.385 z" fill="#696969"/>
                    <path d="M370.293,930.921 L411.36,930.921 L458.076,1064.117 Q461.118,1072.808 464.269,1082.369 Q467.42,1091.929 470.136,1101.49 Q472.852,1111.05 474.807,1119.959 Q476.763,1128.868 477.632,1136.473 L478.936,1136.473 Q480.022,1131.041 482.412,1121.697 Q484.802,1112.354 487.736,1101.816 Q490.669,1091.277 493.82,1081.065 Q496.97,1070.853 499.36,1063.682 L542.6,930.921 L583.45,930.921 L489.148,1200.572 Q483.064,1218.172 476.002,1232.187 Q468.941,1246.202 459.597,1255.979 Q450.254,1265.757 437.651,1271.081 Q425.049,1276.404 407.666,1276.404 Q396.367,1276.404 388.11,1275.209 Q379.854,1274.014 373.987,1272.71 L373.987,1241.204 Q378.55,1242.291 385.503,1243.051 Q392.456,1243.812 400.061,1243.812 Q410.491,1243.812 418.096,1241.313 Q425.701,1238.814 431.35,1234.034 Q437,1229.253 441.019,1222.3 Q445.039,1215.347 448.298,1206.438 L460.684,1171.673 z" fill="#696969"/>
                    <path d="M695.568,1141.47 Q699.479,1141.47 704.368,1141.036 Q709.257,1140.601 713.82,1139.949 Q718.383,1139.297 722.186,1138.428 Q725.988,1137.559 727.944,1136.907 L727.944,1166.893 Q725.119,1168.196 720.773,1169.5 Q716.428,1170.804 711.213,1171.781 Q705.998,1172.759 700.349,1173.302 Q694.699,1173.846 689.267,1173.846 Q675.795,1173.846 664.279,1170.369 Q652.763,1166.893 644.398,1158.418 Q636.032,1149.944 631.252,1135.495 Q626.472,1121.045 626.472,1099.1 L626.472,960.689 L592.792,960.689 L592.792,943.089 L626.472,926.141 L643.42,876.165 L666.235,876.165 L666.235,930.921 L726.206,930.921 L726.206,960.689 L666.235,960.689 L666.235,1099.1 Q666.235,1120.176 673.079,1130.823 Q679.924,1141.47 695.568,1141.47 z" fill="#009FE3"/>
                    <path d="M868.527,1173.846 Q844.626,1173.846 824.853,1165.806 Q805.08,1157.767 790.848,1142.339 Q776.616,1126.912 768.793,1104.097 Q760.971,1081.282 760.971,1051.949 Q760.971,1022.398 768.142,999.148 Q775.312,975.899 788.349,959.711 Q801.386,943.523 819.529,935.049 Q837.673,926.575 859.619,926.575 Q881.13,926.575 898.295,934.289 Q915.461,942.002 927.412,956.017 Q939.362,970.032 945.772,989.697 Q952.182,1009.361 952.182,1033.262 L952.182,1057.815 L801.821,1057.815 Q802.907,1099.751 819.529,1119.524 Q836.152,1139.297 868.962,1139.297 Q880.043,1139.297 889.495,1138.211 Q898.947,1137.125 907.747,1135.06 Q916.547,1132.996 924.804,1129.845 Q933.061,1126.695 941.535,1122.784 L941.535,1157.984 Q932.844,1162.112 924.478,1165.154 Q916.113,1168.196 907.313,1170.152 Q898.513,1172.107 889.061,1172.977 Q879.609,1173.846 868.527,1173.846 z M858.749,959.385 Q833.979,959.385 819.529,976.333 Q805.08,993.282 802.69,1025.657 L909.594,1025.657 Q909.594,1010.882 906.661,998.605 Q903.727,986.329 897.535,977.637 Q891.342,968.946 881.782,964.166 Q872.221,959.385 858.749,959.385 z" fill="#009FE3"/>
                    <path d="M1155.126,1104.097 Q1155.126,1121.48 1148.825,1134.517 Q1142.524,1147.554 1130.682,1156.354 Q1118.84,1165.154 1102.109,1169.5 Q1085.378,1173.846 1064.518,1173.846 Q1040.834,1173.846 1023.886,1170.043 Q1006.938,1166.241 994.118,1158.853 L994.118,1122.784 Q1000.854,1126.26 1009.111,1129.628 Q1017.368,1132.996 1026.494,1135.604 Q1035.62,1138.211 1045.289,1139.841 Q1054.958,1141.47 1064.518,1141.47 Q1078.642,1141.47 1088.528,1139.08 Q1098.415,1136.69 1104.608,1132.236 Q1110.8,1127.781 1113.625,1121.371 Q1116.45,1114.961 1116.45,1107.139 Q1116.45,1100.403 1114.277,1094.971 Q1112.104,1089.539 1106.346,1084.216 Q1100.588,1078.892 1090.593,1073.46 Q1080.598,1068.028 1064.953,1061.292 Q1049.308,1054.556 1036.815,1048.038 Q1024.321,1041.519 1015.629,1033.479 Q1006.938,1025.44 1002.266,1014.902 Q997.595,1004.363 997.595,989.805 Q997.595,974.595 1003.57,962.753 Q1009.545,950.911 1020.41,942.872 Q1031.274,934.832 1046.484,930.704 Q1061.694,926.575 1080.38,926.575 Q1101.457,926.575 1118.948,931.138 Q1136.44,935.701 1152.084,943.089 L1138.395,975.03 Q1124.272,968.729 1109.388,964.057 Q1094.504,959.385 1079.077,959.385 Q1056.913,959.385 1046.266,966.664 Q1035.62,973.943 1035.62,987.415 Q1035.62,995.02 1038.118,1000.669 Q1040.617,1006.319 1046.701,1011.316 Q1052.785,1016.314 1062.997,1021.42 Q1073.21,1026.526 1088.42,1032.828 Q1104.064,1039.346 1116.341,1045.865 Q1128.618,1052.383 1137.309,1060.531 Q1146,1068.68 1150.563,1079.109 Q1155.126,1089.539 1155.126,1104.097 z" fill="#009FE3"/>
                    <path d="M1285.28,1141.47 Q1289.191,1141.47 1294.08,1141.036 Q1298.969,1140.601 1303.532,1139.949 Q1308.095,1139.297 1311.898,1138.428 Q1315.7,1137.559 1317.656,1136.907 L1317.656,1166.893 Q1314.831,1168.196 1310.485,1169.5 Q1306.14,1170.804 1300.925,1171.781 Q1295.71,1172.759 1290.06,1173.302 Q1284.411,1173.846 1278.979,1173.846 Q1265.507,1173.846 1253.991,1170.369 Q1242.475,1166.893 1234.109,1158.418 Q1225.744,1149.944 1220.964,1135.495 Q1216.183,1121.045 1216.183,1099.1 L1216.183,960.689 L1182.504,960.689 L1182.504,943.089 L1216.183,926.141 L1233.132,876.165 L1255.947,876.165 L1255.947,930.921 L1315.917,930.921 L1315.917,960.689 L1255.947,960.689 L1255.947,1099.1 Q1255.947,1120.176 1262.791,1130.823 Q1269.636,1141.47 1285.28,1141.47 z" fill="#009FE3"/>
                  </g>
                </g>
              </svg>),
      },
    ],
    Others: [
      {
        title: "Git",
        icon:(<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
              </svg>),
      },
      {
        title: "Github",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
              </svg>),
      },
      {
        title: "Gitlab",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#E24329" d="m124.755 51.382-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121 4.581 4.581 0 0 0-5.236.281 4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31 4.581 4.581 0 0 0-5.236-.281 4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758 26.218-19.634.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z"></path><path fill="#FC6D26" d="m124.755 51.382-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z"></path><path fill="#FCA326" d="m40.066 107.771 12.893 9.758 7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93 12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z"></path><path fill="#FC6D26" d="M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046.157.111 26.061 19.516L64 89.655 26.42 61.271z"></path>
              </svg>),
      },
      {
        title: "Postman",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">         
                <path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"></path>
                <path fill="#fff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"></path>
                <path fill="#f37036" d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"></path>
              </svg>
            ),
      },
      {
        title: "Insomnia",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <defs><linearGradient id="a" x1="16.181" x2="16.181" y1="28.39" y2="5.61" gradientTransform="matrix(4 0 0 4 0 -4)" gradientUnits="userSpaceOnUse"><stop stop-color="#7400E1"></stop><stop offset="1" stop-color="#4000BF"></stop></linearGradient></defs><path fill="#fff" d="M64 124.746c33.549 0 60.746-27.197 60.746-60.746 0-33.549-27.197-60.746-60.746-60.746C30.45 3.254 3.254 30.451 3.254 64c0 33.55 27.197 60.746 60.746 60.746z"></path><path fill="#4000bf" d="M64 0C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-35.346-28.654-64-64-64Zm0 6.509c31.752 0 57.492 25.74 57.492 57.491 0 31.752-25.74 57.492-57.492 57.492S6.508 95.752 6.508 64 32.248 6.509 64 6.509z"></path><path fill="url(#a)" d="M64.723 18.44c25.162 0 45.56 20.398 45.56 45.56 0 25.162-20.398 45.56-45.56 45.56-25.161 0-45.559-20.398-45.559-45.56a45.41 45.41 0 0 1 3.427-17.366c3.224 4.391 8.425 7.242 14.29 7.242 9.786 0 17.718-7.932 17.718-17.718 0-5.866-2.85-11.066-7.242-14.29a45.426 45.426 0 0 1 17.366-3.427z"></path>
              </svg>),
      },
      {
        title: "Intellij",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">   
                <defs>
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="11.16" y1="59.21" x2="58.94" y2="56.78" gradientTransform="rotate(.104) scale(1.21905)">
                    <stop offset=".09" stop-color="#fc801d"></stop>
                    <stop offset=".23" stop-color="#b07f61"></stop>
                    <stop offset=".41" stop-color="#577db3"></stop>
                    <stop offset=".53" stop-color="#1e7ce6"></stop>
                    <stop offset=".59" stop-color="#087cfa"></stop>
                  </linearGradient>
                  <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="89.05" y1="54.12" x2="73.12" y2="6.52" gradientTransform="rotate(.104) scale(1.21905)">
                    <stop offset="0" stop-color="#fe2857"></stop>
                    <stop offset=".08" stop-color="#cb3979"></stop>
                    <stop offset=".16" stop-color="#9e4997"></stop>
                    <stop offset=".25" stop-color="#7557b2"></stop>
                    <stop offset=".34" stop-color="#5362c8"></stop>
                    <stop offset=".44" stop-color="#386cda"></stop>
                    <stop offset=".54" stop-color="#2373e8"></stop>
                    <stop offset=".66" stop-color="#1478f2"></stop>
                    <stop offset=".79" stop-color="#0b7bf8"></stop>
                    <stop offset="1" stop-color="#087cfa"></stop>
                  </linearGradient>
                  <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.72" y1="26.61" x2="78.8" y2="125.99" gradientTransform="rotate(.104) scale(1.21905)">
                    <stop offset="0" stop-color="#fe2857"></stop>
                    <stop offset=".08" stop-color="#fe295f"></stop>
                    <stop offset=".21" stop-color="#ff2d76"></stop>
                    <stop offset=".3" stop-color="#ff318c"></stop>
                    <stop offset=".38" stop-color="#ea3896"></stop>
                    <stop offset=".55" stop-color="#b248ae"></stop>
                    <stop offset=".79" stop-color="#5a63d6"></stop>
                    <stop offset="1" stop-color="#087cfa"></stop>
                  </linearGradient>
                </defs>
                <path fill="url(#a)" d="M23.492 88.027 6.277 74.434 16.41 55.676l15.223 5.094Zm0 0"></path>
                <path fill="#087cfa" d="m121.988 36.68-2.105 67.78L74.8 122.517l-24.55-15.849Zm0 0"></path>
                <path fill="url(#b)" d="M121.988 36.68 99.68 58.44 71.035 23.297l14.14-15.899Zm0 0"></path>
                <path fill="url(#c)" d="m50.25 106.668-35.852 12.957 7.508-26.293 9.727-32.562L4.96 51.848 21.906 5.484l38.301 4.524L99.68 58.44Zm0 0"></path>
                <path fill="#000" d="M27.43 27.43h73.14v73.14H27.43Zm0 0"></path>
                <path fill="#fff" d="M36.547 86.746h27.43v4.574h-27.43Zm13.691-45.152v-4.996h-13.64v4.996h3.824v17.261h-3.824v5h13.64v-5h-3.816V41.594Zm13.078 22.648a10.802 10.802 0 0 1-5.351-1.219 12.299 12.299 0 0 1-3.559-2.875l3.766-4.207c.687.778 1.484 1.45 2.367 2a4.849 4.849 0 0 0 2.621.73 3.46 3.46 0 0 0 2.668-1.058 5.07 5.07 0 0 0 .977-3.449V36.57h6.093v17.86a12.384 12.384 0 0 1-.668 4.254 7.919 7.919 0 0 1-4.964 4.879 12.097 12.097 0 0 1-4.036.632"></path>
              </svg>),
      },
      {
        title: "Vscode",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={svgWidth} height={svgHeight} viewBox="0 0 48 48">
                <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
              </svg>),
      },
      {
        title: "Ubuntu",
        icon: (<svg width={svgWidth} height={svgHeight} viewBox="0 0 128 128">
                <path fill="#E95420" d="M104.663 0H24v128h80.663V0Z"></path><path fill="#fff" d="M42.443 90.31c4.611 0 8.35-3.768 8.35-8.416 0-4.648-3.739-8.416-8.35-8.416-4.612 0-8.35 3.768-8.35 8.416 0 4.648 3.738 8.416 8.35 8.416Zm34.778-18.454c4.612 0 8.35-3.768 8.35-8.416 0-4.648-3.738-8.416-8.35-8.416-4.611 0-8.35 3.768-8.35 8.416 0 4.648 3.739 8.416 8.35 8.416Zm-15.945 31.702c-6.016-1.299-11.042-5.17-13.868-10.662a11.934 11.934 0 0 1-7.14.883c3.419 8.464 10.67 14.611 19.573 16.535 1.953.422 3.943.627 5.93.614a12.107 12.107 0 0 1-2.444-7.037 20.048 20.048 0 0 1-2.048-.336l-.003.003Zm14.066 8.461c4.612 0 8.35-3.768 8.35-8.416 0-4.648-3.738-8.416-8.35-8.416-4.611 0-8.35 3.768-8.35 8.416 0 4.648 3.739 8.416 8.35 8.416Zm11.62-11.507c2.597-3.3 4.426-7.2 5.305-11.344a27.771 27.771 0 0 0-3.937-20.963 12.1 12.1 0 0 1-4.695 5.542 20.736 20.736 0 0 1 1.93 13.975 20.658 20.658 0 0 1-2.597 6.521 12.092 12.092 0 0 1 3.997 6.272l-.003-.003ZM41.8 69.824a11.785 11.785 0 0 1 3.156.256c1.361.294 2.64.813 3.812 1.549 3.76-5.45 9.826-8.72 16.399-8.842a12.213 12.213 0 0 1 2.534-6.826c-10.503-.838-20.708 4.625-25.905 13.866l.003-.003Z"></path>
              </svg>),
      },
    ]
  }];
  const languages = [
    {
        title: "French",
        icon: QuebecFlag,
        description: "First language, native speaker and writer."
    },
    {
        title: "English",
        icon: AmericanFlag,
        description: "Second language, fluent speaker and writer."
    },
  ];

  useEffect(() => {
    if (width < 576) {
      svgWidth = 12;
      svgHeight = 12;
    } else if (width < 768) {
      svgWidth = 24;
      svgHeight = 24;
    } else {
      svgWidth = 48;
      svgHeight = 48;
    }
    }, [width]);


  return (
    <Section>
      <div className="test-skills">
        <h2 className="skills-title">Skills</h2>
          {skills.map((skill, index) => ( // Fix This
            <div key={index}>
            <div className="skill-content">
            <h2>Programming Languages</h2>
            <div className="skill-display">
            {skill.Languages.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            <div className="skill-content">
            <h2>Frameworks</h2>
            <div className="skill-display">
            {skill.Frameworks.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            <div className="skill-content">
            <h2>Databases</h2>
            <div className="skill-display">
            {skill.Databases.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            <div className="skill-content">
            <h2>DevOps</h2>
            <div className="skill-display">
            {skill.DevOps.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            <div className="skill-content">
            <h2>Testing</h2>
            <div className="skill-display">
            {skill.Testing.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            <div className="skill-content">
            <h2>Others</h2>
            <div className="skill-display">
            {skill.Others.map((skill, index) => (
            <div className="skill-box" key={index}>
                <motion.div
                  className="skill-icon"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
                > {skill.icon} </motion.div>
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
            </div>
            ))}
            </div>
            </div>
            </div>
          ))}
        <div className="languages-section-content">
          <h2 className="languages-title">Languages</h2>
          <div className="languages-container">
            {languages.map((lng, index) => (
              <div className="language-box" key={index}>
                <motion.h3
                  className="language-title-content"
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
                  <div className="language-title-content-first">
                  <img src={lng.icon} style={{ width: '30px', height: 'auto' }} />
                  {lng.title}
                  </div>
                  <div className="language-title-content-second">
                    <center>
                    <p>{lng.description}</p>
                    </center>
                  </div>
                </motion.h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [ currentProject, setCurrentProject ] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const buttonGithub = () => {
    window.open(projects[currentProject].url, '_blank');
  }

  return (
    <Section>
      <div className="project-container">
        <button class="btn-github" onClick={buttonGithub}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
              fill="currentcolor"
            ></path>
          </svg>
          <span>View on Github</span>
        </button>
        <div className="project-container-buttons">
          <button className="project-button" onClick={previousProject}>
            ← Previous
          </button>
          <h2 className="project-title">Projects</h2>
          <button className="project-button" onClick={nextProject}>
            Next →
          </button>
        </div>
      </div>
      
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("meojbrgo");
  
  return (
    <Section>
      <h2 className="contact-title">Contact me</h2>
      <Contacts />
      <div className={`contact-form ${state.succeeded ? 'success' : ''}`}>
        {state.succeeded ? (
          <p className="success-message">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" id="name" className="form-input" />
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" id="email" className="form-input" />
            <ValidationError className="error-message" prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" id="message" className="form-textarea" />
            <ValidationError className="error-message" errors={state.errors} />
            <button disabled={state.submitting} className="submit-button">Submit</button>
          </form>
        )}
      </div>
    </Section>
  );
};

const Contacts = (props) => {
  const width = useContext(WindowWidthContext);

  const { background } = props;

  const githubLink = 'https://github.com/Francklin9999';
  const linkedinLink = 'https://www.linkedin.com/in/fongangf/';
  const emailLink = 'mailto:franckfongang99@gmail.com';
  const youtubeLink = 'https://www.youtube.com/@franckf6692';

  let svgWidth = 48;
  let svgHeight = 48;

  useEffect(() => {
    if (width < 768  === 0) {
      svgWidth = 28;
      svgHeight = 28
    } else {
      svgWidth = 48;
      svgHeight = 48
    }

    }, [width]);

  const contacts = [
      {
        github: {
          name: "Github",
          link: githubLink,
          icon: (
            <svg width={svgWidth} height={svgHeight} viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="team-collaboration/version-control/github" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="container" transform="translate(2.000000, 2.000000)" fill-rule="nonzero">
                      <rect id="mask" stroke="#000000" stroke-width="2" fill="#000000" x="-1" y="-1" width="71" height="71" rx="14">
                      </rect>
                      <path d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z" id="Shape" fill="#FFFFFF">
                      </path>
                  </g>
                </g>
            </svg>
          ),
        },
        linkedin: {
          name: "Linkedin",
          link: linkedinLink,
          icon: (
            <svg width={svgWidth} height={svgHeight} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <g fill="none">
                <path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069"/>
                <path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#ffffff"/> 
              </g>
            </svg>
            ),
      },
      email: {
        name: "Email",
        link: emailLink,
        icon: (
          <svg width={svgWidth} height={svgHeight} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect y="6" width="48" height="36" rx="2" ry="2" fill="#38b1e7"/><path d="M47.84,40.56A2.11,2.11,0,0,1,46,41.9L2,42H2A2,2,0,0,1,.15,40.78a2,2,0,0,1,.44-2.16L17.88,21.73a9.23,9.23,0,0,1,12.56.07L47.4,38.41A2,2,0,0,1,47.84,40.56Z" fill="#299acc"/><path d="M47.84,7.44A2.11,2.11,0,0,0,46,6.1L2,6H2A2,2,0,0,0,.15,7.22,2,2,0,0,0,.59,9.38L17.88,26.27a9.23,9.23,0,0,0,12.56-.07L47.4,9.59A2,2,0,0,0,47.84,7.44Z" fill="#6ac1e7"/></svg>

          ),
        },
        youtube: {
          name: "Youtube",
          link: youtubeLink,
          icon: (
            <svg width={svgWidth} height={svgHeight} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="red" d="M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z"/><path fill="#ffffff" d="M6.593 10.11l3.644-2.098-3.644-2.11v4.208z"/></svg>
          ),
        },
    },
  ]

  return (
    <div className="contacts-link">
      {contacts[0] && Object.entries(contacts[0]).map(([key, { name, link, icon }]) => (
        <div className="contacts-link-content">
          <a key={key} href={link} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
          <p className={`contacts-link-content-1 ${background === "yes" ? 'contacts-yes' : 'contacts-no'}`} >{name}</p>
        </div>
      ))}
    </div>
  );
};

 