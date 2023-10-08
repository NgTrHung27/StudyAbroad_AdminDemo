"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { formRegisterSchema } from "../../app/(auth)/(routes)/sign-up/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { DatePickerForm } from "../../@/components/ui/datepicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Calendar } from "../../@/components/ui/calendar";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";

interface InformationFormProps {
  onSubmit: any;
  isLoading: boolean;
  form: any;
}

const InformationForm = ({
  onSubmit,
  isLoading,
  form,
}: InformationFormProps) => {
  const [value, setValue] = useState<any>();

  return <></>;
};

export default InformationForm;
