import { Box, CircularProgress } from "@mui/material";
import Logo from "@^/UI/Logo";

const LoadingScreen: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
    >
      <Logo styles={{ display: "flex", alignItems: "center" }} />
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingScreen;
