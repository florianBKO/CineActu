// app/api/movie/route.ts
import { NextResponse } from 'next/server'

// Gérer les requêtes GET
export async function GET() {

  const apiKey = process.env.API_KEY_THEMOVIE // Attention à la casse !

  if (!apiKey) {
    throw new Error('Clé API manquante')
  }

  try {
    // Appel à l'API de TheMovieDB
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=fr-FR`);
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des films')
    }

    const data = await response.json()

    // On renvoie les données avec NextResponse
    return NextResponse.json({
      data: data.results || [], // On suppose que la réponse contient 'results'
    })
  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json({ error: 'Erreur API:' }, { status: 500 })
  }
}
