import { HashRouter } from "react-router-dom";
import TcbHeader from "./components/TcbHeader";
import { GlobalStyle, SRoot } from "./styles/styles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <SRoot>
          <TcbHeader />
        </SRoot>
      </HashRouter>
    </>
  );
}

export default App;
