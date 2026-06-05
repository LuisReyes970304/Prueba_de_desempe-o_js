import { http } from "@/api/http";

export const getReservations = () =>
  http.get("/reservations");

export const createReservation = (data) =>
  http.post("/reservations", data);

export const updateReservation = (data) =>
  http.patch("/reservations", data);

export const deleteReservation = (data) =>
  http.delete("/reservations", data);