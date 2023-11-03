"use client";
import { createContext } from "react";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Check, X } from "lucide-react";

export default function App() {
  return (
    <div>
      <div className="flex m-5 gap-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn năm học" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Năm Học</SelectLabel>
              <SelectItem value="apple">2020-2021</SelectItem>
              <SelectItem value="banana">2021-2022</SelectItem>
              <SelectItem value="blueberry">2022-2023</SelectItem>
              <SelectItem value="grapes">2023-2024</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Chọn học kỳ" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Học Kỳ</SelectLabel>
              <SelectItem value="apple">Học Kỳ 1</SelectItem>
              <SelectItem value="banana">Học Kỳ 2</SelectItem>
              <SelectItem value="blueberry">Học Kỳ 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3 ">
        <Table
          selectionMode="single"
          defaultSelectedKeys={["2"]}
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Môn Học</TableColumn>
            <TableColumn>Mini Test</TableColumn>
            <TableColumn>Mini Test</TableColumn>
            <TableColumn>Mini Test</TableColumn>
            <TableColumn>Mid-term test</TableColumn>
            <TableColumn>Mini Test </TableColumn>
            <TableColumn>Final examination</TableColumn>
            <TableColumn>Total</TableColumn>
            <TableColumn>Letter grades</TableColumn>
            <TableColumn>Result</TableColumn>
            <TableColumn>Note</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Big Data</TableCell>
              <TableCell>3</TableCell>
              <TableCell>4</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>A</TableCell>
              <TableCell>
                <Check />
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Design Partern</TableCell>
              <TableCell>7</TableCell>
              <TableCell>7</TableCell>
              <TableCell>4</TableCell>
              <TableCell>9</TableCell>
              <TableCell>1</TableCell>
              <TableCell>10</TableCell>
              <TableCell>7</TableCell>
              <TableCell>B+</TableCell>
              <TableCell>
                <X />
              </TableCell>
              <TableCell>Retest</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>IOT</TableCell>
              <TableCell>4</TableCell>
              <TableCell>6</TableCell>
              <TableCell>7.5</TableCell>
              <TableCell>6</TableCell>
              <TableCell>8.5</TableCell>
              <TableCell>7.5</TableCell>
              <TableCell>7.7</TableCell>
              <TableCell>C</TableCell>
              <TableCell>
                <Check />
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Database</TableCell>
              <TableCell>2</TableCell>
              <TableCell>6</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>8</TableCell>
              <TableCell>B</TableCell>
              <TableCell>
                <Check />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
