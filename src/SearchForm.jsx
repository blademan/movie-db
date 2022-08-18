import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
 const { query, setQuery, error } = useGlobalContext();

 return (
  <form onSubmit={(e) => e.preventDefault()} className="py-6">
   <h2 className="text-4xl font-bold pb-4">Search Movies</h2>
   <input
    className="p-2 w-1/2 rounded"
    type="text"
    onChange={(e) => setQuery(e.target.value)}
    value={query}
   />
   {error.show && <div>{error.msg}</div>}
  </form>
 );
};

export default SearchForm;
