import {StyledContent, StyledText, StyledWrapper} from "./styles";
import {textSlicer} from "../../utils/textSlicer";

export const Article = ({ children, onClick, isClickable, isSliced }) => {
  return (
    <StyledWrapper isClickable={isClickable} onClick={onClick}>
      <StyledContent>
        <StyledText>{isSliced ? textSlicer(children) : children}</StyledText>
      </StyledContent>
    </StyledWrapper>
  );
};
