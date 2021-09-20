import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999999999999999999;
`;
