"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";

export default function TableUI() {
  return (
    <Table
      color="primary"
      selectionMode="single"
      defaultSelectedKeys={["2"]}
      removeWrapper
      className="p-1"
      onSortChange={() => {
        console.log("Código de orden");
      }}
    >
      <TableHeader>
        <TableColumn width={100}>
          <Tooltip content="Número de solicitud">SOL ID</Tooltip>
        </TableColumn>
        <TableColumn>DESCRIPCIÓN</TableColumn>
        <TableColumn allowsSorting={true}>
          <Tooltip content="Tipo de operación (Alta, Modificación, Baja)">
            OP
          </Tooltip>
        </TableColumn>
        <TableColumn align="end" width={100}>
          <Tooltip content="Días transcurridos desde que la solicitud se encuentra en mi bandeja">
            Rol dem
          </Tooltip>
        </TableColumn>
        <TableColumn align="end" width={100}>
          <Tooltip content="Días transcurridos desde que se creó la solicitud">
            Total dem
          </Tooltip>
        </TableColumn>
      </TableHeader>

      <TableBody>
        <TableRow key="1">
          <TableCell>1005672</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>B</TableCell>
          <TableCell>50</TableCell>
          <TableCell>225</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>1005625</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>A</TableCell>
          <TableCell>2</TableCell>
          <TableCell>10</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>1005603</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>A</TableCell>
          <TableCell>1</TableCell>
          <TableCell>6</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>1005660</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>M</TableCell>
          <TableCell>10</TableCell>
          <TableCell>125</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
