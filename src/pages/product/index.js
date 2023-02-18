import Link from "next/link";
function Product() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3">Product 3</Link>
    </>
  );
}
export default Product;
