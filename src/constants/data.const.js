import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper();
const actionCol = columnHelper.accessor('id', {
  header: 'Actions',
  cell: ({ row, onEdit, onDelete, index }) => (
    <>
      <button className='table-button edit' onClick={() => onEdit(row.original, index)}>Edit</button>
      <button className='table-button delete' onClick={() => onDelete(row.original.id, index)}>Delete</button>
    </>
  ),
});

export const USERS_API = {
  name: 'User',
  url: '/users',
  columns: [
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Company", accessorFn: (row) => row?.company?.name },
    actionCol
  ],
  emptyState: {
    name: '',
    email: '',
    company: '',
  }
}

export const POSTS_API = {
  name: 'Post',
  url: '/posts',
  columns: [
    { header: "Title", accessorKey: "title" },
    { header: "Body", accessorKey: "body" },
    actionCol
  ],
  emptyState: {
    title: '',
    body: '',
  }
}
