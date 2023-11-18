import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";

type Props = {};

const ResendPassword = (props: Props) => {
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Yêu cầu khôi phục mật khẩu không tìm thấy</CardTitle>
        <CardDescription>
          Yêu cầu đặt lại mật khẩu của bạn đã hết hạn hoặc đường dẫn đã được sử
          dụng.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ResendPassword;
