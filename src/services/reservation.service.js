import { http } from "@/api/http";

export const getReservations = () =>
  http.get("/reservations");

export const createReservation = (data) =>
  http.post("/reservations", data);

export const updateReservation = (data, id) =>
  http.patch(`/reservations/${id}`, data);

export const deleteReservation = ( id) =>
  http.delete(`/reservations/${id}`);