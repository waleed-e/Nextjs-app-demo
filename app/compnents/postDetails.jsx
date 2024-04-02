import { resolve } from "styled-jsx/css";

export default async function PostDetails({postId}){
    
// const postId = params.postId;
await new Promise ((resolve)=>{
    setTimeout(() => {
        resolve();
    }, 2000)
})
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    next: {
      revalidate: 120,
    },
  });
  const post = await response.json();
   
    return(
        <div>


<div style={{ width: "70%", background: "#fff", height: "200px", borderRadius: "20px", marginBottom: "20px", color: "#000" }}>
    <h1>{post.title}</h1>
    <hr/>
    <p>{post.title}</p>
</div>

        </div>
    )
}