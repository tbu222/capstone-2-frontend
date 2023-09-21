import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { darkMode, lightMode } from "./utils/Theme";
import { Container, Main, Wrapper } from "./App.styled.js";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home.jsx";
import Video from "./pages/Video/Video.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Search from './pages/Search/Search.jsx';
import History from './pages/History/History.jsx';
function App() {
  const [lightTheme, setLightTheme]  = useState(true)
  return (
    <ThemeProvider theme={lightTheme ? lightMode : darkMode}>
      <Container>
        <BrowserRouter>
          <Menu lightTheme={lightTheme} setLightTheme={setLightTheme} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trend" element={<Home type="trend" />} />
                  <Route path="library" element={<Home type="library" />} />
                  <Route path="search" element={<Search />} />
                  <Route path="history" element={<History />} />
                  <Route
                    path="subscribes"
                    element={<Home type="subscribes" />}
                  />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
