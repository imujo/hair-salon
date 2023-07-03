"use client";
import { FC } from "react";
import { Service, euroFormat } from "./pricingTypes";
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface PricingTableProps {
  data: Service[];
}

const columnHelper = createColumnHelper<Service>();

const columns: ColumnDef<Service, any>[] = [
  columnHelper.accessor("title", {
    header: "Service",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("type.title", {
    header: "Type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => {
      const amount = parseFloat(info.getValue());
      return euroFormat.format(amount);
    },
  }),
];

const PricingTable: FC<PricingTableProps> = ({ data }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className=" w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="text-start text-sm font-light" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="h-14 border-b-[1px] border-gray-200 text-sm font-light [&>*:first-child]:font-medium"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
