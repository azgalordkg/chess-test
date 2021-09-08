import {Article} from "../../components/Article";
import {StyledWrapper} from "./styles";

const ParagraphPage = ({ location: { state } }) => {
  return (
    <StyledWrapper>
      <Article>{state?.article ? state.article : "Paragraph not found"}</Article>
    </StyledWrapper>
  );
};

export default ParagraphPage;
