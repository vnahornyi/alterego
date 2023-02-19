import {
  Button,
  Container,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import loadable from "@loadable/component";

import { HOME, LOGIN, NEWS } from "@^/constants/routes";
import Logo from "@^/UI/Logo";
import { useAppSelector } from "@^/hooks";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";

const AuthorizedMenu = loadable(() => import("./AuthorizedMenu"));

const Header: React.FC = () => {
  const { t } = useTranslation("translation");
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized);
  const isLoading = useAppSelector((state) => state.auth.isLoading);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" fixed>
        <Toolbar disableGutters>
          <Logo styles={{ display: { xs: "none", md: "flex" } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo styles={{ display: { xs: "flex", md: "none" } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ChangeLanguage />
            <Button
              component={RouterLink}
              to={HOME}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("home-btn")}
            </Button>
            <Button
              component={RouterLink}
              to={NEWS}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("news-btn")}
            </Button>
          </Box>

          {!isLoading && (
            <Box sx={{ flexGrow: 0 }}>
              {isAuthorized ? (
                <AuthorizedMenu />
              ) : (
                <Button
                  component={RouterLink}
                  to={LOGIN}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {t("login-btn")}
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
