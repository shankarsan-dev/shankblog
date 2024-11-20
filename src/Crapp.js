
import Home from "./Home";
import Navbar from "./Navbar";

const Crap = ()=>{
  const title = "Welcome to my blog!"
  return (
 
    <div className="App">
      <Navbar></Navbar>
       <div className = "content">
          <Home></Home>
        {/* <h1 >{title}</h1>
    */}
     
        </div>
      </div>
  );
}

export default Crap;
