"use client";
import Link from "next/link";
interface ParamsProp {
  params: { id: string };
}
const CoffeeStorePage = ({ params }: ParamsProp) => {
  return (
    <div>
      Coffee Store Page id {params.id}
      <Link href="/">Back to home</Link>
      <Link href="/coffee-store/dynamics">Go to page dynamic</Link>
    </div>
  );
};
export default CoffeeStorePage;
