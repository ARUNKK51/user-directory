import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

export default function UserList({ users, onEdit, onDelete }) {
  return (
    <Table sx={{ marginTop: 4 }}>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} align="center">
              No users found
            </TableCell>
          </TableRow>
        )}

        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>

            <TableCell>
              <Button
                size="small"
                onClick={() => onEdit(user)}
              >
                Edit
              </Button>

              <Button
                size="small"
                color="error"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
