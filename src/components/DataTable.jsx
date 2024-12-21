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
          {content.length && table.getRowModel().rows.map(row => (
            <tr key={row.id} className='table-row'>
              {row.getVisibleCells().map(cell => {
                const value = cell.getValue();
                return cell.column.id !== 'id' ? (
                  <td key={cell.id} className='table-cell'>
                    {value}
                  </td>
                ) : (
                  <td key={cell.id} className='table-cell'>
                    <button className='table-button edit' onClick={() => onEdit(value)}>Edit</button>
                    <button className='table-button delete' onClick={() => onDelete(value)}>Delete</button>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable;