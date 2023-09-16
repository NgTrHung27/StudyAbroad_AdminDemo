"use client";

import React from "react";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiSearch } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type: string;
  disabled?: boolean;
  validate?: {};
  onSubmit?: () => void;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = ({
  id,
  label,
  type,
  disabled,
  validate,
  required,
  onSubmit,
  register,
  errors,
}: InputProps) => {
  return (
    <div className=" w-72 hover:cursor-pointer bg-white border-2 rounded-full outline-none transition">
      <form onSubmit={onSubmit}>
        <div className="flex flex-row items-center justify-center">
          <input
            id={id}
            disabled={disabled}
            {...register(id, { required, validate })}
            placeholder="Tìm kiếm..."
            onSubmit={onSubmit}
            type={"text"}
            className={`text-black font-semibold px-3 peer w-70 h-12 rounded-full outline-none disabled:opacity-70 disabled:cursor-not-allowed${
              errors[id] ? "border-rose-500" : "border-neutral-300"
            } ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
          />
          <button
            type="submit"
            className="flex flex-row items-center justify-center bg-[#7D1F1F] w-10 h-10 rounded-full"
          >
            <BiSearch className="font-bold w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
