import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsInCart,
  getCurrentPage,
  getTotalCostOfCart,
} from "../../redux/features/Products/productsSelectors";
import {
  BuyAllButton,
  BuyAllButtonAndTotalPriceContainer,
  IncreaseDecreaseButton,
  IncreaseDecreaseButtonsAndCount,
  ProductCountInCart,
  ProductImageInCart,
  ProductInCart,
  ProductNameInCart,
  ProductsInCart,
  TotalCost,
} from "./styles";
import {
  addProductToCart,
  buyAllProductsFromCart,
  decrementProductFromCart,
  deleteProductFronCart,
} from "../../redux/features/Products/productsSlice";

export default function Cart() {
  const totalCost = useSelector(getTotalCostOfCart);
  const productsInCart = useSelector(getAllProductsInCart);
  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();
  return (
    <>
      <ProductsInCart>
        {productsInCart.map((product) => (
          <ProductInCart key={product.id} currentPage={currentPage}>
            <ProductImageInCart src={product?.image} alt={product?.name} />
            <ProductNameInCart currentPage={currentPage}>
              {product?.name}
            </ProductNameInCart>
            <IncreaseDecreaseButtonsAndCount>
              <IncreaseDecreaseButton
                onClick={() => dispatch(decrementProductFromCart(product))}
              >
                -
              </IncreaseDecreaseButton>
              <ProductCountInCart>{product?.quantity}</ProductCountInCart>
              <IncreaseDecreaseButton
                onClick={() => dispatch(addProductToCart(product))}
              >
                +
              </IncreaseDecreaseButton>
            </IncreaseDecreaseButtonsAndCount>
            <IncreaseDecreaseButton
              onClick={() => dispatch(deleteProductFronCart(product))}
            >
              Delete
            </IncreaseDecreaseButton>
          </ProductInCart>
        ))}
      </ProductsInCart>
      {productsInCart.length > 0 && (
        <BuyAllButtonAndTotalPriceContainer>
          <BuyAllButton
            onClick={() => dispatch(buyAllProductsFromCart())}
            currentPage={currentPage}
          >
            BUY ALL
          </BuyAllButton>
          <TotalCost currentPage={currentPage}>
            Total Cost : ${totalCost}
          </TotalCost>
        </BuyAllButtonAndTotalPriceContainer>
      )}
    </>
  );
}
