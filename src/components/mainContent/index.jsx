import React from "react";
import { AppContext } from "../../context/appContext";
import FilterBar from "../filterBar";
import NFTContainer from "../nftContainer";
import { Container } from "./styles";

function MainContent() {
  const { number, setNumber } = React.useContext(AppContext);
  return (
    <Container>
      <FilterBar />

      <div></div>
      <div></div>
      <div></div>

      {/* <NFTContainer /> */}
    </Container>
  );
}

export default MainContent;
