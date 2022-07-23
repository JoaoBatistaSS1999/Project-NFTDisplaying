import styled from "styled-components";

export const FilterContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #894343;
  gap: 5px;
  overflow-y: auto;
  flex-wrap: nowrap;

  ::-webkit-scrollbar {
    display: none;
  }
`;
