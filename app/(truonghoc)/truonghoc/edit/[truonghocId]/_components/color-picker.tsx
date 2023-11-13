"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formSchoolColorSchema } from "@/constants/update-school-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { School } from "@prisma/client";
import axios from "axios";
import { Paintbrush } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = {
  school: School;
};

export function ColorPicker({ school }: Props) {
  const [background, setBackground] = useState(school.colorValue);

  return (
    <div
      className="w-full h-full preview flex justify-center p-3 items-center rounded !bg-cover !bg-center transition-all"
      style={{ background }}
    >
      <GradientPicker
        background={background}
        setBackground={setBackground}
        school={school}
      />
    </div>
  );
}

export function GradientPicker({
  background,
  setBackground,
  className,
  school,
}: {
  background: string;
  setBackground: (background: string) => void;
  className?: string;
  school: School;
}) {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchoolColorSchema>) => {
    try {
      await axios.patch(`/api/schools/${school.name}`, values);
      toast.success("Cập nhật thành công");
    } catch (error) {
      toast.error("Cập nhật trường học thất bại");
    } finally {
      router.refresh();
    }
  };

  const form = useForm<z.infer<typeof formSchoolColorSchema>>({
    resolver: zodResolver(formSchoolColorSchema),
    defaultValues: {
      colorValue: "",
    },
  });

  const solids = [
    "#E2E2E2",
    "#ff75c3",
    "#ffa647",
    "#ffe83f",
    "#9fff5b",
    "#70e2ff",
    "#cd93ff",
    "#09203f",
  ];

  const defaultTab = useMemo(() => {
    if (background.includes("url")) return "image";
    if (background.includes("gradient")) return "gradient";
    return "solid";
  }, [background]);

  const { isSubmitting, isValid } = form.formState;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[220px] justify-start text-left font-normal",
            !background && "text-muted-foreground",
            className
          )}
        >
          <div className="w-full flex items-center gap-2">
            {background ? (
              <div
                className="h-4 w-4 rounded !bg-center !bg-cover transition-all"
                style={{ background }}
              ></div>
            ) : (
              <Paintbrush className="h-4 w-4" />
            )}
            <div className="truncate flex-1">
              {background ? background : "Chọn màu đại diện"}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger className="flex-1" value="solid">
              Màu đại diện
            </TabsTrigger>
          </TabsList>

          <TabsContent value="solid" className="flex flex-wrap gap-1 mt-0">
            {solids.map((s) => (
              <div
                key={s}
                style={{ background: s }}
                className="rounded-md h-6 w-6 cursor-pointer active:scale-105"
                onClick={() => {
                  setBackground(s);
                  form.setValue("colorValue", s);
                }}
              />
            ))}
          </TabsContent>
        </Tabs>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="colorValue"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="custom"
                      {...field}
                      value={background}
                      onChange={(e) => {
                        form.setValue("colorValue", e.currentTarget.value);
                        setBackground(e.currentTarget.value);
                      }}
                      className="col-span-2 h-8 mt-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center gap-x-2 mt-4">
              <Button disabled={isSubmitting} type="submit">
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}
