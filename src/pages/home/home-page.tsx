import { getArticles, getFakeList, postSth } from "@/api/main";
import { Card, CardHeader } from "@/components/ui/card";
import { queryClient } from "@/lib/react-query/queryClient";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export function HomePage() {

  useEffect(() => {
    console.log('initial');
    getArticles();
  }, [])
  // const [] = useState([]);
  const query = useSuspenseQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  // useEffect(() => {
  //   setIsLoading(true);
  //   getFakeList().then((res: any) => {
  //     console.log('FAKE', res)
  //     setIsLoading(false);
  //   })
  // }, [])

  return (
    <div>
      <div className="bg-amber-300 text-white p-2 text-center space-y-1">
        <h1 className="text-4xl font-bold">Title</h1>
        <h2 className="text-sm">description description</h2>
      </div>

      {/* <Button onClick={handlePost}>Click</Button> */}
      <div className="flex max-w-[940px] mx-auto items-start">
        <div className="flex-1 px-4 space-y-2">
          {(query.data as any)?.articles.map((item: any, index: number) => (
            <Card key={item.id}>
              <CardHeader>{item.title}</CardHeader>
              <div>{item.body}</div>
            </Card>
          ))}
        </div>
        <div className="min-h-[200px] w-[200px] bg-slate-300">Tags</div>
      </div>
    </div>
  );
}
