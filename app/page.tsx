'use client'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Carousel2 from './components/Carousel'

interface Movie {
  id: number
  original_title: string
  overview?: string
  poster_path: string
  popularity: number
  release_date: string
  title: string
  video: string
  vote_count: string
}

interface Carousel {
  poster_path: string
}


export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [carousel, setCarousel] = useState<Carousel[]>([])
  const [loading, setLoading] = useState(true)

  // Récupérer les films populaires
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('http://sc2mejo7704.universe.wf/cine-actu/api/movie/popular')
        const data = await response.json()
        
        if (Array.isArray(data.data)) {
          setMovies(data.data) // Mettre à jour les movies
          
          // Extraire les poster_path pour le carousel
          const posterPaths = data.data.map((movie: { poster_path: string }) => ({
            poster_path: movie.poster_path,
          }))
          setCarousel(posterPaths)
        } else {
          console.error('Les données récupérées ne sont pas un tableau')
        }
        setLoading(false)
      } catch (error) {
        console.error('Erreur lors de la récupération des films:', error)
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])
  console.log(carousel);
  if (loading) return <div>Chargement...</div>

  return (
    <div className="container w-full mx-auto p-4 text-blue-200">
      <div className="mb-3">
        <h1 className="text-4xl font-bold text-center bg-gray-100 text-red-500">
          Liste des Films
        </h1>
      </div>
      <Carousel2 DataCarousel={carousel}/>
      <div className='bg-red-700 mt-4'>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 justify-center bg-gray-100">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              title={movie.original_title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}