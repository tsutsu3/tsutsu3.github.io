import { URL } from "@/constants/constants";
import { Button } from "@/components/ui/button";

export default function GithubButton() {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full">
      <a href={URL.github} target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="Github" className="w-5 h-5" />
      </a>
    </Button>
  );
}
