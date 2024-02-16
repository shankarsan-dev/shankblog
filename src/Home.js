import{ useState } from 'react';
const Home = () => {

   
    // const [changeName,setName] = useState("shankarsan");

    // const handleClick = ()=>{
    //     setName("sevak");
    //  }

    const [blogs,setBlogs] = useState([
        {title:"my new site 1",body:"lorem asd sjilsb jslkjfnl lkjs lkj lkjsldkjfsdfnv .....",author:"shankarsan",id:1},
        {title:"my new site 2",body:"lorem sfdljdfslkfn jfjsjdf odsij jvisloa asiol ksio siold fosls jsisl.....",author:"radhe",id:2},
        {title:"my new site 3",body:"lorem sewo islo loroe sitio sijok.....",author:"gopi",id:3},
        {title:"my new site 4",body:"lorem sil now rinslg lijkn.....",author:"gopal",id:4}
    ]);
    
    return (

        <div className="home">
            <h2>HomePage</h2>
{/* <p> {changeName}</p>
            <button onClick={handleClick}>Click Me</button> */}

            {blogs.map((blog)=>(
                <div className='blogPreview' key = {blog.id}>

                <h2>{blog.title}</h2>
                <p className='author'>{blog.author}</p>
                <p>{blog.body}</p>
                </div>
                
            ))}
        </div>

         );
    }
export default Home;
