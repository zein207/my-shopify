import { HomeScreen } from "./components/pages/HomeScreen";
import { Footer } from "./components/ui/Footer";
import { Navbar } from "./components/ui/Navbar";

function MyShopifyApp() {
  return (
    <div className="main-container">

      <Navbar />

      <HomeScreen />

      <Footer />

    </div>
  );
}

export default MyShopifyApp;
