import { Box } from "@mui/material";
import DeleteButton from "./DeleteButton/DeleteButton";
import { EditButton } from "./EditButton/EditButton";

interface AdminCardControlsProps {
  id: number;
}
export function AdminCardControls({ id }: AdminCardControlsProps): JSX.Element {
  return (
    <Box>
      <EditButton id={id} />
      <DeleteButton id={id} />
    </Box>
  );
}
