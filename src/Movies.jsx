import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

export default function Movies() {
 const { movies, isLoading } = useGlobalContext();

 if (isLoading) {
  return <div>Loading...</div>;
 }

 return (
  <section className="grid gap-5 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[1170px]">
   {movies.map((item) => {
    const { imdbID: id, Title: title, Poster: img, Year: year } = item;
    return (
     <Link to={`/movies/${id}`} key={id}>
      {' '}
      <article className="mx-auto relative group overflow-hidden ">
       <img
        src={img === 'N/A' ? url : img}
        alt={title}
        className="w-full object-cover h-[400px] block"
       />

       <div className=" flex justify-between items-center bg-[rgba(0,0,0,.7)]  absolute w-full translate-y-[100%] duration-500 bottom-0 left-0 group-hover:translate-y-[0px] p-4 text-white">
        <div className="flex flex-col ">
         <h2 className="text-md font-bold tracking-wider">{title}</h2>
         <span>{year}</span>
        </div>
       </div>
      </article>
     </Link>
    );
   })}
  </section>
 );
}
