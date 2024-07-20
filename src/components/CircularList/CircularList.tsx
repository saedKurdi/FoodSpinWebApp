import React, { useEffect, useState } from "react";
import "./CircularList.css"; // Import your CSS file
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getCurrentPage,
  getSelectedProduct,
  getSelectedProductIndex,
} from "../../redux/features/Products/productsSelectors";
import { setSelectedIndex } from "../../redux/features/Products/productsSlice";
import { SelectedBigProductImage } from "../Super/styles";

const CircularList: React.FC = () => {
  const currentPage = useSelector(getCurrentPage);
  const selectedProduct = useSelector(getSelectedProduct);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const items = useSelector(getAllProducts);

  const dispatch = useDispatch();

  const selectedIndex = useSelector(getSelectedProductIndex);

  // Reset component state when currentPage changes
  useEffect(() => {
    setRotationAngle(0);
    setIsRotating(false);
    dispatch(setSelectedIndex(0)); // Reset selected index to 0
  }, [currentPage]);

  const handleRotate = (direction: "left" | "right"): void => {
    const angleIncrement: number = 360 / items.length;
    const newRotationAngle: number =
      direction === "right"
        ? rotationAngle + angleIncrement
        : rotationAngle - angleIncrement;

    setRotationAngle(newRotationAngle);
    setIsRotating(true);

    // Reset rotation animation after 500ms (to match CSS transition duration)
    setTimeout(() => {
      setIsRotating(false);
    }, 500);

    // Update selected index based on rotation direction
    if (direction === "right") {
      dispatch(
        setSelectedIndex(
          selectedIndex === 0 ? items.length - 1 : selectedIndex - 1
        )
      );
    } else {
      dispatch(setSelectedIndex((selectedIndex + 1) % items.length));
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-43%",
          right: "0",
          overflow: "hidden",
          width: "55%",
          height: "98%",
          padding: "22px 0",
        }}
      >
        <div className="circular-list-container">
          <div
            className={`item-list ${isRotating ? "rotating" : ""}`}
            style={{ transform: `rotate(${rotationAngle}deg)` }}
          >
            {items.map((item, index) => {
              const angleIncrement: number = 360 / items.length;
              const currentAngle: number = index * angleIncrement;

              // Calculate distance from center for circular positioning
              const radius: number = 280; // Adjust this value as needed
              const distanceFromCenter: number = radius; // Add padding

              // Calculate transform style for rotation
              const transformStyle: string = `rotate(${currentAngle}deg) translateX(${distanceFromCenter}px)`;

              // Determine if item is selected to apply specific styling
              const isSelected: boolean = index === selectedIndex;

              return (
                <div
                  key={item.id}
                  className={`item ${isSelected ? "selected" : ""}`}
                  style={{
                    transform: `translate(-50%, -50%) ${transformStyle}`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Item ${index}`}
                    className="item-image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="control-buttons">
        <i
          style={{
            color:
              currentPage === "lunch"
                ? "rgb(84, 191, 41)"
                : "rgb(255, 146, 44)",
          }}
          className="fa-solid fa-circle-arrow-up"
          onClick={() => handleRotate("right")}
        ></i>
        <SelectedBigProductImage
          src={selectedProduct?.image}
          alt={selectedProduct?.name}
        />
        <i
          style={{
            color:
              currentPage === "lunch"
                ? "rgb(84, 191, 41)"
                : "rgb(255, 146, 44)",
          }}
          className="fa-solid fa-circle-arrow-down"
          onClick={() => handleRotate("left")}
        ></i>
      </div>
    </>
  );
};

export { CircularList };
