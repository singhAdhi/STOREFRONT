import React, { useEffect } from "react";
import ShopList from "./list/ShopList";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ShopList />
    </>
  );
};

export default Index;
