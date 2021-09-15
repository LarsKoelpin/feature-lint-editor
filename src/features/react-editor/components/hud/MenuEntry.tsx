import styled from "styled-components";

export const MenuEntry = styled.button<{ active: boolean }>`
  padding: 8px;
  font-size: 12px;
  outline: none;
  border: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${(props) => {
    if (props.active) {
      return "#f6f6f6";
    }
    return "transparent";
  }};
  &:hover {
    background: ${(props) => {
      if (props.active) {
        return "#f6f6f6";
      }
      return "#ececec";
    }};
    cursor: pointer;
  }
`;
