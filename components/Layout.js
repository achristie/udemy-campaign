import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Container>
      <Header />
      <div>{props.children}</div>
    </Container>
  );
};

export default Layout;
