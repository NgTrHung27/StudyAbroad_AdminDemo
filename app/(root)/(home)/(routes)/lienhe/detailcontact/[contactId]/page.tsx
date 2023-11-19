import db from "@/lib/db";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React from "react";

export const revalidate = 0;

interface Props {
  params: {
    contactId: string;
  };
}

const ContactComponent = async ({ params }: Props) => {
  const contact = await db.contact.findUnique({
    where: {
      id: params.contactId,
    },
  });

  return (
    <div className="m-10 font-semibold bg-gray-200 p-4 w-auto rounded-lg">
      <Link
        href={`/lienhe`}
        className="flex items-center text-sm hover:opacity-75 transition mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Quay về trang liên hệ
      </Link>
      {contact ? (
        <table className="table-fixed w-full border-collapse">
          <thead>
            <tr>
              <th className="text-2xl w-1/6 border-gray-700">
                Thông tin liên hệ
              </th>
            </tr>
          </thead>
          <tbody className="border border-gray-700">
            <tr className="text-sm mt-2 border-b border-gray-700">
              <td className="font-semibold border-r border-gray-700">
                Tiêu đề
              </td>
              <td className="p-2">{contact.title}</td>
            </tr>
            <tr className="text-sm mt-2 border-b border-gray-700">
              <td className="font-semibold border-r border-gray-700">
                Tên người gửi
              </td>
              <td className="p-2">{contact.name}</td>
            </tr>
            <tr className="text-sm mt-2 border-b border-gray-700">
              <td className="font-semibold border-r border-gray-700">Email</td>
              <td className="p-2">{contact.email}</td>
            </tr>
            <tr className="text-sm mt-2 border-b border-gray-700">
              <td className="font-semibold border-r border-gray-700">
                Số điện thoại
              </td>
              <td className="p-2">{contact.phoneNumber}</td>
            </tr>
            <tr className="text-sm mt-2">
              <td className="font-semibold border-r border-gray-700">
                Nội dung liên hệ
              </td>
              <td className="p-2">{contact.textContent}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-sm mt-2 text-red-500">Không có dữ liệu liên hệ</p>
      )}
    </div>
  );
};

export default ContactComponent;
