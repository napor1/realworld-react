import { useArticles } from "@/api/articles";

const Home = () => {
  const articlesQuery = useArticles();

  if (articlesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  const data = articlesQuery?.data;

  if (!data) {
    return <div>No Data</div>;
  }

  console.log(data, "articles");
  return <div>Home: {data.articlesCount}</div>;
};

export default Home;
