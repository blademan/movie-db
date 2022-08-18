import React from 'react';
import SearchForm from './SearchForm';
import Movies from './Movies';

export default function Home() {
 return (
  <main className="container mx-auto pt-16 max-w-[1170px] px-6">
   <SearchForm />
   <Movies />
  </main>
 );
}
