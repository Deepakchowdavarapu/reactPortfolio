import React, { useEffect, useState } from 'react'; // Correctly import useEffect and useState
import './home.css';
import profilePhoto from '../../profilephoto.jpg'; // Correctly import the image

const Home = () => {
  const text = ["Web Developer", "Learner", "Designer", "Backend Developer"];
  const typingSpeed = 200;
  const deletingSpeed = 50;
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0); 

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text[textIndex].length) {
          setDisplayedText((prev) => prev + text[textIndex].charAt(prev.length));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % text.length);
        }
      }
    };

    const timerId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timerId);
  }, [displayedText, isDeleting, textIndex, text, typingSpeed, deletingSpeed]);

  return (
    <section id="home">
      <div id="info">
        <img src={profilePhoto} alt="Deepak CH" className="profile-photo" />
        <div className="text-info"> 
          <h1>Deepak CH</h1>
          <h3>{displayedText} |</h3>
          <button id="reach-out-button">Know more</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
