import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const [visibleMessage, setVisibleMessage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisibleMessage(1), 7000),
      setTimeout(() => setVisibleMessage(2), 13000),
      setTimeout(() => setVisibleMessage(3), 15000),
      setTimeout(() => setVisibleMessage(4), 18000),
      setTimeout(() => setVisibleMessage(5), 20000),
      setTimeout(() => navigate('/index'), 21000),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="typewriter">
      <main>
        <h3 id="learn">So, you want to learn about Franck?</h3>
        <h3 id="toSay">Ummmh what can I say?</h3>
        {visibleMessage >= 1 && <h3 id="quality-1">He’s incredibly relentless and dedicated.</h3>}
        {visibleMessage >= 2 && <h3 id="quality-2">His self-learning skills and creativity are unmatched.</h3>}
        {visibleMessage >= 3 && <h3 id="quality-3">He's the most friendly person even though he doesn't look like it.</h3>}
        {visibleMessage >= 4 && <h3 id="end-message1">There's so much to say about Franck that I could go all day.</h3>}
        {visibleMessage >= 5 && <h3 id="end-message2">There’s so much more to discover—let’s dive into Franck’s story!</h3>}
      </main>
    </div>
  );
};

export default Home;
