import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing the custom hook useFetchGifs', () => {
  test('should return the first state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Ford')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return an array of images and the loading in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('Ford')
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
