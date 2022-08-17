import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
import useFetch from './useFetch';
export const API_ENDPOINT = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 const { isLoading, error, data } = useFetch(`&s=batman`);

 console.log(data);
 return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// make sure use
export const useGlobalContext = () => {
 return useContext(AppContext);
};

export { AppContext, AppProvider };