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
      blogs: true,
      history: true,
      operations: true,
      programs: true,
    },
  });

  if (!school) {
    redirect("/");
  }

  const users = await db.user.findMany({
    where: {
      role: UserRole.USER,
      NOT: {
        students: {
          every: {},
        },
      },
    },
  });

  return (
    <div className="h-full p-6">
      {/* Thông tin trường */}
      <div>
        <div className="grid md:grid-cols-2 gap-3">
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
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết trường học</CardTitle>
            <CardDescription>
              Quản lý các thông tin về học sinh, cơ sở, lịch sử, blogs và ngành
              học của trường học
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolTabs school={school} users={users} schools={schools} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TruongHocIdPage;
