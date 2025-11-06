import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
