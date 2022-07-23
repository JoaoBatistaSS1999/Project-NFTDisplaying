import React from "react";
import NFTCard from "../UI/nftCard";
import { Container } from "./styles";

const NFTContainer = ({ nfts }) => {
  return (
    <Container>
      {nfts.map((nft, index) => (
        <NFTCard
          key={index}
          bc={nft.blockchain}
          collection={nft.collection}
          contract={nft.contract}
          mintedAt={nft.mintedAt}
          supply={nft.supply}
          description={nft.meta.description}
        />
      ))}
    </Container>
  );
};
export default NFTContainer;
