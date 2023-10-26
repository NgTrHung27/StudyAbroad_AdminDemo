"use client";
import { createContext } from "react";

const Context = createContext();
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

const colors = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];

export default function App() {
  const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    <div className="flex flex-col gap-3">
      <Table
        color={selectedColor}
        selectionMode="single"
        defaultSelectedKeys={["2"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Môn Học</TableColumn>
          <TableColumn>Mini Test</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STATUS</TableColumn>

        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
            <TableCell>Example Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* <RadioGroup
        label="Selection color"
        orientation="horizontal"
        value={selectedColor}
        onValueChange={setSelectedColor}
      >
        {colors.map((color) => (
          <Radio key={color} color={color} value={color} className="capitalize">
            {color}
          </Radio>
        ))}
      </RadioGroup> */}
    </div>
  );
}
