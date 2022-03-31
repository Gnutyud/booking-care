const handleEdit = (value: any) => {
  console.log(value)
};
const handleDelete = (value: any) => {
  console.log(value.id)
};

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id"
  },
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Email",
    accessor: "email"
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
    Cell: ({value}: any) => value ? value : "-"
  },
  {
    Header: "Gender",
    accessor: "gender",
    Cell: ({value}: any) => value ? "Male" : "Female"
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (row: any) => (
      <div>
         <button onClick={e=> handleEdit(row.row.original)}>Edit</button>
         <button onClick={e=> handleDelete(row.row.original)}>Delete</button>
      </div>
      )
  }
]