import * as Yup from "yup";

const initialValues = {
  city: "",
  checkIn: "",
  checkOut: "",
  NoOfRooms: "",
};
const validationSchema = Yup.object({
  // Add your validation rules if needed
  city: Yup.string().required("City is required"),
  checkIn: Yup.date().required("Check-In date is required"),
  checkOut: Yup.date().required("Check-Out date is required"),
});

export { initialValues, validationSchema };
