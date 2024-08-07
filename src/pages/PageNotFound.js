import pagenotfound from '../assets/images/pagenotfound.png';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useTitle } from '../hooks/useTitle';

export const PageNotFound = () => {
  useTitle('Page not found');

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center'>
          <p className='text-7xl text-gray-700 font-bold my-5 dark:text-white'>
            404, OOPS!
          </p>

          <div className='max-w-md'>
            <img className='rounded' src={pagenotfound} alt="404 Page Not Found" />
          </div>
        </div>

        <div className='flex justify-center my-4'>
          <Link to='/'>
            <Button>Back To Movie Point</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
