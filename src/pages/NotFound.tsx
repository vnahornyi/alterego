import { Box, Container, Link, Typography } from "@mui/material";
import { HOME } from "@^/constants/routes";
import { Link as RouterLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box
      height="400px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" textAlign="center" fontWeight={700}>
        404 | Page not found!
      </Typography>
    </Box>
  );
};

export default NotFound;
