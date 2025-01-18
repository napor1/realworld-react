import { api } from "@/lib/api-client";
import { queryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getArticles = (): Promise<any> => {
  return api.get("/api/articles");
};

export const getArticlesQueryOptions = () => {
  return queryOptions({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
  });
};

export const useArticles = () => {
  return useQuery({
    ...getArticlesQueryOptions(),
    ...queryConfig,
  });
};
