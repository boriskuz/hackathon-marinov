import ExampleAnimation from "./components/ExampleAnimation";
import ProductContextConstructor from "./contexts/useProductDataContext";
import "./styles/main.scss";

function App() {
  

  return (
    <ProductContextConstructor>
      <div style={{ height: 600, width: 600 }}>
       
        <ExampleAnimation path="../public/animations/bracelet_animation.json" />
      </div>
    </ProductContextConstructor>
  );
}

export default App;
