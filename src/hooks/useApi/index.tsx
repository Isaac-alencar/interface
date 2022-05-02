import { useQuery, UseQueryOptions } from "react-query";
import { logError } from "services/crashReport";
import { AxiosResponse } from "axios";
import { ApolloQueryResult } from "@apollo/client";

interface Props {
  key: string;
  fetchMethod?(): Promise<AxiosResponse> | Promise<ApolloQueryResult<any>>;
  options?: UseQueryOptions<any, Error, any>;
}
export function useApi<T>({ key, fetchMethod, options }: Props) {
  const { isLoading, error, data, refetch } = useQuery<T, Error>(
    key,
    async () => {
      if (!fetchMethod) return null;
      const { data: fetchData } = await fetchMethod();
      if (error) logError(error, `An error occurred when fetching ${key}`);

      return fetchData;
    },
    options,
  );

  return {
    isLoading,
    error,
    data,
    refetch,
  };
}
