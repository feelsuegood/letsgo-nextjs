export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie detail {id}</h1>;
}
