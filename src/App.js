import {useState} from 'react';
import './App.css';
import data from './data.js';
import Tours from './component/Tours'




function App(){
  const [Tour , setTour] = useState(data)

  function removeTour(id){
    const newTours = Tour.filter(tour => tour.id !==id);
    setTour(newTours);

  }
  function typeHandler(typ){
    if(typ==="All"){
      setTour(data);
    }
    else{
    const newTours = data.filter(tour=>tour.type===typ);
    setTour(newTours);
    }

  }
  if(Tour.length===0){
    return (
    <div className='reset-container'>
      <div className='titles'>No tour Left</div>
      <div className='reset-btn' >
        <button onClick={()=>setTour(data)}>Reset</button>
      </div>

    </div>
    )

  }

  return (
   <div className='App'>
    <Tours tours = {Tour} removeTour={removeTour} typeHandler={typeHandler}></Tours>
   </div>
    
  );
}

export default App;
