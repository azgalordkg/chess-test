import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLoadMoreButton = styled.button`
  border: none;
  background: #48a868;
  border-radius: 4px;
  padding: 10px;
  width: 300px;
  color: white;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
  &:hover {
    opacity: 0.75;
  }
`;
