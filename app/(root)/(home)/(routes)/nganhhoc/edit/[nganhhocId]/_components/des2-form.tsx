"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formEditDes1Schema, formEditDes2Schema, formEditProgramSchema } from "../../../../../../../../constaints-edit/constants-program";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Program } from "@prisma/client";

interface nameFormProps {
    program: Program;
}

const Des2Form = ({ program }: nameFormProps) => {
    const router = useRouter();

    const [isEditting, setIsEditting] = useState(false);

    const toggleEdit = () => {
        setIsEditting((current) => !current);
    };

    const form = useForm<z.infer<typeof formEditDes2Schema>>({
        resolver: zodResolver(formEditProgramSchema),
        defaultValues: {
            description2: "",
        },
    });


    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formEditDes2Schema>) => {
        try {
            await axios.patch(`/api/schools/${program.id}`, values);
            toast.success("Cập nhật des2 thành công");
            toggleEdit();
        } catch (error) {
            toast.error("Cập nhật des2 thất bại");
        } finally {
            router.refresh();
            form.reset();
        }
    };

    return (
        <>

            <div className="mt-6 border bg-white rounded-md p-4">
                <div className="font-medium flex items-center justify-between">
                    Description2
                    <Button onClick={toggleEdit} variant={"ghost"}>
                        {isEditting ? (
                            <>Hủy</>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2" />
                                Chỉnh sửa
                            </>
                        )}
                    </Button>
                </div>

                {!isEditting ? (
                    <p className="text-sm mt-2">{program.description2}</p>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="description2"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="Nhập đầy đủ mô tả 2"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center gap-x-2">
                                <Button disabled={isSubmitting || !isValid} type="submit">
                                    Lưu thay đổi
                                </Button>
                            </div>
                        </form>
                    </Form>
                )}
            </div>

        </>
    );
};

export default Des2Form;
