import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useSelector } from 'react-redux';

import '../styles/dataTable.scss';

const DataTable = ({ columns, onDelete, onEdit }) => {
  const content = useSelector((state) => state.content.value);

  const table = useReactTable({
    data: content,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className='data-table'>
      <table className='table'>
        <thead className='table-header'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='table-row'>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='header-cell table-cell'>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id} className='table-row'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='table-cell'>
                  {flexRender(cell.column.columnDef.cell, { ...cell.getContext(), onEdit, onDelete, index })}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;
