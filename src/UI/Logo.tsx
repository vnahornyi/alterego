import AdbIcon from "@mui/icons-material/Adb";
import { SxProps, Theme, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HOME } from "@^/constants/routes";

interface ILogoProps {
  styles?: SxProps<Theme>;
}

const Logo: React.FC<ILogoProps> = ({ styles }) => {
  return (
    <Box sx={styles}>
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to={HOME}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        AlterEGO
      </Typography>
    </Box>
  );
};

export default Logo;
