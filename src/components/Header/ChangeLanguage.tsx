import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { HOME } from "@^/constants/routes";

const ChangeLanguage: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { i18n } = useTranslation();
  const isOpenMenu = !!anchorEl;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lang: string) => {
    return async () => {
      await i18n.changeLanguage(lang);
      handleClose();
      navigate(HOME);
    };
  };

  return (
    <div>
      <Button
        id="language-picker"
        aria-controls={isOpenMenu ? "language-picker-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpenMenu ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        {i18n.language.toUpperCase()}
      </Button>
      <Menu
        id="language-picker-menu"
        anchorEl={anchorEl}
        aria-labelledby="language-picker"
        open={isOpenMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={handleChangeLanguage("en")}>EN</MenuItem>
        <MenuItem onClick={handleChangeLanguage("uk")}>UK</MenuItem>
      </Menu>
    </div>
  );
};

export default ChangeLanguage;
