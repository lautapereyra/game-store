import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";

const Dashboard = () => {
    return (
        <div>
            <Home />

            <Routes>
                <Route index element={<h2>Inicio</h2>} />
                <Route path="test" element={<h2>Otra vista</h2>} />
            </Routes>
        </div>
    );
};

export default Dashboard;
