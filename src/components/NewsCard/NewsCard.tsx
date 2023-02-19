import { Box, Button, Link, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { INewsItem } from "@^/modules/NewsList/types";
import Image from "@^/UI/Image";

interface INewsCardProps extends INewsItem {
  priority?: boolean;
}

const NewsCard: React.FC<INewsCardProps> = ({ image, name, priority, url }) => {
  const { t } = useTranslation("translation");

  return (
    <Paper
      elevation={1}
      sx={{
        padding: 3,
        borderRadius: 4,
        display: "flex",
        gap: 4,
      }}
    >
      <Box width="50%">
        <Image
          src={image}
          width={1306}
          height={647}
          alt={name}
          priority={priority}
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        height="auto"
        py={8}
      >
        <Link
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          sx={(theme) => ({
            textDecoration: "none",
            color: theme.palette.text.primary,
          })}
        >
          <Typography variant="h6" fontWeight={600} component="h4">
            {name}
          </Typography>
        </Link>
        <Button
          component="a"
          href={url}
          target="_blank"
          rel="norererrer noopener"
        >
          {t('read-more-btn')}
        </Button>
      </Box>
    </Paper>
  );
};

export default NewsCard;
