import * as Yup from "yup";

const initialValues = {
  city: "",
  checkIn: "",
  checkOut: "",
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
  city: Yup.string().required("City is required"),
  checkIn: Yup.date().required("Check-In date is required"),
  checkOut: Yup.date().required("Check-Out date is required"),
});

export { initialValues, validationSchema };
