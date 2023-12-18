import "./redemptionmenu.css";
import Loading from "../../../components/other/loading/Loading";
import Error from "../../../components/other/error/Error";
import RedempMenu from "../../../components/redempmenu/RedempMenu";
import { useDispatch } from "react-redux";
import { addOutline } from "../../../redux/common";

const RedemptionMenu = ({
  isLoading,
  isError,
  isLoadingText,
  redemptionMenuLinks,
}) => {
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <>
        <Loading isLoadingText={isLoadingText} />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Error isError={isError} isLoadingText={isLoadingText} />
      </>
    );
  }

  const handleClick = (item) => {
    dispatch(addOutline(item.Id));
  };

  return (
    <>
      <div className="dvRedemptionMenu py-5">
        <div className="container-lg">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-3">
              <h2 className="heading-xl">Redemption Options</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {redemptionMenuLinks &&
              redemptionMenuLinks.map((item) => {
                const { Id } = item;
                return (
                  <RedempMenu
                    key={Id}
                    {...item}
                    handleClick={() => handleClick(item)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedemptionMenu;
