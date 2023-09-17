"use client";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-x-3 mb-8 text-center">
      <h2 className="text-3xl font-bold text-black">{title}</h2>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="w-full border-b-[1px]" />
        <p className="px-1 whitespace-nowrap text-muted-foreground text-sm">
          {description}
        </p>
        <div className="w-full border-b-[1px]" />
      </div>
    </div>
  );
};

export default Heading;
