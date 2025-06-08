interface ErrorParagraphProps {
  message: string;
}

function ErrorParagraph({ message }: ErrorParagraphProps) {
  return <p className="mt-1 text-red-500 text-sm">{message}</p>;
}

export default ErrorParagraph;
