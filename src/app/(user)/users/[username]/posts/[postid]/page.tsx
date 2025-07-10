// // app/users/[username]/posts/[postid]/page.tsx

"use client"; // used for making client side rendering

// interface PostPageProps {
//   params: {
//     username: string;
//     postid: string;
//   };
// }

// Example for normal username and  post id
//starts here

// const PostPage = async ({ params }: PostPageProps) => {
//   const { username, postid } = params;
//   console.log(params);
//   return (
//     <div>
//       <h1>User: {username}</h1>
//       <h2>Post ID: {postid}</h2>
//     </div>
//   );
// };

// export default PostPage;

//ends here

// app/users/[username]/posts/[postid]/page.tsx

// example with api integration
//starts here
// const PostPage = async ({ params }: PostPageProps) => {
//   const { username, postid } = params;

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postid}`
//   );
//   const post = await res.json();

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Username: {username}</h1>
//       <h2 className="text-xl font-semibold">Post Title:</h2>
//       <p>{post.title}</p>
//       <h3 className="text-lg font-semibold">Content:</h3>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// export default PostPage;
// ends here


import { useParams } from "next/navigation";

const ClientPostPage = () => {
  const params = useParams();

  // These will be strings (from the dynamic URL)
  const username = params.username as string;
  const postid = params.postid as string;

  return (
    <div>
      <h1>User: {username}</h1>
      <h2>Post ID: {postid}</h2>
    </div>
  );
};

export default ClientPostPage;
