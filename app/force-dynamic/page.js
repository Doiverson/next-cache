export const dynamic = 'force-dynamic';
// export const revalidate = 0;

const getRandomNumber = async () => {
  const res = await fetch('http://localhost:3000/api/random');
  const data = await res.json();
  return data;
};

const ForceDynamic = () => {
  return <div>{getRandomNumber()}</div>;
};

export default ForceDynamic;
