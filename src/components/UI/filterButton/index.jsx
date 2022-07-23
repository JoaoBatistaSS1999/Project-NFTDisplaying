import React from "react";
import { FilterButtonContainer } from "./styles";

function FilterButton({ text }) {
  return (
    <FilterButtonContainer>
      <button>
        <h3>{text}</h3>
      </button>
    </FilterButtonContainer>
  );
}

export default FilterButton;
