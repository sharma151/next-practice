import { useSearchParams } from "next/navigation";

const PageList = () => {
  const searchparams = useSearchParams || {};
  console.log(searchparams);
  return <></>;
};

export default PageList;
