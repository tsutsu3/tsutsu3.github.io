type Tech = { slug: string; label: string };

type Props = {
  readonly durationSec?: number;
};

export default function LogoWall({ durationSec = 60 }: Props) {
  const technologies: Tech[] = [
    { slug: "flutter", label: "Flutter" },
    { slug: "typescript", label: "TypeScript" },
    { slug: "python", label: "Python" },
    { slug: "terraform", label: "Terraform" },
    { slug: "postgresql", label: "PostgreSQL" },
    { slug: "supabase", label: "Supabase" },
    { slug: "nextdotjs", label: "Next.js" },
  ];

  const items = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];
  const iconBasePath = "/skills";

  return (
    <div
      className="skills-scroller py-8"
      style={{
        ["--marquee-duration" as any]: `${durationSec}s`,
      }}
    >
      <div className="skills-track animate-skills-marquee">
        <ul className="flex w-max items-stretch gap-12 md:gap-20">
          {items.map((tech, idx) => (
            <li
              key={`${tech.slug}-${idx}`}
              className="flex flex-col items-center gap-2 group transition-transform duration-300"
            >
              <img
                src={`${iconBasePath}/${tech.slug}.svg`}
                alt={tech.label}
                width={30}
                height={30}
                loading="lazy"
                className="h-7 w-auto object-contain opacity-60 group-hover:scale-110"
              />
              <span className="text-lg font-medium opacity-80">
                {tech.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
