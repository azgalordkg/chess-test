import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #3a80e6;
  padding: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;

  &:hover {
    opacity: ${({ isClickable }) => (isClickable ? "0.75" : "1")};
  }
`;

export const StyledContent = styled.div`
  border-radius: 5px;
  background: #3a80e6;
`;

export const StyledText = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
  padding: 20px;
`;
