import React from "react";
import { HeaaderContainer, ConnectButton } from "./styles";
import metamask from "../../assets/metamask.png";

const Header: React.FC = () => {
  const connectWallet = () => {
    if (!window.ethereum) {
      console.log("metamask not installed!");
      return;
    }
    console.log("metamask detected!");
  };

  return (
    <HeaaderContainer>
      <h2>Connect your wallet to display your NFTs!</h2>
      <ConnectButton onClick={connectWallet}>
        Connect <img src={metamask} alt='wallet' />
      </ConnectButton>
    </HeaaderContainer>
  );
};
export default Header;
