"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formCreateUserSchema } from "./constants";
import { UserRole } from "@prisma/client";
import { Combobox } from "@/components/ui/combobox";
import { rolesOptions } from "@/types";
import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./_components/profile-form";

const CreateTaiKhoanPage = () => {
  const [mounted, isMounted] = useState(false);

  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-6 p-6">
      <div>
        <h3 className="text-lg font-medium">Tạo tài khoản mới</h3>
        <p className="text-sm text-muted-foreground">
          Vui lòng cung cấp đầy đủ thông tin cho hồ sơ tài khoản mới.
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
};

export default CreateTaiKhoanPage;
