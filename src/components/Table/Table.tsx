import type { ReactNode } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

import * as Styled from './Table.sc';

type Props<T = unknown> = {
  title?: string;
  actionButton?: ReactNode;
  data: T[];
  columns: ColumnDef<T>[];
};

export function Table<T = unknown>({ data, columns }: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div>
      <Styled.Table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Styled.HeaderRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Styled.Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Styled.Th>
              ))}
            </Styled.HeaderRow>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <Styled.Tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Styled.Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Styled.Td>
              ))}
            </Styled.Tr>
          ))}
        </tbody>
      </Styled.Table>
    </div>
  );
}
