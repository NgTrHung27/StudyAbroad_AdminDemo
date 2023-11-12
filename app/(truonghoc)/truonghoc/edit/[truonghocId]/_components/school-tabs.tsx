"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, User } from "@prisma/client";
import React from "react";
import { UsersDataTable } from "./_data/users-data-table";
import { usersColumns } from "./_data/users-column";
import { SchoolFull } from "@/types";

type Props = {
  school: SchoolFull;
  users: User[];
  schools: School[];
};

const SchoolTabs = ({ school, users, schools }: Props) => {
  return (
    <Tabs defaultValue="users">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="users">Học sinh</TabsTrigger>
        <TabsTrigger value="operations">Cơ sở</TabsTrigger>
        <TabsTrigger value="history">Lịch sử</TabsTrigger>
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="programs">Ngành học</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <UsersDataTable
          columns={usersColumns}
          data={school.students}
          school={school}
          users={users}
          schools={schools}
        />
      </TabsContent>
    </Tabs>
  );
};

export default SchoolTabs;
