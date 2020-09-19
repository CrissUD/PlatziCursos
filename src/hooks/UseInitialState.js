import { useState, useEffect } from 'react';

const UseInitialState = (API) => {
  const [videos, setVideos] = useState({ myList: [], trends: [], originals: [] });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data));
      })
      .catch((error) => console.log(error));
  }, []);

  // Async Await
  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/initialState');
  //       const data = await response.json();
  //       return setVideos(data);
  //     } catch {
  //       console.log(error);
  //     }
  //   };
  //   fetchVideos();
  // }, []);

  return [videos, categories];
};

export default UseInitialState;
