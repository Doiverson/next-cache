export const dynamic = 'force-dynamic';

async function getBlogList() {
  const res = await fetch('http://localhost:8080/random');
  return await res.json();
}

export default async function Page() {
  const { number } = await getBlogList();

  return <div>{number}</div>;
}
