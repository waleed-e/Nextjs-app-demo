import PostDetails from "@/app/compnents/postDetails";
import { Suspense } from "react";
import { resolve } from "styled-jsx/css";

export default async function PostDetailsPage({params}){
    
const postId = params.postId;
const loadingJsx = (<div><h1>Loading...</h1></div>)
    
    return(
        <div>
            <h1 style={{marginBottom:"40px"}}>Post Details</h1>
<Suspense fallback={loadingJsx}>
<PostDetails postId={postId}/>
</Suspense>

        </div>
    )
}