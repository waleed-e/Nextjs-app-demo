import Link from "next/link";

export default async function PostsPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 120,
      },
    });
    const posts = await response.json();
    const postsJsx = posts.map((post) => {
      return (
        <Link href={`/posts/${post.id}`}>
        <div style={{ width: "70%", background: "#fff", height: "200px", borderRadius: "20px", marginBottom: "20px", color: "#000" }}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        </Link>
      );
    });
  
    return (
     
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>Posts Page</h1>
     
        {/* POSTS */}
        <div >{postsJsx}</div>
        {/* ############# POSTS ########### */}
      </div>
      
    );
  }