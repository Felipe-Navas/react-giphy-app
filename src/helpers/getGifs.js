/**
 *
 * @param {string} category
 * @returns {array} gifs
 */
export const getGifs = async (category = '') => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=C0kVwQUSrNB3FtRa7fFHJibZk4o0WRKP`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
