const dataFetchServer = async (props: any) => {
  const searchparams = await props.searchParams;
  const UserName = searchparams.name;
  console.log(UserName);
  const data = await fetch(`https://api.genderize.io/?name=${UserName}`);
  const res = await data.json();
  console.log(res);
  return (
    <>
      <h1>datafetch server comp {res.name}</h1>
    </>
  );
};
export default dataFetchServer;
