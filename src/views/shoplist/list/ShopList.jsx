import React, { useState, useEffect, useMemo } from "react";
import "./shop-list.css";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Filter from "../filter/Filter";
import Products from "../products/Products";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
// import ShopNavbar from "../../Shop/shop-nav/ShopNavbar";
import { useSelector } from "react-redux";
import { STORE_ID } from "../../../config";
import { shopApi } from "../../../api/services";
import Shimmer from "../../../components/shimmer/Shimmer";

const ShopList = ({}) => {
  let [originalProduct, setOriginalProduct] = useState([]);
  let [products, setProducts] = useState([]);
  let [Category, setCategory] = useState([]);
  const [fil, setFil] = useState("");
  const [loading, setLoading] = useState(true);

  const filterData = useSelector((store) => store.filteredDataReducer.value);
  const history = useNavigate();
  const searchValue = useSelector(
    (store) => store.filteredDataReducer.searchItem
  );
  const categoryFilter = useSelector(
    (store) => store.filteredDataReducer.categoryFilter
  );
  const { CATALOG_ID } = useSelector((state) => state.commonReducer);

  const { id } = useParams();

  const parts = useMemo(() => id.split(/[_\s]+/), [id]);

  const urlText = useMemo(
    () =>
      parts[0].toLowerCase().charAt(0).toUpperCase() +
      parts[0].slice(1).toLowerCase(),
    [parts]
  );

  const cur = useMemo(() => filterData.split(" ")[0], [filterData]);

  useEffect(() => {
    fetchData(cur);
  }, [cur]);

  useEffect(() => {
    fetchData();
  }, [urlText]);

  useEffect(() => {
    if (searchValue) {
      let filteredProducts = products.filter((item) =>
        item.Name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(originalProduct);
    }
  }, [searchValue, originalProduct]);

  let fetchData = async (filter) => {
    let filterName = `SearchProducts${filter ? filter : urlText}_DATA`;
    const url = `src/dummyApiData/shop/${filterName}.json`;
    shopApi
      .get(url)
      .then(({ data }) => {
        setLoading(false);
        setCategory(data[filterName].Aggregations);
        setProducts(data[filterName].Products);
        setOriginalProduct(data[filterName].Products);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };
  useEffect(() => {
    setLoading(true);
    if (categoryFilter == "") return;
    console.log("categoryFilter=> ", categoryFilter);
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
    let url = "src/dummyApiData/shop/SearchProductsBaby_DATA.json";
    shopApi
      .get(url, body)
      .then(({ data }) => {
        if (data.totalCount > 0) {
          setOriginalProduct(data.Products);
          setProducts(data.Products);
          setCategory(data.Aggregations);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [categoryFilter]);
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
              <li className="breadcrumb-item">
                <Link to="/shop">Shop</Link>
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
            {loading ? <Shimmer /> : <Products products={products} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
