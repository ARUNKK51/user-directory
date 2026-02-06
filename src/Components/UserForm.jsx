import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { userFormSchema } from "../config/userFormSchema";

export default function UserForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit, formState: { errors } } =
    useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userFormSchema.map(field => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type}
          fullWidth
          margin="normal"
          {...register(field.name, {
            required: field.required && "This field is required",
            pattern: field.pattern && {
              value: field.pattern,
              message: "Invalid format"
            }
          })}
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message}
        />
      ))}

      <Button type="submit" variant="contained" fullWidth>
        Save User
      </Button>
    </form>
  );
}
