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

  return (
    <div className="home-container">
      <div className="animated-text" id="animatedText"></div>
      <div className="cursor" id="cursor"></div>
    </div>
  );
}


export default Home;
