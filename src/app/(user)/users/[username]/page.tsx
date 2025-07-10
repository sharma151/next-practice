interface SingleProfileProps {
  params: {
    username: string;
    [key: string]: string;
  };
}

const SingleProfile = async (props: SingleProfileProps) => {
  const user = props.params;
  return (
    <>
      <h1>{user.username}</h1>
    </>
  );
};
export default SingleProfile;
