import styled from "styled-components";

export const HeaaderContainer = styled.nav`
  height: 60px;
  width: 100%;
  background-color: #3a3a3a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const ConnectButton = styled.button`
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;
  color: #000000;
  background-color: aliceblue;

  img {
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #000000;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
