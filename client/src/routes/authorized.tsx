import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { authorizedWebRoutes, authorizedMobileRoutes } from "./mapping";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer/Footer";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

const Authorized: React.FC = () => {
  const { width } = useWindowWidth();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (width < 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [width]);

  return (
    <Suspense fallback={"Loading..."}>
      <Header />
      <Main>
        <Routes>
          {isSmallScreen
            ? authorizedMobileRoutes.map((i) => (
                <Route
                  key={i.path}
                  exact={i.exact}
                  path={i.path}
                  element={<i.Component />}
                />
              ))
            : authorizedWebRoutes.map((i) => (
                <Route
                  key={i.path}
                  exact={i.exact}
                  path={i.path}
                  element={<i.Component />}
                />
              ))}
        </Routes>
      </Main>
      <Footer />
    </Suspense>
  );
};

export default Authorized;
