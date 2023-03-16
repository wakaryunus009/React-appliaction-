import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import User from "./components/User";
function App(){
  return (
    <BrowserRouter>
    
      <Header />
      

     <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      //dynamic routing 
      <Route path="/user/sad" element={<Contact />} />
      <Route path="/user/sad2asd" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      
      
     </Routes>
      
     <Footer />
    </BrowserRouter>
  );
}

export default App;
