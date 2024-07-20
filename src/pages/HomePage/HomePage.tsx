import { FC, useEffect } from "react";
import bigImgBG from "../../assets/images/other/big-bgCircle.png";
import bigImgBG2 from "../../assets/images/other/big-bgCircle2.png";
import { useSelector } from "react-redux";
import { getCurrentPage } from "../../redux/features/Products/productsSelectors";
import { BigBackgroundCircle, FooterText, HomePageContainer } from "./styles";
import Header from "../../components/Header/Header";
import Super from "../../components/Super/Super";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cart from "../../components/Cart/Cart";
import { getSignInSelected } from "../../redux/features/Account/accountSelector";
import RegisterEditExit from "../../components/RegisterEditExit/RegisterEditExit";

export const HomePage: FC = () => {
  const currentPage = useSelector(getCurrentPage);
  const imageSrc = currentPage === "lunch" ? bigImgBG2 : bigImgBG;
  const signInSelected = useSelector(getSignInSelected);
  const navigate = useNavigate();
  const openYouTubeVideo = () => {
    window.open(`https://www.youtube.com/watch?v=0XJqJJQ35oc`, "_blank");
  };

  useEffect(() => {
    navigate("/food");
  }, []);

  return (
    <>
      {signInSelected ? (
        <RegisterEditExit />
      ) : (
        <HomePageContainer>
          <BigBackgroundCircle src={imageSrc} alt="Big Image For Background" />
          <Header />
          <Routes>
            <Route path="/food" element={<Super />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <FooterText onClick={openYouTubeVideo}>Watch the Video</FooterText>
        </HomePageContainer>
      )}
    </>
  );
};
