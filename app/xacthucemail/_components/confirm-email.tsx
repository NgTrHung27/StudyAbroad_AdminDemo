"use client";

import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { SafeUser } from "../../../types";

type Props = { currentUser: SafeUser };

const ConfirmEmail = ({ currentUser }: Props) => {
  const isEmailVerified = currentUser.emailVerified;

  const sendEmail = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${currentUser.id}/sendEmail`,
        {
          email: currentUser.email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Gửi email thành công");
    } catch (error) {
      console.log(error);
      toast.error("Gửi email thất bại");
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card>
        <CardHeader>
          <CardTitle>Xác thực email</CardTitle>
          <CardDescription>
            Chứng thực email của tài khoản để sử dụng các tính năng của trang
            web
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isEmailVerified ? (
            <div>Bạn đã xác thực email rồi</div>
          ) : (
            <div>Bạn chưa xác thực email</div>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-x-2">
            {!isEmailVerified && (
              <Button onClick={() => sendEmail()} variant={"link"}>
                Gửi email xác thực
              </Button>
            )}
            <Link href={"/"}>
              <Button>Quay về trang chủ</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ConfirmEmail;
