import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";

import { HOME, LOGIN } from "@^/constants/routes";
import { useAppSelector } from "@^/hooks";
import Logo from "@^/UI/Logo";
import LoadingScreen from "@^/components/LoadingScreen";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoading = useAppSelector((state) => state.auth.isLoading);
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const shouldRedirectWhenAuthorized = pathname.includes(LOGIN);

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
        <Box p={6}>
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};

export default AuthLayout;
