import React, { useState, useEffect } from "react";
import "./shop-list.css";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Filter from "../filter/Filter";
import Products from "../products/Products";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import ShopNavbar from "../../Shop/shop-nav/ShopNavbar";
import { useSelector } from "react-redux";
import { head } from "lodash";
import axios from "axios";
import { STORE_ID } from "../../../config";
import { makeGetRequest } from "../../../api/services";
import Loading from "../../../components/other/loading/Loading";

const ShopList = ({}) => {
  let [products, setProducts] = useState([]);
  let [Category, setCategory] = useState([]);
  const filterData = useSelector((store) => store.filteredDataReducer.value);
  const searchValue = useSelector(
    (store) => store.filteredDataReducer.searchItem
  );
  const categoryFilter = useSelector(
    (store) => store.filteredDataReducer.categoryFilter
  );
  const { CATALOG_ID } = useSelector((state) => state.commonReducer);
  const [fil, setFil] = useState("");
  const [loading, setLoading] = useState(true);
  let cur = filterData.split(" ")[0];
  // const filterData = useSelector((store) => store.filteredDataReducer.value);

  const { id } = useParams();
  const parts = id.split(/[_\s]+/);

  const urlText =
    parts[0].toLowerCase().charAt(0).toUpperCase() +
    parts[0].slice(1).toLowerCase();

  useEffect(() => {
    fetchCategory(cur);
    fetchProductData(cur);
  }, [cur]);

  useEffect(() => {
    let body = {
      StoreId: STORE_ID,
      CatalogId: CATALOG_ID,
      CategoryId: null,
      CategoryIds: null,
      ResponseGroup: 16383,
      Outline: categoryFilter,
      Currency: "QAR",
      PriceRange: null,
      LanguageCode: "en-US",
      SearchPhrase: "",
      SortSearchPhaseResponse: false,
      Terms: [],
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
    // let url = `/api/StoreFront/SearchProducts`;
    let url = `CategoryMenu_DATA`;
    makeGetRequest({ url, body })
      .then(({ data }) => {
        if (data.totalCount > 0) {
          setProducts(data.Products);
          setCategory(data.Aggregations);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryFilter]);

  useEffect(() => {
    fetchCategory();
    fetchProductData();
  }, [urlText]);

  useEffect(() => {
    let filteredProducts = products.filter((item) =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filteredProducts);
    setProducts(filteredProducts);
  }, [searchValue]);

  let fetchCategory = async (filter) => {
    const url = `http://localhost:8000/SearchProducts${
      filter ? filter : urlText
    }_DATA`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;

        setCategory(data.Aggregations);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };

  let fetchProductData = async (filter) => {
    const url = `http://localhost:8000/SearchProducts${
      filter ? filter : urlText
    }_DATA`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        setProducts(data.Products);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };

  const history = useNavigate();
  const handleFilterChange = (newFilterData) => {
    setFil(newFilterData);
  };

  return (
    <>
      {/* <Breadcrumbs /> */}
      <ShopNavbar />
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => history(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Shoplist</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="dvShopList pb-5 pt-3">
        <div className="container-lg">
          <div className="row d-flex flex-md-row align-items-baseline">
            <div className="col-12 mb-3 d-lg-none">
              <button
                data-bs-toggle="modal"
                data-bs-target="#dvFilterModal"
                type="button"
                className="btn btn-primary w-100"
              >
                Filter
              </button>
            </div>
            <Filter Category={Category} onFilterChange={handleFilterChange} />
            {loading ? <Loading /> : <Products products={products} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
