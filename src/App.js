import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthPages from "./pages/AuthPages";
import TodoPages from "./pages/TodoPages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<AuthPages />} />
        <Route path="/todo" element={<TodoPages />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </div>
  );
}

export default App;
