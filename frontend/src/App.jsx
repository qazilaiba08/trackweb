import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navigtion from "./Components/Navigtion";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/SignUp";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";



function App() {


  return (
    <>
  <Router>
      <Navigtion /> 
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" exact element={<Login />} />
       <Route path = '/register' element= {<Register />} />
        <Route path="/tasks" element={ <Tasks />} />
       <Route path=" /addTask" element={<AddTask />} />
      </Routes>
      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-16 border-t pt-6 text-center text-sm bg-grey-600 text-gray-400">
        © {new Date().getFullYear()} ExpenseTrack. Built with ❤️ and Tailwind CSS.
      </footer>
    </Router>
    </>
  )
}

export default App;
