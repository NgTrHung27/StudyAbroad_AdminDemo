"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, User } from "@prisma/client";
import React from "react";
import { UsersDataTable } from "./_data/users-data-table";
import { usersColumns } from "./_data/users-column";
import { SchoolFull } from "@/types";
import OperationTab from "./_tabs/operation-tab";
import { OperationsDataTable } from "./_data/operations-data-table";
import { operationsColumns } from "./_data/operations-columns";

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
      <TabsContent value="operations">
        <OperationsDataTable
          columns={operationsColumns}
          data={school.operations}
        />
      </TabsContent>
    </Tabs>
  );
};

export default SchoolTabs;
