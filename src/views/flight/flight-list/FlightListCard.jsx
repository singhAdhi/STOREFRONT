import { useState } from "react";
import FlightCardTable from "./FlightCardTable";
import FlightDetails from "./FlightDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFlightValues } from "../../../redux/flight";

const FlightListCard = ({ travellerData, ...props }) => {
  const [isShow, setisShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let TotalPoints = props.FareDetails.TotalPoints;
  let isReturn = props.Type == "Return" ? true : false;
  let depart = props.ListOfFlightDetails[0];
  let arrival = props.ListOfFlightDetails[1];
  let { CarrierName, CarrierLogoPath } =
    props.ListOfFlightDetails[0].ListOfFlightSegments[0].Carrier;

  const passengerDetail = () => {
    const Adults = travellerData?.Adults;
    const Childrens = travellerData?.Childrens;
    const Infants = travellerData?.Infants;
    navigate(`/flightpassenger/${Adults}/${Childrens}/${Infants}`);
    dispatch(addFlightValues(props));
  };

  return (
    <div className="dvFlightInfo col-12 col-md-6 col-lg-12 mb-4">
      <div className="border rounded bg-light px-3">
        <div className="dvAirInfo row py-2">
          <div className="col-6 d-flex align-items-center">
            <img src={CarrierLogoPath} alt={CarrierName} />
            <span className="heading-sm-medium d-inline-block pl-2">
              {CarrierName}
            </span>
          </div>
          <div className="col-6 text-end">
            <h2 className="heading-md-medium">Points {TotalPoints}</h2>
            <h2 className="heading-xs-medium">
              {isReturn ? "Round Trip" : "One Way"}
            </h2>
          </div>
        </div>
        <div className="dvInfo row">
          <div className="col-12 border-top">
            {props.ListOfFlightDetails &&
              props.ListOfFlightDetails.map((item, idx) => {
                return (
                  <div key={idx}>
                    {item.ListOfFlightSegments &&
                      item.ListOfFlightSegments.map((x) => (
                        <FlightCardTable key={x.FlightNo} {...x} />
                      ))}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="dvSeeDetails row">
          <div className="col-12 d-flex justify-content-between align-items-center py-2">
            <button
              className="heading-xs-medium arrowBtn col-auto d-flex"
              type="button"
              onClick={() => setisShow(!isShow)}
            >
              <span className="d-inline-block">See Flight Details</span>
              <span className="arrow-icon ml-2">
                <i
                  className={`ms-2 ${
                    isShow ? "fa fa-caret-up" : "fa fa-caret-down"
                  }`}
                ></i>
              </span>
            </button>

            <button className="btn btn-primary" onClick={passengerDetail}>
              Redeem Now
            </button>
          </div>
          {isShow && (
            <div className="col-12">
              {depart && (
                <FlightDetails TravelType={"Departure"} data={depart} />
              )}
              {isReturn && arrival && (
                <FlightDetails TravelType={"Return"} data={arrival} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FlightListCard;
