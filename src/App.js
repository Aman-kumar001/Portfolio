import './App.css';
import './mobileCss1.css';
import './linksCss.css';
import Right from './components/right';
import Left from './components/left';
import { useEffect, useState } from 'react';
import LeftMobile from './components/left_mobile';
import RightMobile from './components/right_mobile';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function App() {
  const { height, width } = useWindowDimensions();

  const [mobLeft, setMobleft]=useState(false);
  console.log(mobLeft)

  return (
    
    <div className="main">
    { width>800 &&
    <>
      <Left />
      <Right />
    </>
    }
    {width<=800 && 
      <> 
       {mobLeft===true && <div><LeftMobile 
       setMobleft={setMobleft}  /> </div>} 
       {  mobLeft===false &&
         <RightMobile setMobleft={setMobleft} />}
      </>
    }
    </div>
  );
}

export default App;
