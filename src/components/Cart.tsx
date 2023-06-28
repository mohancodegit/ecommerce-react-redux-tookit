import { ReactElement } from "react";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export const Cart = (): ReactElement => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart);

  const displayProducts = products?.map((product: any) => {
    console.log(product);
    return (
      <div className="col-md-12 mb-4" key={product.id}>
        <Card className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <Button
              variant="danger"
              onClick={() => dispatch(remove(product.id))}
            >
              Remove From Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h2>Product Dashboard</h2>
      <div className="row">{displayProducts}</div>
    </>
  );
};
