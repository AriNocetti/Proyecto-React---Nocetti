import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layouts/navbar/Navbar";
import Footer from "./components/layouts/navbar/footer/Footer"
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import {CartContextProvider} from "./context/CartContext";
import { Toaster } from "sonner";
import Checkout from "./components/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        richColors
        toastOptions={{
          duration: 2000,
        }}
        expand
      />
      <CartContextProvider>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categoryName"}
            element={<ItemListContainer />}
          />

          <Route path={"/cart"} element={<CartContainer />} />

          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />

          <Route path={"/checkout"} element={<Checkout />} />

          <Route path="*" element={<h2>404 not found</h2>} />
          </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
