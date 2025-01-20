import { api } from "@/lib/api-client";
import { queryConfig } from "@/lib/react-query";
import { Articles } from "@/types/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

type GetArticlesParams = {
  limit?: number;
  offset?: number;
};

export const getArticles = ({
  limit = 10,
  offset = 0,
}: GetArticlesParams): Promise<Articles> => {
  return api.get("/api/articles", { params: { limit, offset } });
};

export const useArticles = ({ limit = 10, offset = 0 }: GetArticlesParams) => {
  return useQuery({
    ...queryConfig,
    queryKey: ["articles", limit, offset],
    queryFn: () => getArticles({ limit, offset }),
    placeholderData: keepPreviousData,
    select: (data) => {
      return {
        ...data,
        articles: data.articles.map((item) => ({
          ...item,
          _fmtUpdatedAt: format(new Date(item.updatedAt), "MMM d, yyyy"),
        })),
      };
    },
    // staleTime: 10000,
  });
};
