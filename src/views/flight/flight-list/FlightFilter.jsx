export default function FlightFilter() {
  return (
    <div className="col-lg-3">
      <p className="bg-black p-3 rounded-top-2 text-white">
        Total Hotels Found: <span>10</span>
      </p>
      <div className="card w-auto h-auto">
        <div className="card-header p-0">
          <h2 className="mb-0">
            <button
              className="btn btn-block text-left heading-sm-medium"
              type="button"
              data-toggle="collapse"
              data-target="#collapse2"
            >
              Stops
            </button>
          </h2>
        </div>
        <div
          id="collapse2"
          className="collapse show"
          data-parent="#filter-accordion"
        >
          <div className="card-body scroll-ver p-3">
            <h2 className="heading-xs-regular mb-2">Stop</h2>

            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">0 Stop</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">1 Stop</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">2 Stop</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">3 Stop</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-auto h-auto">
        <div className="card-header p-0">
          <h2 className="mb-0">
            <button
              className="btn btn-block text-left collapsed heading-sm-medium"
              type="button"
              data-toggle="collapse"
              data-target="#collapse3"
            >
              Airlines
            </button>
          </h2>
        </div>
        <div
          id="collapse3"
          className="collapse show"
          data-parent="#filter-accordion"
        >
          <div className="card-body scroll-ver p-3">
            <h2 className="heading-xs-regular mb-2">Airlines</h2>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Select All</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Air India</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Etihad Airways</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Spicejet Limited</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Oman Av (SAOG)</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Vistara</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Indigo</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Fly Dubai</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Emirates</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">Gulf Air</span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
            <div className="dvLabel d-flex justify-content-between">
              <label className="checkbox-container d-flex">
                <span className="d-inline-block">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </span>
                <span className="d-inline-block ml-2">
                  Ethiopian Airlines Corporation
                </span>
              </label>
              <span className="d-inline-block ml-2">45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
