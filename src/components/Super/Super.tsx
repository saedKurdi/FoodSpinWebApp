import { useDispatch, useSelector } from "react-redux";
import {
  OrderButton,
  ProductContainer,
  ProductDisclosure,
  ProductName,
  ProductPrice,
  SuperContainer,
} from "./styles";
import {
  getAddedMessage,
  getCurrentPage,
  getLoadingAndErrorWithDestructization,
  getSelectedProduct,
} from "../../redux/features/Products/productsSelectors";
import ErrorContainer from "../ErrorContainer";
import { CircularList } from "../CircularList/CircularList";
import { addProductToCart } from "../../redux/features/Products/productsSlice";
export default function Super() {
  const currentPage = useSelector(getCurrentPage);
  const { error } = useSelector(getLoadingAndErrorWithDestructization);
  const selectedProduct = useSelector(getSelectedProduct);
  const cartAddedMessage = useSelector(getAddedMessage);
  const dispatch = useDispatch();
  return (
    <>
      {error ? (
        <ErrorContainer errorMessage={error} />
      ) : (
        <SuperContainer>
          <ProductContainer>
            <ProductPrice currentPage={currentPage}>
              ${selectedProduct?.price}
            </ProductPrice>
            <ProductName>{selectedProduct?.name}</ProductName>
            <ProductDisclosure>{selectedProduct?.disclosure}</ProductDisclosure>
            <OrderButton
              onClick={() => dispatch(addProductToCart(selectedProduct))}
              currentPage={currentPage}
            >
              ORDER NOW
            </OrderButton>
          </ProductContainer>
          <CircularList />
          <p style={{ color: "rgb(84, 191, 41)", height: "20px" }}>
            {cartAddedMessage}
          </p>
        </SuperContainer>
      )}
    </>
  );
}
