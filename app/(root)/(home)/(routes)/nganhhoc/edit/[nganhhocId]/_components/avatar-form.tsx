"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useModal } from "@/hooks/use-modal-store";
import { Program } from "@prisma/client";
import { PlusCircle } from "lucide-react";

interface AvatarFormProps {
    program: Program;
}

const AvatarForm = ({ program }: AvatarFormProps) => {
    const { onOpen } = useModal();
    return (<>
    </>

    );
};

export default AvatarForm;
