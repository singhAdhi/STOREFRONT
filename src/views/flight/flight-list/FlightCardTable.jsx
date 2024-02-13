const FlightCardTable = (props) => {
  let {
    DisplayDepartureDate,
    DisplayDepartureTime,
    DepartureAirField: { City, IATACode },
    TotalDurationHrs,
    TotalDurationMins,
    DisplayArrivalDate,
    DisplayArrivalTime,
    ArrivalAirField,
  } = props;
  return (
    <div className="row">
      <div className="col-6 col-lg d-lg-flex justify-content-lg-center align-items-lg-center text-lg-center border-right-lg">
        <span className="">{DisplayDepartureDate}</span>
      </div>
      <div className="col-6 col-lg d-lg-flex justify-content-lg-center align-items-lg-center text-right text-lg-center border-right-lg">
        <span className="">{DisplayDepartureTime}</span>
      </div>
      <div className="col-12 col-lg-6 text-lg-center">
        <div className="row border-top border-bottom border-top-bottom-lg-0">
          <div className="col-4 d-flex justify-content-center align-items-center border-right text-center py-2">
            <div className="">
              <span className="country">
                {City}{" "}
                <span className="font-weight-bold abbreviation">
                  {IATACode}
                </span>
              </span>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center border-right text-center py-2">
            <span className="">
              Non Stop {TotalDurationHrs} hrs {TotalDurationMins} mins
            </span>
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center text-center border-right-lg py-2">
            <div className="">
              <span className="country">
                {ArrivalAirField.City}{" "}
                <span className="font-weight-bold abbreviation">
                  {ArrivalAirField.IATACode}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-lg d-lg-flex justify-content-lg-center align-items-lg-center text-lg-center border-right-lg">
        <span className="">{DisplayArrivalDate}</span>
      </div>
      <div className="col-6 col-lg d-lg-flex justify-content-lg-center align-items-lg-center text-right text-lg-center">
        <span className="">{DisplayArrivalTime}</span>
      </div>
    </div>
  );
};
export default FlightCardTable;
