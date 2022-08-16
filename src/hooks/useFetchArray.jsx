import { API_URL_M_CMS } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

export const useFetchArray = (id) => {
  const { data, error } = useSWRImmutable(
    `${API_URL_M_CMS}/${id}`
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.contents.length === 0,
  };
};
