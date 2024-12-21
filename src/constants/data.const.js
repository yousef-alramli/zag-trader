export const USERS_API = {
  name: 'User',
  url: '/users',
  columns: [
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Company", accessorFn: (row) => row?.company?.name },
    { header: "Actions", accessorKey: "id" }
  ]
}

export const POSTS_API = {
  name: 'Post',
  url: '/posts',
  columns: [
    { header: "Title", accessorKey: "title" },
    { header: "Body", accessorKey: "body" },
    { header: "Actions", accessorKey: "id" }
  ]
}
