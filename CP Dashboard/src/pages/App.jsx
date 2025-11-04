import { Header } from "../components/header/Header";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { Clients } from "./clients/Clients";
import { Events } from "./events/Events";
import { NewEvent } from "./newEvent/NewEvent";

function App() {
  return (
    <div className="flex gap-50">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"new-event"} replace />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}

export default App;
