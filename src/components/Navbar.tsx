import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { SITE, URL } from "@/constants/constants";
import GithubButton from "./GithubButton";
import GooglePlayButton from "./GooglePlayButton";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Separator } from "./ui/separator";

const NAV_ITEMS = [
  {
    label: "Apps",
    children: [
      { label: "Pi-hole client", href: URL.piholeClient },
      { label: "Markdown Named CodeBlocks", href: URL.mdNamedCB },
      { label: "linkify-it-py", href: URL.linkifyItPy },
    ],
  },
];

export default function Navbar() {
  return (
    <nav className="sm:px-16 w-full border-b border-line/60 bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="mx-auto max-w-5xl h-14 px-5 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="font-medium tracking-wide select-none">
          {SITE.name}
        </a>

        {/* Desktop: NavigationMenu + Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 w-58 p-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavigationMenuLink asChild>
                            <a
                              href={child.href}
                              className="block rounded-voxel voxel-border px-3 py-2 transition hover:opacity-100 opacity-90"
                            >
                              {child.label}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Separator orientation="vertical" className="h-5 mx-2" />

          <div className="flex items-center gap-2">
            <GithubButton />
            <GooglePlayButton />
          </div>
        </div>

        {/* Mobile: hamburger + Sheet */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 max-w-[85%]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              {NAV_ITEMS.map((group) => (
                <div key={group.label} className="mb-4">
                  <div className="text-md font-semibold text-muted-foreground mb-2 px-4">
                    {group.label}
                  </div>
                  <ul>
                    {group.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block rounded-voxel voxel-border px-3 py-1 opacity-90 hover:opacity-100 transition"
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start rounded-voxel voxel-border px-3"
                          >
                            {child.label}
                          </Button>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Separator className="mx-4" />

              <div className="flex items-center mx-2">
                <SheetClose asChild>
                  <span>
                    <GithubButton />
                  </span>
                </SheetClose>
                <SheetClose asChild>
                  <span>
                    <GooglePlayButton />
                  </span>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
