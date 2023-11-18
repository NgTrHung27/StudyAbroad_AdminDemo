"use client";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Contact } from "@prisma/client";
import { formContactSchema } from "./constants";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  contacts: Contact;
};

const Contact = ({ contacts }: Props) => {
  //
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    console.log("Contacts:", contacts);
  }, [contacts]);

  const ContactForm = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: contacts && contacts.name ? contacts.name : "", // Kiểm tra giá trị của contacts.name
      phoneNumber: "",
      email: "",
      title: "",
      textContent: "",
    },
  });

  const informationContent = (
    <>
      <FormField
        control={ContactForm.control}
        name="name"
        render={({ field }) => {
          console.log("Field:", field);
          return (
            <FormItem>
              <FormControl>
              <Input {...field} readOnly />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );

  return (
    <div className="m-10">
      <Form {...ContactForm}>
        <form className="w-[350px]">{informationContent}</form>
      </Form>
    </div>
  );
};

export default Contact;
