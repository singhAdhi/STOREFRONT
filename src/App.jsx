import "./App.css";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
