import useFetch from './useFetch';
import { Link, useParams } from 'react-router-dom';

const SingleMovie = () => {
 const { id } = useParams();
 const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

 if (isLoading) {
  return (
   <>
    <section className="flex flex-col items-center pt-10 text-3xl">
     <div>Loading...</div>
    </section>
   </>
  );
 }

 if (error.show) {
  return (
   <section className="flex flex-col items-center">
    <div className=" p-20 text-3xl ">Error: {error.msg}</div>
    <Link to="/" className="px-6 py-2 bg-slate-500 hover:bg-slate-800  rounded-md text-white">
     back to movies
    </Link>
   </section>
  );
 }

 console.log(movie);
 const { Plot: plot, Title: title, Year: year, Poster: img } = movie;

 return (
  <section className="container mx-auto max-w-[1170px] px-6 pt-20 grid grid-cols-3 items-center">
   <img src={img} alt={title} className="mx-auto" />
   <div className="col-start-2 col-span-3 p-6 gap-5 flex flex-col items-start">
    <h2 className="text-3xl capitalize pb-6">{title}</h2>
    <p>{plot}</p>
    <h4>{year}</h4>
    <Link to="/" className="px-6 py-2 bg-slate-500 hover:bg-slate-800  rounded-md text-white">
     back to movies
    </Link>
   </div>
  </section>
 );
};

export default SingleMovie;
