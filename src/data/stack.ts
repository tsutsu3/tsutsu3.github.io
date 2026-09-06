import type { SvgComponent } from "astro/types";

import AstroIcon from "@/icons/astro.svg";
import CloudFlareIcon from "@/icons/cloudflare.svg";
import FlutterIcon from "@/icons/flutter.svg";
import GoIcon from "@/icons/go.svg";
import HonoIcon from "@/icons/hono.svg";
import PythonIcon from "@/icons/python.svg";
import ReactIcon from "@/icons/react.svg";
import TerraformIcon from "@/icons/terraform.svg";
import TypeScriptIcon from "@/icons/typescript.svg";

export interface TechStack {
  icon: SvgComponent;
  label: string;
}

export const STACK: readonly TechStack[] = [
  { icon: PythonIcon, label: "Python" },
  { icon: TypeScriptIcon, label: "TypeScript" },
  { icon: GoIcon, label: "Go" },
  { icon: FlutterIcon, label: "Flutter" },
  { icon: ReactIcon, label: "React" },
  { icon: HonoIcon, label: "Hono" },
  { icon: AstroIcon, label: "Astro" },
  { icon: CloudFlareIcon, label: "Cloudflare" },
  { icon: TerraformIcon, label: "Terraform" },
] as const;
