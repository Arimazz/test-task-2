import React, { useState, useEffect } from 'react';
import { getNews } from '../../Api/Api';

export const News = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const newsFromServer = getNews();
    newsFromServer.then(news => {
      setNews(news);
    })
  })

  console.log(news);
  
  return (
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  );
};
