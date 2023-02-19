import { Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import LoadingScreen from "@^/components/LoadingScreen";
import NewsCard from "@^/components/NewsCard";
import { useGetNewsQuery } from "./store/api";

const NewsList: React.FC = () => {
  const { t, i18n } = useTranslation("translation");
  const { isLoading, data, refetch } = useGetNewsQuery(i18n.language);

  if (!data?.news?.length && isLoading) {
    return <LoadingScreen />;
  }

  if (!data) return null;

  return (
    <Stack direction="column" spacing={3}>
      {data.news.map((news, idx) => (
        <NewsCard key={news.id} priority={idx > 1} {...news} />
      ))}
      {data.news.length !== data.total && (
        <Box display="flex" justifyContent="center">
          <Button variant="outlined" onClick={refetch}>
            {t('load-more-btn')}
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default NewsList;
