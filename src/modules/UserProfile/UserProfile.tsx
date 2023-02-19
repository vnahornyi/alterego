import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import logoutUser from "@^/helpers/logoutUser";
import { useAppSelector } from "@^/hooks";

const UserProfile: React.FC = () => {
  const { t } = useTranslation('translation');
  const username = useAppSelector((state) => state.auth.username);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4" component="h1" textAlign="center">
        {t('profile-h')}
      </Typography>
      <List sx={(theme) => ({ marginX: `-${theme.spacing(6)}` })}>
        <ListItem sx={{ paddingX: 6 }}>
          <ListItemText
            sx={{ textAlign: "center" }}
            primary={`${t('username-text')} ${username}`}
          />
        </ListItem>
        <ListItemButton sx={{ paddingX: 6 }} color="error" onClick={logoutUser}>
          <ListItemText sx={{ textAlign: "center", color: 'red' }} primary={t('logout-btn')} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default UserProfile;
