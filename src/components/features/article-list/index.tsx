import { useArticles } from "@/api/articles";

import { useState } from "react";

export function ArticleList() {
  const PAGE_SIZE = 45;
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching } = useArticles({
    limit: PAGE_SIZE,
    offset: page * PAGE_SIZE,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No Data</div>;
  }
  const { articles, articlesCount } = data;
  return (
    <div>
      Home: {articlesCount}
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setPage((old) => old + 1);
        }}
        disabled={(page + 1) * PAGE_SIZE >= articlesCount}
      >
        Next
      </button>
      {isFetching ? <div>Fetching...</div> : null}
      <ul>
        {articles.map((item, index) => (
          <li key={index} style={{ height: "20px" }}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
