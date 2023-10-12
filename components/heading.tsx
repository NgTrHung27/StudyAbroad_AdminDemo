"use client";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-x-3 mb-12 text-center">
      <h1 className="text-4xl font-semibold text-[#7D1F1F] p-4">{title}</h1>
      <div className="w-full flex flex-row items-center justify-center">
        <p className="px-1 text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
