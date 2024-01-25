import React, { useEffect, useState } from "react";
import "./sort.css";
import { shopApi } from "../../../api/services";
import { useDispatch } from "react-redux";
import { latestValue } from "../../../redux/shop/filteredData/filteredDataSlice";

const Sort = () => {
  const [sortOption, setSortOption] = useState("");
  const [sortProduct, setSortProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      StoreId: "QIBMKT",
      CatalogId: "164d5545-22f3-472c-8a24-14d2b3be6300",
      CategoryId: null,
      CategoryIds: null,
      ResponseGroup: 16383,
      Outline: "94eba8bd-0609-448d-b862-0a2730f163e0",
      Currency: "QAR",
      PriceRange: null,
      LanguageCode: "en-US",
      SearchPhrase: "",
      SortSearchPhaseResponse: false,
      Terms: ["best-selling"],
      Sort: "",
      Skip: 0,
      Take: 15,
      IncludeAggregations: null,
      ExcludeAggregations: null,
      Latitude: null,
      Longitude: null,
      Distance: 0.0,
      GeoLocationPropertyName: null,
    };
    let url = `CategoryMenu_DATA`;
    shopApi
      .get(url, body)
      .then(({ data }) => {
        setSortProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (val) => {
    setSortOption(val);
    dispatch(latestValue(val));
    console.log(val);
  };
  return (
    <>
      <div className="dvSort row mb-3">
        <div className="col-12">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleChange(e.target.value)}
          >
            <option defaultValue={""}>Sort By</option>
            <option value="Best">Best Selling</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
            <option value="PriceLowToHigh">Price Low to High</option>
            <option value="PriceHighToLow">Price High to Low</option>
            <option value="DateNewtoOld">Date New to Old</option>
            <option value="DateOldtoNew">Date Old to New</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sort;
