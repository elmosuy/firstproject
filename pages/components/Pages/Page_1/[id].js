import React from "react";
import { useRouter } from "next/router";
import useFetchMovieGenreResults from "../../hooks/useFetchMovieGenreResults";
import { useState } from "react";
import useFetchTrendingCatagory from "../../hooks/useFetchTrendingCatagory";
import useFetchTopRatedCatagory from "../../hooks/useFetchTopRatedCatagory";

const useMovies = (genre) => {
  switch (id) {
    case 'Trending':
      return useFetchTrendingCatagory()
    case 'Top Rated"':
      return useFetchTopRatedCatagory()
    default:
      return useFetchMovieGenreResults(id)
  }
}

const item1 = () => {
    const router = useRouter()
    const { id } = router.query
   const mymovies = useMovies(genre)

  return (
    <div  className='texts'>
      <div className='text'>
        _<p>
            {data[id||1].text}
        </p>

      </div>
      
        
    </div>
  )
}

export default item1
