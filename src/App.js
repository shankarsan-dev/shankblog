
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to my blog!"
  const link = "https://www.shopmusical.free.nf";
  return (
 
    <div className="App">
      <Navbar></Navbar>
       <div className = "content">
          <Home></Home>
        <h1 >{title}</h1>
        {/* <p>{10}</p> */}
        <p>{"hello Blogger!"}</p>
        {/* <p>{[1,2,3,4,5]}</p>
        <p>{Math.random(0,5)}</p> */}
        <a href={link}>My shop </a>
        </div>
      </div>
  );
}

export default App;
