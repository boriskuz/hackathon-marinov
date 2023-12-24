import React, { useContext } from "react";
import Card from "./product-page/sub-components/Card";
import { ProductContext } from "../contexts/useProductDataContext";

interface RelatedProductsProps {
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ category }) => {
  const { data } = useContext(ProductContext);

  const relatedProducts = data?.filter(
    (product) => product.category === category
  );

  return (
    <React.Fragment>
      <div className="related-products">
        <div className="related-products-wrapper">
          <div className="related-products-content">
            {relatedProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RelatedProducts;
