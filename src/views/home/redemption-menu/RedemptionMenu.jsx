import "./redemptionmenu.css";
import Loading from "../../../components/other/loading/Loading";
import Error from "../../../components/other/error/Error";
import RedempMenu from "../../../components/redempmenu/RedempMenu";
import { useDispatch } from "react-redux";
import { addOutline } from "../../../redux/common";

const RedemptionMenu = ({ redemptionMenus }) => {
  const dispatch = useDispatch();

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
            {redemptionMenus.length > 0 ? (
              <>
                {redemptionMenus
                  .filter((item) => item.ParentId === null)
                  .map((item) => {
                    const { Id } = item;
                    return (
                      <RedempMenu
                        key={Id}
                        {...item}
                        handleClick={() => handleClick(item)}
                      />
                    );
                  })}
              </>
            ) : (
              <Error
                isError={true}
                isLoadingText={"Redemption menu not found"}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedemptionMenu;
