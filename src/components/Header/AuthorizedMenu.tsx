import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "@^/hooks";
import { PROFILE } from "@^/constants/routes";
import logoutUser from "@^/helpers/logoutUser";

const AuthorizedMenu: React.FC = () => {
  const { t } = useTranslation('translation');
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.auth.username);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenProfile = () => {
    navigate(PROFILE);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (handler?: () => void) => {
    if (handler) handler();

    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={username ?? undefined} src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu.bind(null, undefined)}
      >
        <MenuItem onClick={handleOpenProfile}>{t('profile-btn')}</MenuItem>
        <MenuItem onClick={logoutUser}>{t('logout-btn')}</MenuItem>
      </Menu>
    </>
  );
};

export default AuthorizedMenu;
