import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo1.png";

import l from "../assets/images/logo1.svg";

const Container = styled.div`
  position: fixed;
  top: 40px;
  left: 85vw;
  height: 100px;
  z-index: 3;
`;

const Image = styled.img`
  height: 100%;
`;
const Logo = () => {
  return (
    <Container>
      <Image src={logo}></Image>
      {/* <Image src={l}></Image> */}
    </Container>
  );
};

export default Logo;
 