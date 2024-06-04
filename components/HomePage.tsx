import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {   
        await fetch('https://technical.test.talenavi.com/api/movie')
        .then((res) => res.json())
        .then((result) => setMovies(result.data.data))
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    console.log(movies)

    return (
        <div className="grid grid-cols-5 gap-3 justify-center">
            {movies.map((movie: any, i: number) => (
                <Link href={'/'} key={i}>
                    <Image src={movie.image} alt={movie.title} width={250} height={250} className="h-[20rem]" />
                    <h1>{movie.title}</h1>
                </Link>
            ))}
        </div>
    )
}

export default HomePage;