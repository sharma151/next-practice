// app/products/pageList.tsx
"use client";

import { useSearchParams } from "next/navigation";

const PageList = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  console.log("SearchParams in client:", { category, sort, page });

  return (
    <>
      <h1>client</h1>
    </>
  );
};

export default PageList;
