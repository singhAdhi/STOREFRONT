import { useState } from "react";
import MobileDropdown from "./MobileDropdown";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategoryFilter } from "../../redux/shop/filteredData/filteredDataSlice";

const MobileMenuItems = ({ items, depthLevel, onHandleClick }) => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };

  const handleOuterClick = (e) => {
    closeDropdown();
  };

  const all = (val) => {
    closeDropdown();
    console.log(val);
    dispatch(setCategoryFilter(val));
    navigate(`/ShopList/${val}`);
    console.log("clicked");
  };

  return (
    <li className="menu-items" onClick={handleOuterClick}>
      {items.submenu && items.submenu.length > 0 ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <h1>{items.Name}</h1>
            <div onClick={(e) => toggleDropdown(e)}>
              {dropdown ? (
                <span className="arrow-close" />
              ) : (
                <span className="arrow" />
              )}
            </div>
          </button>
          {dropdown && (
            <MobileDropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          )}
        </>
      ) : (
        <h1 onClick={() => all(items.Name)} className="custom-text">
          {items.Name}
        </h1>
      )}
    </li>
  );
};

export default MobileMenuItems;
