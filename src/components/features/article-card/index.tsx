import { ListArticle } from "@/types/api";
import { Avatar, Button, Card } from "antd";
import "./index.scss";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

type ArticleCardProps = {
  data: ListArticle;
};

type CardTitleProps = {
  username: string;
  favorited: boolean;
  favoritesCount: number;
  updatedDate: string;
};

const { Meta } = Card;

const CardTitle = ({
  username,
  favorited,
  favoritesCount,
  updatedDate,
}: CardTitleProps) => {
  return (
    <div className="card-title">
      <div className="info">
        <span className="username">{username}</span>
        <span className="date">{updatedDate}</span>
      </div>
      <Button
        style={{
          gap: "4px",
          borderColor: "#5cb85c",
        }}
        className="like-btn"
        icon={favorited ? <HeartFilled /> : <HeartOutlined />}
        size="small"
      >
        {favoritesCount}
      </Button>
    </div>
  );
};

const CardDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="card-description">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export function ArticleCard({ data }: ArticleCardProps) {
  const {
    title,
    description,
    author,
    favorited,
    favoritesCount,
    _fmtUpdatedAt,
  } = data;
  return (
    <Card className="article-card">
      <Meta
        avatar={<Avatar src={author.image} />}
        title={
          <CardTitle
            username={author.username}
            updatedDate={_fmtUpdatedAt}
            favorited={favorited}
            favoritesCount={favoritesCount}
          />
        }
        description={
          <CardDescription title={title} description={description} />
        }
      />
    </Card>
  );
}
