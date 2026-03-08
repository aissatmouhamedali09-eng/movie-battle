export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const page = req.query.page || 1;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    { headers: { Authorization: `Bearer YOUR_TOKEN_HERE` } }
  );
  const data = await response.json();
  res.status(200).json(data);
}
