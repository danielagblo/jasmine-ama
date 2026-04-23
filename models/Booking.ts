import mongoose, { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  topic: { type: String, required: true },
  status: { type: String, default: "pending" }, // pending, confirmed, completed
  createdAt: { type: Date, default: Date.now },
});

const Booking = models.Booking || model("Booking", BookingSchema);

export default Booking;
