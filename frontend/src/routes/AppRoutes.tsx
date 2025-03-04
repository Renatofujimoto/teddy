import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/clients" element={<Clients />} />
      <Route path="/clients-selected" element={<ClientsSelected />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
