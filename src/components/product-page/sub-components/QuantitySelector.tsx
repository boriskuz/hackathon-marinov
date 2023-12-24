import React, { useContext} from "react";
import { ProductContext } from "../../../contexts/useProductDataContext";

interface QuantitySelectorProps {
  maxQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  onQuantityChange,
}) => {
  
  const {selectedQuantity, setSelectedQuantity} = useContext(ProductContext)

  const handleIncrement = () => {
    const newQuantity =
      selectedQuantity + 1 <= maxQuantity
        ? selectedQuantity + 1
        : selectedQuantity;
    setSelectedQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity =
      selectedQuantity - 1 >= 1 ? selectedQuantity - 1 : selectedQuantity;
    setSelectedQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="quantity-selector">
      <button className="quantity-btn left-btn" onClick={handleDecrement}>
        <span className="decrement">-</span>
      </button>
      <span className="quantity-number ">{selectedQuantity}</span>
      <button className="quantity-btn right-btn" onClick={handleIncrement}>
        <span className="increment">+</span>
      </button>
    </div>
  );
};

export default QuantitySelector;
