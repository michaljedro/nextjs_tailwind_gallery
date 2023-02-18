import Link from "next/link";
function PostList({ data }) {
  return (
    <>
      <h1>Post List</h1>
      {data.map((item) => {
        const { id, title, body } = item;
        return (
          <div key={id}>
            <Link href={`/posts/${id}`} passHref>
              <h2>
                # {id} - {title}
              </h2>
            </Link>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}
