import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "@^/components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container fixed sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
