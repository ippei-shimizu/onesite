import useSWRImmutable from "swr/immutable";

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
