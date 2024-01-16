import { createContext } from "react";

const DataContext = createContext({
  hotelData: [],
  loading: true,
});

export default DataContext;
