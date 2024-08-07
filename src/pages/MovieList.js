import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({apiPath, title}) => {
  const {data : movies} = useFetch(apiPath);

  //eslint-disable-next-line
  const pageTitle = useTitle(title);
   
  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className="flex justify-evenly flex-wrap gap-x-2 gap-y-12">
          {
            movies.map(movie => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
          
        </div>
      </section>
    </main>
  )
}
