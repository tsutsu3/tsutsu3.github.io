import { URL } from "@/constants/constants";
import { Button } from "@/components/ui/button";

export default function GooglePlayButton() {
  return (
    <Button asChild variant="ghost" size="icon" className="rounded-full">
      <a href={URL.googlePlay} target="_blank" rel="noopener noreferrer">
        <img src="/googleplay.svg" alt="Google Play" className="w-5 h-5" />
      </a>
    </Button>
  );
}
