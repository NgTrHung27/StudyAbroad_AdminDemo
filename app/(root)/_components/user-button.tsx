"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SafeUser } from "@/types";
import { LogIn, LogOut, PenSquare } from "lucide-react";
import { signOut } from "next-auth/react";

interface UserButtonProps {
  currentUser?: SafeUser | null;
}

export function UserButton({ currentUser }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="/placeholder.jpg" alt="avatar" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{currentUser?.name}</DropdownMenuLabel>
        <p className="px-2 text-xs text-muted-foreground font-medium">
          {currentUser?.email}
        </p>
        <DropdownMenuSeparator />
        {currentUser && (
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Đăng xuất</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
