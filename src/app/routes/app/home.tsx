import { ArticleList } from "@/components/features/article-list";
import "./home.scss";
import { HomeLayout } from "@/components/layouts/home-layout";
import { TagsCard } from "@/components/features/tags-card";

const Home = () => {
  return (
    <HomeLayout>
      <HomeLayout.LeftCol>
        <ArticleList />
      </HomeLayout.LeftCol>
      <HomeLayout.RightCol>
        <TagsCard />
      </HomeLayout.RightCol>
    </HomeLayout>
  );
};

export default Home;
