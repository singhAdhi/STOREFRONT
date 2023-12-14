import React, { useEffect, useState } from "react";
import "./redemptionmenu.css";
import { useNavigate } from "react-router-dom";

const RedemptionMenu = () => {
  const navigate = useNavigate();
  const [redemptions, setredemptions] = useState(null);

  useEffect(() => {
    import("../../../dummy/SearchCategories_DATA")
      .then((module) => {
        setredemptions(
          module.SearchCategories_DATA.filter((x) => x.ParentId == null).sort(
            (a, b) => a - b
          )
        );
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  return (
    <div className="dvRedemptions pt-5">
      {redemptions &&
        redemptions.map((item, idx) => (
          <div
            key={idx}
            className="redemption-card"
            onClick={() => navigate(item.Name.toLowerCase())}
          >
            {item.PrimaryImage && item.PrimaryImage.Url && (
              <div className="imageBox">
                <img src={item.PrimaryImage.Url} alt={item.Name} />
              </div>
            )}
            <p style={{ paddingTop: 10 }}>{item.Name}</p>
          </div>
        ))}
    </div>
  );
};

export default RedemptionMenu;
