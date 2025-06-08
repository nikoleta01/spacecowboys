interface HeadingProps {
  text: string;
  className?: string;
}

function Heading({ text, className }: HeadingProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-4 text-center uppercase ${className}`}
    >
      {text}
    </h2>
  );
}

export default Heading;
