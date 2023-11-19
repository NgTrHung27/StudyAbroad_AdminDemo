import getCurrentUser from "@/actions/get-current-user";

import db from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import BackgroundForm from "./_components/background-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NameForm from "./_components/name-form";
import { ColorPicker } from "./_components/color-picker";
import LogoForm from "./_components/logo-form";
import SchoolTabs from "./_components/school-tabs";
import { UserRole } from "@prisma/client";
import Banner from "@/components/banner";
import { SchoolActions } from "./_components/school-actions";

type Props = {
  params: {
    truonghocId: string;
  };
};

const TruongHocIdPage = async ({ params }: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return redirect("/dangnhap");
  }

  const schools = await db.school.findMany();

  const school = await db.school.findUnique({
    where: {
      id: params.truonghocId,
    },
    include: {
      students: {
        include: {
          user: true,
        },
      },
      blogs: {
        include: {
          student: {
            include: {
              user: true,
            },
          },
        },
      },
      history: true,
      operations: true,
      programs: true,
      requirement: true,
    },
  });

  if (!school) {
    redirect("/");
  }

  const users = await db.user.findMany({
    where: {
      role: UserRole.USER,
    },
  });

  const students = await db.student.findMany({});

  const filterUsers = users.filter(
    (user) => !students.some((student) => student.userId === user.id)
  );

  const requiredFields = [
    school.name,
    school.backgroundUrl,
    school.colorValue,
    school.logoUrl,
    school.operations.some((operation) => operation.isPublished),
    school.programs.length > 0,
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!school.isPublished && (
        <Banner
          variant={"warning"}
          label="Trường học hiện tại đang ẩn khỏi hệ thống. Vui lòng hoàn thành các thông tin và bật lại để hiển thị với các nền tảng."
        />
      )}
      <div className="h-full p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Tùy chỉnh trường học</h1>
            <span className="text-sm text-slate-700">
              Hoàn thành đầy đủ các thông tin {completionText}
            </span>
          </div>
          <SchoolActions
            disabled={!isComplete}
            truonghocId={school.id}
            isPublished={school.isPublished}
          />
        </div>
        {/* Thông tin trường */}
        <div>
          <div className="grid md:grid-cols-2 gap-3 mt-16">
            <BackgroundForm school={school} />
            <Card className="w-full p-3">
              <CardHeader className="p-2">
                <CardTitle>
                  <NameForm school={school} />
                </CardTitle>
              </CardHeader>
              <CardContent className="relative h-[50vh] md:h-[40vh] p-3">
                <LogoForm school={school} />
              </CardContent>
              <CardFooter className="p-3">
                <ColorPicker school={school} />
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="my-4">
          <Card>
            <CardHeader>
              <CardTitle>Chi tiết trường học</CardTitle>
              <CardDescription>
                Quản lý các thông tin về học sinh, cơ sở, lịch sử, blogs và
                ngành học của trường học
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SchoolTabs
                school={school}
                filterUsers={filterUsers}
                students={school.students}
                schools={schools}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TruongHocIdPage;
