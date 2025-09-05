import { SITE } from "@/constants/constants";
import GithubButton from "./GithubButton";
import GooglePlayButton from "./GooglePlayButton";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex justify-around flex-wrap items-center w-[calc(100%-40px)] border-t border-[#1e1e1e]/30 text-center p-5">
      <span>
        {year} {SITE.name}. All rights reserved.
      </span>
      <ul className="flex items-center justify-center flex-wrap list-none gap-[30px] p-0 m-0">
        <GithubButton />
        <GooglePlayButton />
      </ul>
    </footer>
  );
}
