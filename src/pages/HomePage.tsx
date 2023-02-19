import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NEWS } from "@^/constants/routes";

const HomePage: React.FC = () => {
  const { t } = useTranslation("translation");

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Button component={Link} to={NEWS}>
        {t("news-btn")}
      </Button>
    </Box>
  );
};

export default HomePage;
