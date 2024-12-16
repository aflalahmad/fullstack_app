import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1>Full stack development with Aflal</h1>
    <Button><LogInIcon />Log in</Button>
    </div>
  );
}
