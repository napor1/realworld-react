import { Link } from "react-router-dom";
import { pathKeys } from "@/shared/lib/react-router";
import { Button } from "@/components/ui/button";

export function Page404() {
  return (
    <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
      <div className="w-full text-center space-y-[8px]">
        <h1 className="text-xl">Page not found</h1>
        <Button size="sm">
          <Link to={pathKeys.home()}>Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
