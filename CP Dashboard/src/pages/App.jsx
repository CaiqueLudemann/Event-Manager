import { Header } from "../components/header/Header";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { Clients } from "./clients/Clients";
import { Events } from "./events/Events";
import { NewEvent } from "./newEvent/NewEvent";

function App() {
  // fetch data here and pass props to pages
  // each page will be responsible for the data pertaining to them. here is mock data:
  const users = [
    {
      userId: "nick76865428807",
      name: "nick",
      cpf: "76865428807",
      tel: "85986180875",
      email: "nick@gmail.com",
      address: "Rua Tomas Jobim 771",
    },
  ];
  return (
    <div className="flex gap-50">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"new-event"} replace />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/events" element={<Events users={users} />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </div>
  );
}

export default App;
