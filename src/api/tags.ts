import { api } from "@/lib/api-client";

export const getTags = (): Promise<string[]> => {
  return api.get("/api/tags");
};
