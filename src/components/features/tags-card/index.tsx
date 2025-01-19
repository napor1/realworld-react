import { useTags } from "@/api/tags";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Tag } from "antd";
import "./index.scss";

export function TagsCard() {
  const { data, isLoading } = useTags();
  const tags = data?.tags || [];

  return (
    <div className="tags-card">
      <h1>Popular Tags</h1>
      {isLoading ? (
        <Flex align="center" justify="center">
          <LoadingOutlined />
        </Flex>
      ) : (
        <Flex gap="4px 0" wrap className="tags-wrapper">
          {tags.map((tag, index) => (
            <Tag color="green" key={index}>
              {tag}
            </Tag>
          ))}
        </Flex>
      )}
    </div>
  );
}
