import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";

import { HOME } from "@^/constants/routes";
import { useAppSelector } from "@^/hooks";
import Logo from "@^/UI/Logo";
import LoadingScreen from "@^/components/LoadingScreen";

interface IAuthLayoutProps {
  shouldRedirectWhenAuthorized?: boolean;
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  children,
  shouldRedirectWhenAuthorized,
}) => {
  const navigate = useNavigate();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);

  useEffect(() => {
    if (
      (!isLoading && isAuthorized && shouldRedirectWhenAuthorized) ||
      (!shouldRedirectWhenAuthorized && !isAuthorized && !isLoading)
    ) {
      navigate(HOME);
    }
  }, [isLoading, isAuthorized]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box
      width="100%"
      minHeight="100vh"
      bgcolor="lightgray"
      p={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="absolute"
        left="50%"
        sx={(theme) => ({
          transform: "translateX(-50%)",
          top: theme.spacing(6),
        })}
      >
        <Logo
          styles={(theme) => ({
            display: "flex",
            alignItems: "center",
            color: theme.palette.primary.main,
          })}
        />
      </Box>
      <Paper
        elevation={5}
        sx={(theme) => ({
          borderRadius: 3,
          maxWidth: theme.spacing(82),
          width: "100%",
          zIndex: 2,
        })}
      >
        <Box p={6}>{children}</Box>
      </Paper>
    </Box>
  );
};

export default AuthLayout;
