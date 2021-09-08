import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PAGES} from "./consts";
import {lazy, Suspense} from "react";

const MainPage = lazy(() => import("../../pages/MainPage"));
const ParagraphPage = lazy(() => import("../../pages/ParagraphPage"));

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={PAGES.MAIN} exact component={MainPage} />
        <Route path={PAGES.PARAGRAPH} exact component={ParagraphPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)
