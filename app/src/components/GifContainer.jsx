/* 
This component is meant to display gifs. However, there are two different sets of gifs that this component can display, depending on the user's actions. At first, they should see trending gifs but after submitting a search term in the GifSearch form, they should see gifs related to their search.

TODO:
- use the getTrendingGifs adapter to fetch trending gifs on the first render
- each time the user submits the form in GifSearch, use the getGifsBySearch adapter to fetch gifs according to the search term.
- render the list of fetched gifs (or the defaultGifs) as list items with an `img` inside. Remember to give each list item a unique key!
- Bonus: if at any point an error is returned, render the default gifs again.
*/
import { useState, useEffect } from "react";
import defaultGifs from "../gifs.json";
import { getGifsBySearch, getTrendingGifs } from "../adapters/giphyAdapters";

const GifContainer = ({ searchTerm }) => {
  const [gifs, setGifs] = useState([]);
  const [error, setError] = useState(false);

  // Fetch gifs based on search term or trending gifs on first render
  useEffect(() => {
    const fetchTrendingGifs = async () => {
      try {
        const gifs = await getTrendingGifs();
        setGifs(gifs);
      } catch (err) {
        setError(true);
        setGifs(defaultGifs);
      }
    };

    const fetchSearchGifs = async (searchTerm) => {
      try {
        const gifs = await getGifsBySearch(searchTerm);
        setGifs(gifs);
      } catch (err) {
        setError(true);
        setGifs(defaultGifs);
      }
    };

    if (searchTerm === "") {
      fetchTrendingGifs();
    } else {
      fetchSearchGifs(searchTerm);
    }
  }, [searchTerm]);

  if (!gifs.length) return <p>Loading...</p>;

  return (
    <ul className="gif-container">
      {gifs.map((gif, index) => (
        <li className="gif-item" key={gif.id || index}>
          <img src={gif.images.fixed_height.url} alt={`Gif ${index + 1}`} />
        </li>
      ))}
      {error && (
        <p>Sorry, the GIPHY API is not working, but here are some cats.</p>
      )}
    </ul>
  );
};

export default GifContainer;
