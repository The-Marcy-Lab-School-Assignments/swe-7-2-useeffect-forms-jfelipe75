/* 
An adapter is a helper function for sending a request to specific endpoint. Here, we have one adapter for fetching from the /trending endpoint and another for fetching from the /search endpoint. 

TODO:
- Import the API Key from your config.js file
- Complete each adapter function to fetch from the trending/ and search/ endpoints. See the README for the complete endpoint URLs that you will be fetching from.
*/
import { API_KEY } from "../../config.js";
import { handleFetch } from "./handleFetch.js";

const baseUrl = "https://api.giphy.com/v1/gifs";

// Send a fetch request to the /trending endpoint and return the top 3 results
export const getTrendingGifs = async () => {
  // handleFetch returns a tuple so be ready to catch both values
  const [responseData, error] = await handleFetch(
    `${baseUrl}/trending?api_key=${API_KEY}&rating=g`
  );

  if (error) return console.error("Error fetching trending GIFs:", error);

  // create an array and push the top 3 trending gifs into this array
  const topThreeGifs = [];
  for (let i = 0; i <= 2; i++) {
    topThreeGifs.push(responseData.data[i]);
  }

  console.log("Top 3 trending GIFs:");
  return topThreeGifs;
};

// Send a fetch request to the /search endpoint with the given term as a query parameter
export const getGifsBySearch = async (term) => {
  const [responseData, error] = await handleFetch(
    `${baseUrl}/search?api_key=${API_KEY}&q=${term}&rating=g`
  );

  if (error) return console.error("Error fetching trending GIFs:", error);

  // create an array and push the top 3 trending gifs into this array
  const topThreeGifs = [];
  for (let i = 0; i <= 2; i++) {
    topThreeGifs.push(responseData.data[i]);
  }

  console.log("Top 3 GIFs based on search:");
  return topThreeGifs;
};
