import * as Yup from "yup";

const initialValues = {
  Country: "",
  CheckInDate: "",
  CheckOutDate: "",
  NoOfRooms: "1",
  AdultRoom1: "1",
  ChildRoom1: "0",
  AdultRoom2: "1",
  ChildRoom2: "0",
  AdultRoom3: "1",
  ChildRoom3: "0",
};
const validationSchema = Yup.object({
  // Add your validation rules if needed
  Country: Yup.string().required("City is required"),
  CheckInDate: Yup.date().required("Check-In date is required"),
  CheckOutDate: Yup.date().required("Check-Out date is required"),
});

export { initialValues, validationSchema };
