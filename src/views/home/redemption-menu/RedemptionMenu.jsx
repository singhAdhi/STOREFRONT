import React, { useEffect, useState } from "react";
import "./redemptionmenu.css";
import { fetchRedemptionMenu } from "../../../redux/home/RedemptionMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/other/loading/Loading";
import Error from "../../../components/other/error/Error";
import RedempMenu from "../../../components/redempmenu/RedempMenu";

const RedemptionMenu = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, isLoadingText, redemptionMenuLinks } =
    useSelector((state) => state.redemptionMenuReducer);
  console.log(redemptionMenuLinks);

  useEffect(() => {
    dispatch(fetchRedemptionMenu());
  }, []);

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
                return <RedempMenu key={Id} {...item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedemptionMenu;
