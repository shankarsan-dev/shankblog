import{ useState } from 'react';
import BlogList from './BlogList';
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
    const handleDelete = (id)=>{
       const newBlogs = blogs.filter(blog=>blog.id !== id);
       setBlogs(newBlogs);
    }
    
    return (
        
        <div className="home">
            <h2>HomePage</h2>
{/* <p> {changeName}</p>
            <button onClick={handleClick}>Click Me</button> */}

            {/* {blogs.map((blog)=>(
                <div className='blogPreview' key = {blog.id}>

                <h2>{blog.title}</h2>
                <p className='author'> Written by: {blog.author}</p>
                <p>{blog.body}</p>

                </div>
                
            ))} */}
            <h2>All blogs</h2>
            <BlogList blogs = {blogs} title = "all-blogs" handleDelete={handleDelete}/>
            {/* <h2>Radhe's blogs</h2>
            <BlogList blogs = {blogs.filter((blog)=>blog.author ==="radhe")}/> */}



        </div>
       
         );
    }
export default Home;
