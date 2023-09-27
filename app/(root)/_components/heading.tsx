import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        {Icon && <Icon className={cn("w-8 h-8", iconColor)} />}
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="md:max-w-[300px] text-sm text-muted-foreground truncate">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
