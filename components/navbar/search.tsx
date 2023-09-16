"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "../input";

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      prompt: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      setIsLoading(true);

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      router.refresh();
      setIsLoading(false);
    }
  };

  return (
    <Input
      id="prompt"
      label="Tìm kiếm..."
      type="text"
      disabled={isLoading}
      register={register}
      errors={errors}
      required
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default Search;
