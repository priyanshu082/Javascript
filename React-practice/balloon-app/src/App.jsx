import { Route, Routes } from "react-router-dom";
import Todo2 from "./pages/Todo2";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Pagination from "./pages/Pagination";
import Star from "./pages/Star";
import TicTacToe from "./pages/TicTacToe";
import Caraousel from "./pages/Caraousel";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo2 />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/star" element={<Star />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/caraousel" element={<Caraousel />} />
    </Routes>
  );
}

export default App;
