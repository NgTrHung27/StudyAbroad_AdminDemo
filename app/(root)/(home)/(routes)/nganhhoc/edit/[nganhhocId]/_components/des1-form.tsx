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
import { formEditDes1Schema, formEditProgramSchema } from "../../../../../../../../constaints-edit/constants-program";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Program } from "@prisma/client";

interface nameFormProps {
    program: Program;
}

const Des1Form = ({ program }: nameFormProps) => {
    const router = useRouter();

    const [isEditting, setIsEditting] = useState(false);

    const toggleEdit = () => {
        setIsEditting((current) => !current);
    };

    const form = useForm<z.infer<typeof formEditDes1Schema>>({
        resolver: zodResolver(formEditProgramSchema),
        defaultValues: {
            description1: "",
        },
    });


    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formEditDes1Schema>) => {
        try {
            await axios.patch(`/api/schools/${program.id}`, values);
            toast.success("Cập nhật des1 thành công");
            toggleEdit();
        } catch (error) {
            toast.error("Cập nhật des1 thất bại");
        } finally {
            router.refresh();
            form.reset();
        }
    };

    return (
        <>

            <div className="mt-6 border bg-white rounded-md p-4">
                <div className="font-medium flex items-center justify-between">
                    Description1
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
                    <p className="text-sm mt-2">{program.description1}</p>
                ) : (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="description1"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="Nhập đầy đủ mô tả 1"
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

export default Des1Form;
