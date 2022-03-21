import { getGifs } from '../../helpers/getGifs';

describe('Testing the getGifs helper', () => {
  test('should return an array of 10 elements', async () => {
    const gifs = await getGifs('cars');
    expect(gifs.length).toBe(10);
  });

  test('should return an empty array', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
