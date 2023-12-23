import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/useProductDataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./sub-components/ImageSlider";
import QuantitySelector from "./sub-components/QuantitySelector";
import heart from "../../images/heart.svg";
import fullHeart from "../../images/full-heart.svg";

const ProductDetailPage = () => {
  const { data } = useContext(ProductContext);
  const { id } = useParams<{ id?: string }>();
  const [isSaved, setIsSaved] = useState(false);
  const [showAllTips, setShowAllTips] = useState(false);

  if (id === undefined) {
    console.error("Invalid or missing product ID");
    return <div>Invalid or missing product ID</div>;
  }

  const product = data?.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    console.error("Product not found");
    return <div>Product not found</div>;
  }

  const handleSaveForLater = () => {
    setIsSaved(!isSaved);
  };

  const handleShowMoreTips = () => {
    setShowAllTips(true);
  };

  return (
    <React.Fragment>
      <div className="product-detail-page">
        <ImageSlider images={product.images} title={product.title} />
        <div className="product-detail-wrapper">
          <div className="content-one-wrapper">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
          <div className="content-two-wrapper">
            <QuantitySelector
              maxQuantity={product.quantity}
              onQuantityChange={(newQuantity) => {
                console.log("Selected Quantity:", newQuantity);
              }}
            />
            <div className="heart-icon-wrapper" onClick={handleSaveForLater}>
              {!isSaved && (
                <span onClick={handleSaveForLater}>Save for later</span>
              )}
              {isSaved && <span> Saved!</span>}
              <img
                className={`heart-icon ${isSaved ? "full-heart" : ""}`}
                src={isSaved ? fullHeart : heart}
                alt="Heart Icon"
              />
            </div>
          </div>
          <div className="content-three-wrapper">
            <p>{product.description}</p>
          </div>
          <div className="content-four-wrapper">
            <p>
              <span>Material:</span>
              {product.material}
            </p>
            <p>
              <span>Dimensions:</span>
              {product.dimensions}
            </p>
            <p>
              <span>Weight:</span>
              {product.weight}
            </p>
          </div>
          <div className="content-five-wrapper">
            <p className="care-maintenance-title">Care & Maintenance Tips</p>
            <ul>
              {product.maintenance
                .slice(0, showAllTips ? product.maintenance.length : 3)
                .map((item, index) => (
                  <li key={index}>
                    <span className="item-title">{item.title}:</span>{" "}
                    {item.text}
                  </li>
                ))}
            </ul>
            {!showAllTips && (
              <div className="button-wrapper">
                <button
                  className="show-more-button"
                  onClick={handleShowMoreTips}
                >
                  + Show More Tips
                </button>
              </div>
            )}
            <p className="care-maintenance-small">
              Follow these tips to maintain the beauty and integrity of your
              earrings, ensuring they remain a stunning accessory for years to
              come.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailPage;
