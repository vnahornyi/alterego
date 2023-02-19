import MainLayout from "@^/modules/MainLayout";
import NewsList from "@^/modules/NewsList";

const NewsPage: React.FC = () => {
  return (
    <MainLayout>
      <NewsList />
    </MainLayout>
  );
};

export default NewsPage;
