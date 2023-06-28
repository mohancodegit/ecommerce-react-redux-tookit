import React, { ReactElement, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ProductType } from "../types/ProductTypes";

export const Products = (): ReactElement => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product: ProductType) => {
    dispatch(add(product));
  };

  if (products.loading) {
    return <p>Loading...</p>;
  }

  if (products.error) {
    return <p>{products.errorMessage}</p>;
  }

  return (
    <>
      <h2>Product Dashboard</h2>
      <div className="row mx-2">
        {products?.data?.map((product: ProductType) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <Card className="h-100">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image as string}
                  style={{ width: "100px", height: "130px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title as React.ReactNode}</Card.Title>
                <Card.Text>INR: {product.price}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white">
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
