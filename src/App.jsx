import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import { User } from "./pages/user";

export default function App() {
  return (
    <div className="bg-neutral-50">
      <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  )
}