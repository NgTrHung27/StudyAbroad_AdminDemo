"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { UserRole } from "@prisma/client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { formRoleSchema } from "../../../../../../../../constaints-edit/constants-user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface nameFormProps {
  user: User;
}

const roleMap = {
  [UserRole.ADMIN]: "bg-rose-500",
  [UserRole.USER]: "bg-slate-500",
};

const RoleForm = ({ user }: nameFormProps) => {
  const router = useRouter();

  const [isEditting, setIsEditting] = useState(false);

  const toggleEdit = () => {
    setIsEditting((current) => !current);
  };

  const form = useForm<z.infer<typeof formRoleSchema>>({
    resolver: zodResolver(formRoleSchema),
    defaultValues: {
      role: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formRoleSchema>) => {
    try {
      console.log(values);
      await axios.patch(`/api/users/${user.id}`, values);
      toast.success("Cập nhật hồ sơ thành công");
      toggleEdit();
    } catch (error) {
      toast.error("Cập nhật hồ sơ thất bại");
    } finally {
      router.refresh();
      form.reset();
    }
  };

  if (user.email === process.env.ADMIN_EMAIL) {
    return null;
  }

  return (
    <div className="mt-6 border bg-white dark:bg-background rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Vai trò nguời dùng
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
        <Badge className={cn(roleMap[user.role])}>
          {user.role === UserRole.ADMIN ? "Quản trị viên" : "Người dùng"}
        </Badge>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"Vui lòng chọn vai trò"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={UserRole.ADMIN}>
                        Quản trị viên
                      </SelectItem>
                      <SelectItem value={UserRole.USER}>Người dùng</SelectItem>
                    </SelectContent>
                  </Select>
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
  );
};

export default RoleForm;
