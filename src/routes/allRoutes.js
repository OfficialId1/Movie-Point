import { Routes, Route } from "react-router-dom";
import { MovieList, PageNotFound, MovieDetail, Search } from "../pages";

function AllRoutes () {
  return (
    <div className="dark:bg-darkbg">
        <main>
          <Routes>
              <Route path='/' element={<MovieList apiPath='movie/now_playing' title='Home'/>} />
              <Route path="movie/:id" element={<MovieDetail  apiPath='movie/{movie_id}'/>}/>
              <Route path="movies/popular" element={<MovieList  apiPath='movie/popular' title='Popular'/>}/>
              <Route path="movies/top" element={<MovieList  apiPath='movie/top_rated' title='Top Rated'/>}/>
              <Route path="movies/upcoming" element={<MovieList  apiPath='movie/upcoming' title='Upcoming'/>}/>
              <Route path="search" element={<Search  apiPath='search/movie'/>}/>
              <Route path="*" element={<PageNotFound  apiPath='movie/now_playing'/>}/>
          </Routes>
        </main>
    </div>
  )
}

export default AllRoutes;
