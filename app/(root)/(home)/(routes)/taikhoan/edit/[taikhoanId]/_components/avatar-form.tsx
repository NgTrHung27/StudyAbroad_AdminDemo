"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useModal } from "@/hooks/use-modal-store";
import { User } from "@prisma/client";
import { PlusCircle } from "lucide-react";

interface AvatarFormProps {
  user: User;
}

const AvatarForm = ({ user }: AvatarFormProps) => {
  const { onOpen } = useModal();

  return (
    <div className="mt-6 border bg-white dark:bg-background rounded-md p-4">
      <div className="font-medium flex items-center justify-center">
        <div className="relative">
          <Avatar className="h-32 w-32 border-4 border-slate-200">
            <AvatarImage
              src={user?.avatar ? user.avatar : "/placeholder.jpg"}
              alt="avatar"
            />
          </Avatar>
          <PlusCircle
            onClick={() => onOpen("avatarImage", { user: user })}
            className="bg-[#7D1F1F] rounded-full text-white w-10 h-10 absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="text-xs text-muted-foreground dark:text-primary mt-4 text-center">
        <h1 className="font-semibold">Ảnh đại diện</h1>
        Khuyến khích sử dụng hình ảnh có kích thước là 200px X 200px
      </div>
    </div>
  );
};

export default AvatarForm;
