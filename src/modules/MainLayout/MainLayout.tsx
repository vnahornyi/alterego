import { Container } from "@mui/material";

import Header from "@^/components/Header/Header";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container fixed sx={{ py: 4 }}>{children}</Container>
    </>
  );
};

export default MainLayout;
