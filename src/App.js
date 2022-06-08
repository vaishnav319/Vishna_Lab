import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Views/Theme/theme";
import PageRoutes from "./Views/Routes/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "#fffff" }}>
        <PageRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
