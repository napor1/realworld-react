import { api } from "@/lib/api-client";
import { queryConfig } from "@/lib/react-query";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getArticles = async (): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
