import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-muted-foreground mb-8">
        {`The page you're looking for doesn't exist.`}
      </p>
      <Button asChild>
        <Link href="/dashboard/weather-news">Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
