import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home"; // Correct path to Home component
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage"; // Correct path to SignInPage component
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Birthday from "./components/Birthday";
import Sale from "./components/Sale";
import Bestseller from "./components/Bestseller";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route path="/" element={<Home />} />       
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/header" element={<Header/>} />
          <Route path="/birthday" element={<Birthday/>} />
          <Route path="/sale" element={<Sale/>} />
          <Route path="/bestseller" element={<Bestseller/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
