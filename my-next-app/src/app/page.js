// "use client"

// import styles from "./page.module.css";
// import { useEffect, useRef } from 'react';


// export default function Home() {

//   const isTyping = useRef(false);

//   function waitForTimeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   const text = [
//     ">> Curious about who Franck is? Let me tell you!",
//     ">> He’s the master of turning ideas into code.",
//     ">> Spoiler alert: He created multiple crazy programs!",
//     ">> I bet you’re intrigued by what he can create.",
//     ">> Let's dive into Franck's world!",
//   ];

//   async function typeLine(line) {
//     for (let i = 0; i < line.length; i++) {
//       document.getElementById("animatedText").innerHTML += line[i];
//       await waitForTimeout(75); 
//     }
//     document.getElementById("animatedText").innerHTML += '\n' + '\n'; 
//     await waitForTimeout(1000); 
//   }

//   async function type() {
//     if (isTyping.current) return; 
//     isTyping.current = true;

//     for (let i = 0; i < text.length; i++) { 
//       await typeLine(text[i]); 
//     }

//     isTyping.current = false;
//     // router.push('/index');
//   }

//     useEffect(() => {
//       type();
//     }, []);

//   return (
//     <div className={styles.homeContainer}>
//       <div className={styles.animatedtext} id={styles.animatedText}></div>
//       <div className={styles.cursor} id={styles.cursor}></div>
//     </div>
//   );
// }

"use client"

import styles from "./page.module.css";
import { useEffect, useRef, useState } from 'react';

export default function Home() {

  const isTyping = useRef(false);
  const [animatedText, setAnimatedText] = useState("");

  function waitForTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const text = [
    ">> Curious about who Franck is? Let me tell you!",
    ">> He’s the master of turning ideas into code.",
    ">> Spoiler alert: He created multiple crazy programs!",
    ">> I bet you’re intrigued by what he can create.",
    ">> Let's dive into Franck's world!",
  ];

  async function typeLine(line) {
    for (let i = 0; i < line.length; i++) {
      setAnimatedText(prev => prev + line[i]);
      await waitForTimeout(75); 
    }
    setAnimatedText(prev => prev + '\n\n');
    await waitForTimeout(1000); 
  }

  async function type() {
    if (isTyping.current) return;
    isTyping.current = true;

    for (let i = 0; i < text.length; i++) {
      await typeLine(text[i]);
    }

    isTyping.current = false;
    // router.push('/index'); // Uncomment this line if needed
  }

  useEffect(() => {
    type();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.animatedText}>{animatedText}</div>
      <div className={styles.cursor}></div>
    </div>
  );
}
