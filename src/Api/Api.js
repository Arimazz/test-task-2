const API_KEY = '4891b23ccb9c451d9519eb7d09812fdd';
const url = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const getNews = async () => {
  const response = await fetch(url);
  const result = await response.json();

  return result;
};
