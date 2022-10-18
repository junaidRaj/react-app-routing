import { Route, Routes } from "react-router-dom";

// component
import Card from "../Screen/Card";
import AllCards from "../Screen/AllCards.js";

function Message() {
  return (
    <section className="py-4 container">
      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path="card" element={<Card />} />
      </Routes>
    </section>
  );
}
export default Message;