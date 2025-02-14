import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {

  function waitForTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const navigate = useNavigate();

  const text = [
    ">> Curious about who Franck is? Let me tell you!",
    ">> He’s the master of turning ideas into code.",
    ">> Spoiler alert: He created multiple crazy programs!",
    ">> I bet you’re intrigued by what he can create.",
    ">> Let's dive into Franck's world!",
  ];

  const isTyping = useRef(false);

  async function typeLine(line) {
    for (let i = 0; i < line.length; i++) {
      document.getElementById("animatedText").innerHTML += line[i];
      await waitForTimeout(75); 
    }
    document.getElementById("animatedText").innerHTML += '\n' + '\n'; 
    await waitForTimeout(1000); 
  }

  async function type() {
    if (isTyping.current) return; 
    isTyping.current = true;

    for (let i = 0; i < text.length; i++) { 
      await typeLine(text[i]); 
    }

    isTyping.current = false;
    navigate('/index');
  }

    useEffect(() => {
      type();
    }, []);

    function skipToMainPage() {
      navigate('/index');
    } 

  return (
    <div className="home-container">
    <div className="home-text-container">
      <div className="animated-text" id="animatedText"></div>
      <div className="cursor" id="cursor"></div>
    </div>
    {/* <div>
      <button className="home-skip-button" onClick={() => skipToMainPage()}>
        <span>Skip to main page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 74 74"
          height="34"
          width="34"
        >
          <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
          <path
            fill="black"
            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
          ></path>
        </svg>
        </button>
    </div> */}
    </div>
  );
}


export default Home;
