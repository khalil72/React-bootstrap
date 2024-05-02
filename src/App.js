import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Preloader from "./component/preloader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading to false after 2000 milliseconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);
  return (
    <div >
    {loading ?  <Preloader /> : (
      <>
      <Header />
      <Home />
      <Footer />
      </>
    )}
   
    
      
    </div>
  );
}

export default App;
