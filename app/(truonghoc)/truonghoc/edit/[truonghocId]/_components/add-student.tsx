"use client";

import { useAddStudentSchoolModal } from "@/hooks/use-school-modal";
import { SchoolFull } from "@/types";
import { School, User } from "@prisma/client";
import { useEffect } from "react";

type Props = {
  setIsAdd: (state: boolean) => void;
  school: SchoolFull;
  users: User[];
  schools: School[];
};

const AddStudent = ({ setIsAdd, school, users, schools }: Props) => {
  const onOpen = useAddStudentSchoolModal((state) => state.onOpen);
  const isOpen = useAddStudentSchoolModal((state) => state.isOpen);

  setIsAdd(isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen({ school }, { users }, { schools });
    }
  }, [isOpen, onOpen, school, users, schools]);

  return null;
};

export default AddStudent;
