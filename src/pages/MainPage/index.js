import {useEffect, useState} from "react";
import {fetchMeatAndFiller} from "../../api/meat-and-filler";
import {StyledLoadMoreButton, StyledWrapper} from "./styles";
import {Article} from "../../components/Article";
import {useHistory} from "react-router-dom";
import {PAGES} from "../../layout/Router/consts";
import {getStorage, setStorage} from "../../utils/storage";

const MainPage = () => {
  const history = useHistory();
  const [articles, setArticles] = useState([]);
  
  const fetchData = () => {
    fetchMeatAndFiller().then(({ data }) => {
      setArticles(data)
      setStorage("data", data);
    });
  };

  useEffect(() => {
    const savedData = getStorage("data");
    if (savedData) {
      setArticles(savedData);
    } else {
      fetchData();
    }
  }, []);

  return (
    <StyledWrapper>
      {articles.map((article) => {
        const handleClick = () => {
          history.push(PAGES.PARAGRAPH, { article });
        };

        return (
          <Article isSliced onClick={handleClick}>{article}</Article>
        );
      })}
      <StyledLoadMoreButton onClick={fetchData}>Load next</StyledLoadMoreButton>
    </StyledWrapper>
  )
};

export default MainPage;
