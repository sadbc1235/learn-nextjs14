import { API_URL } from "../app/(home)/page";

async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/${id}`); 
    return res.json();
}

export default async function MovieInfo({id}) {
    console.log('id', id)
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}