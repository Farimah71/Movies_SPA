import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error) => {
      try {
        alert(error);
      } catch (error) {
        console.log("ERROR ALERTING ERROR MESSAGE", error);
      }
    },
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      try {
        alert(error);
      } catch (error) {
        console.log("ERROR ALERTING ERROR MESSAGE", error);
      }
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 10 * 60 * 1000,
    },
    mutations: {
      throwOnError: false,
      retry: 1,
      gcTime: 10 * 60 * 1000,
    },
  },
});
