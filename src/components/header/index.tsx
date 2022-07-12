import React, { useState } from "react";
import { HeaaderContainer, ConnectButton } from "./styles";
import metamask from "../../assets/metamask.png";

const Header: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log("metamask not installed!");
      return;
    }
    console.log("metamask detected!");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts);
    console.log(typeof accounts);
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
