import Badges from "../Components/atoms/Badges";
import Products from "../Components/organisms/Products";
import ShopHeader from "../Components/organisms/ShopHeader";
import MainTemplate from "../Components/templates/MainTemplate";

const ShopPage = () => {
  return (
    <div>
      <Badges/>
      <MainTemplate>
        <ShopHeader/>
        <Products/>
      </MainTemplate>
    </div>
  )
}
export default ShopPage;