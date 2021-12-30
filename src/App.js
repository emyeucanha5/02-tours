import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [ref, setRef] = useState(false);
const fetchApi = async() =>{
  setLoad(true);
  try{
    let x = await fetch(url);
    let y = await x.json();
    setData(y);
    // console.log(y);
  }catch{

  }finally{
    setLoad(false);
  }
}
  useEffect(() => {
    fetchApi();
  }, []);
  function refresh(){
    setRef(true);
  }
  function handlerefresh(){
    setRef(false);
    fetchApi();
  }
  return <>{ref?<main>
     <div className="title">
       <h2>no tours left</h2>
       <button onClick ={handlerefresh} className="btn">refresh</button>
     </div> 
  </main>
  :<>
  {load?<Loading/> : 
  <main>
    <section>
       <div className = "title">
         <h2>Our Tours</h2>
        <div className = "underline"></div>
       </div>
        <div>
          <Tours  data = {data} refresh = {refresh} />
        </div>
    </section>
  </main>
  }
  </>}</>
}

export default App
 