import{ useState } from 'react';
const Home = () => {

   
    const [changeName,setName] = useState("shankarsan");

    const handleClick = ()=>{
        setName("sevak");
     }
    
    return (

        <div className="home">
            <h2>HomePage</h2>
<p> {changeName}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
         );
    }
export default Home;