import { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import UserForm from "../Components/UserForm";
import UserList from "../Components/UserList";
import ConfirmDialog from "../Components/ConfirmDialog";
import * as api from "../api/userApi";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const loadUsers = async () => {
    const res = await api.getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSave = async (data) => {
    if (editingUser) {
      await api.updateUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      await api.createUser(data);
    }
    loadUsers();
  };

  const handleDeleteConfirm = async () => {
    await api.deleteUser(deleteId);
    setDeleteId(null);
    loadUsers();
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: { xs: 2, sm: 4 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          fontWeight={600}
          mb={2}
        >
          User Manager
        </Typography>

        <Box mb={3}>
          <UserForm
            onSubmit={handleSave}
            defaultValues={editingUser}
          />
        </Box>

        <Box sx={{ overflowX: "auto" }}>
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={(id) => setDeleteId(id)}
          />
        </Box>
      </Paper>

      <ConfirmDialog
        open={!!deleteId}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteId(null)}
      />
    </Container>
  );
}