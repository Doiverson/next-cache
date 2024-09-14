export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const res = await fetch('http://localhost:8080/random');
  const data = await res.json();
  return Response.json(data.number);
}
