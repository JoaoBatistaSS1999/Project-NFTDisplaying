import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #ffff00;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  div {
    height: 400px;
    width: 100%;
  }
`;
