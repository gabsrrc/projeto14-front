import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage/index";
import LoginPage from "./LoginPage/index";
import CheckoutPage from "./CheckoutPage/index";
import styled from "styled-components";
import "./reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <div>
          <LinkStyled to="/" style={{ marginLeft: 0 }}>
            GR STORE
          </LinkStyled>
        </div>
        <HeaderIcons>
          <LinkStyled to="/checkout">Carrinho</LinkStyled>
          <LinkStyled to="/login">User</LinkStyled>
        </HeaderIcons>
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Container>
      <Footer>
        <p>GR Store</p>
        <p>Copyright©2022</p>
        <p>Todos os direitos reservados.</p>
      </Footer>
    </BrowserRouter>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  margin-top: 40px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 6%;
  height: 8vh;
  border-bottom: 1px solid black;
  background-color: gray;
`;
const HeaderIcons = styled.div`
  display: flex;

  padding-left: 10px;
  LinkStyled {
    margin-left: 10px;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  height: 12vh;
  width: 100%;
  gap: 22px;
`;
const LinkStyled = styled(Link)`
  color: initial;
  text-decoration: none;
  margin-left: 10px;
`;