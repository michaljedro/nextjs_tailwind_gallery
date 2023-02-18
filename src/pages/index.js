import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Home Page </h1>
      <Link href="/posts">
        <p>Click here to see posts</p>
      </Link>
    </div>
  );
}

export default Home;
