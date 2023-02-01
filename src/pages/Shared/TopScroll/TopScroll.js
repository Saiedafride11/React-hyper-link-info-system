import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './TopScroll.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TopScroll = () => {
  const { pathname } = useLocation();
  const [percentHeight, setPercentHeight] = useState(0);
  const [showTopScroll, setShowTopScroll] = useState(false);

  // router top scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // top scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

const handleScroll = (e) => {
  const scrollHeight = e.target.documentElement.scrollHeight;
  const currentHeight = Math.ceil( e.target.documentElement.scrollTop + window.innerHeight);
  const scrollPercentHeight = ( currentHeight * 100 ) / scrollHeight;
  setPercentHeight(scrollPercentHeight);

  if(scrollPercentHeight > 30){
    setShowTopScroll(true);
  }
  else{
    setShowTopScroll(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {
          showTopScroll &&
          <div className="scroll-to-top">
              <button onClick={scrollToTop} style={{background: `conic-gradient(#d00000 ${percentHeight * 3.6}deg, #ededed 0deg)`}}>
                    <span>
                        <FontAwesomeIcon icon={faArrowUp}/>
                    </span>
              </button>
          </div>
      }
    </>
  )
}

export default TopScroll