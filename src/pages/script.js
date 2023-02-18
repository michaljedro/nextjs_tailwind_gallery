function User({ data }) {
  return (
    <>
      <h1>Script train</h1>
      {data.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default User;

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
