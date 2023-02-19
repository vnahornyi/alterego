import { Box, Container, Link, Typography } from "@mui/material";
import { HOME } from "@^/constants/routes";
import { Link as RouterLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container fixed>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)" }}
      >
        <Typography variant="h2" textAlign="center" fontWeight={700}>
          404 Page not found!
          <br />
          <Link component={RouterLink} to={HOME}>
            Go to start page
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
