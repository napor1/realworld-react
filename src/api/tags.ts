import { api } from "@/lib/api-client";
import { queryConfig } from "@/lib/react-query";
import { useQuery } from "@tanstack/react-query";

export const getTags = (): Promise<{
  tags: string[];
}> => {
  return api.get("/api/tags");
};

export const useTags = () => {
  return useQuery({
    ...queryConfig,
    queryKey: ["tags"],
    queryFn: getTags,
  });
};
