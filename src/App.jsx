import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PreLoader from "./components/Preloader";

import { ContactUs, Home, Portfolio, Pricing, Services_Page, WhyPrimech} from "./pages";
import { Footer } from "./components";

const App = () => {
  return (
    <main className='bg-black'>
    <PreLoader/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services_page' element={<Services_Page/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/about' element={<WhyPrimech/>} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
};

export default App;