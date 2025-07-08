/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

//used to make component clientside

const ClientComp: React.FC = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setpostData(data);
    // console.log(data);
    return data;
  };
  const [postdata, setpostData] = useState<any[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Client Comp</h1>
      {/* <button
        className="bg-amber-400 ☐ te text-black p-5"
        onClick={() => alert("hii")}
      >
        Click Me
      </button> */}
      <ul className="grid grid-cols-4 border">
        {postdata.map((currelem, index) => {
          return (
            <li className=" border p-4 bg-amber-300 m-2" key={index}>
              {currelem.body}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ClientComp;
