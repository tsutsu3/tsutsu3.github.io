interface TitleProps {
  readonly text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h2
      className="max-w-[450px] text-[40px] uppercase m-0 text-center font-semibold bg-gradient-to-r from-[#1e1e1e] to-[#b1b1b1] bg-clip-text text-transparent"
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </h2>
  );
}
