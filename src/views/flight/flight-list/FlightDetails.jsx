const FlightDetails = ({ TravelType, data }) => {
  return (
    <div className="dvDeparture row">
      <div className="col-12 bg-white py-2 mb-2">
        <div className="row align-items-center">
          <div className="col-auto col-sm-6">
            <span>
              {`${TravelType}`}{" "}
              <i
                className={`fa ${
                  TravelType == "Departure" ? "fa-arrow-right" : "fa-arrow-left"
                }`}
              ></i>
            </span>
          </div>
          <div className="col-auto col-sm-6 text-sm-right">
            <span>
              <i className="fa fa-clock-o"></i>
              Total Duration: {data && data.TotalDurationDisplay}
            </span>
          </div>
        </div>
      </div>
      {data &&
        data.ListOfFlightSegments.map((item, idx) => {
          let {
            DisplayDepartureDate,
            DisplayDepartureTime,
            DepartureAirField: { City, IATACode, CountryName },
            DisplayArrivalDate,
            DisplayArrivalTime,
            ArrivalAirField,
            Carrier: { CarrierName, CarrierLogoPath },
            FlightNo,
            BaggageAllowance,
          } = item;
          return (
            <div key={"details" + idx} className="col-12 py-2">
              <div className="row">
                <div className="col-12 col-sm-4 d-flex align-items-center mb-3">
                  <img src={CarrierLogoPath} alt={CarrierName} />
                  <span className="heading-xs-medium ml-2">
                    {`${CarrierName} (${FlightNo})`}
                  </span>
                </div>
                <div className="col-6 col-sm-4">
                  <p>
                    <span className="d-block font-weight-bold">
                      {`${City} (${IATACode})`}
                    </span>
                    <span className="d-block">{CountryName}</span>
                    <span className="d-block font-weight-bold">
                      Departure Date:
                    </span>
                    <span className="d-block">{DisplayDepartureDate} </span>
                    <span className="d-block font-weight-bold">
                      Departure Time:
                    </span>
                    <span className="d-block">{DisplayDepartureTime}</span>
                  </p>
                </div>
                <div className="col-6 col-sm-4">
                  <p>
                    <span className="d-block font-weight-bold">
                      {`${ArrivalAirField.City} (${ArrivalAirField.IATACode})`}
                    </span>
                    <span className="d-block">
                      {ArrivalAirField.CountryName}{" "}
                    </span>
                    <span className="d-block font-weight-bold">
                      Arrival Date:
                    </span>
                    <span className="d-block">{DisplayArrivalDate}</span>
                    <span className="d-block font-weight-bold">
                      Arrival Time:
                    </span>
                    <span className="d-block">{DisplayArrivalTime}</span>
                    <span className="d-block">
                      <i className="me-1 fa fa-suitcase"></i>
                      Baggage Allowance - {BaggageAllowance}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default FlightDetails;
