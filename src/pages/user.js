import User from "../components/user";

function UserList({ data }) {
  console.log(data);
  return (
    <>
      <h1>NextJS </h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <User />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
export default UserList;
