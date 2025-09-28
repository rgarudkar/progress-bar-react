import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


export const ProgressBar = ({ id }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressValue = Math.min((elapsed / duration) * 100, 100);
      setProgress(progressValue);
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [id]);
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ transform: `translateX(${progress - 100}%)` }}
      ></div>
    </div>
  );
}

function App() {
 const [bar,setBar] = useState([]);
 const addBar = () =>{
  setBar([...bar, Date.now()]);
 }
  return (
    <div className="container">
     <button onClick={addBar} className='add-button'>Add</button>
      {bar.map((barId)=><ProgressBar key={barId} id={barId}/>)}
    </div>
  );
}

export default App;
