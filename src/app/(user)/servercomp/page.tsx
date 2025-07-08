/* eslint-disable @typescript-eslint/no-explicit-any */
// This is a Server Component by default in Next.js
const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const data = await res.json();

  return (
    <>
      <h1>Server Component</h1>
      <ul className="grid grid-cols-4 border">
        {data.map((currelem: any, index: number) => (
          <li className="border p-4 bg-amber-300 m-2" key={index}>
            {currelem.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ServerComp;
