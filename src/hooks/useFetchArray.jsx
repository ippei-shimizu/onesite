import useSWRImmutable from "swr/immutable";

export const useFetchArray = (id) => {
  const { data, error } = useSWRImmutable(
    `https://ippei-shimizu.microcms.io/api/v1/${id}`
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.contents.length === 0,
  };
};
