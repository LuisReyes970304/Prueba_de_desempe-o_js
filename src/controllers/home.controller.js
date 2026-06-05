import ReservationCard from "@components/ReservationCard";//THis is not were the #reservationCOntainer works
import { getReservations, createReservation } from "@services/reservation.service"; // This is important
import { getSession } from "@/utils"; //checked is not here

export const homeController = async () => {
  const container = document.querySelector("#reservationsContainer");

  const user = getSession();

  const reservations = await getReservations();

  
  const filteredReservations =
    user.role === "admin"
      ? reservations
      : reservations.filter((reservation) => reservation.userId === user.id);

    user.role === "user"
      ? reservations
      : reservations.filter((reservation) => reservation.userId === user.id);

  container.innerHTML = container.innerHTML = filteredReservations?.length
    ? filteredReservations
        .map((reservation) => ReservationCard(reservation))
        .join("")
    : `
      <div class="w-full text-center py-8 col-span-2">
        <p class="text-slate-500">
          No hay reservas disponibles
        </p>
      </div>
    `;

    const createForm = `
    <div class="form-creation">

      <div class="bg-white p-8 rounded-lg shadow w-96">

        <h1 class="text-3xl font-bold mb-5">
          Crear nueva reserva
        </h1>

        <form id="innerForm">

          <input
            type="text"
            id="workspace"
            placeholder="Indique la sala A o B"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <input
            type="date"
            id="date"
            class="border w-full p-2 rounded mb-4"
            required
          >

          <label>Hora de inicio </label>
          <input
            type="time"
            id="startHour"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <label>Hora de finalizacion </label>
          <input
            type="time"
            id="endHour"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <label>Reason</label>
          <textarea
            type="text"
            id="reason"
            class="border w-full p-2 rounded mb-3 resize-none"
          ></textarea>
          <button
            class="bg-blue-600 text-white w-full py-2 rounded"
            type="submit"
          >
            Crear
          </button>

        </form>

      </div>

    </div>
  `;

    const gestionForm = `
    <div class="form-creation">

      <div class="bg-white p-8 rounded-lg shadow w-96">

        <h1 class="text-3xl font-bold mb-5">
          Crear nueva reserva
        </h1>

        <form id="innerForm">

          <input
            type="text"
            id="workspace"
            placeholder="Indique la sala A o B"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <input
            type="date"
            id="date"
            class="border w-full p-2 rounded mb-4"
            required
          >

          <label>Hora de inicio </label>
          <input
            type="time"
            id="startHour"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <label>Hora de finalizacion </label>
          <input
            type="time"
            id="endHour"
            class="border w-full p-2 rounded mb-3"
            required
          >

          <label>Reason</label>
          <textarea
            type="text"
            id="reason"
            class="border w-full p-2 rounded mb-3 resize-none"
            required
          ></textarea>
          <button
            class="bg-blue-600 text-white w-full py-2 rounded"
            type="submit"
          >
            Crear
          </button>

        </form>

      </div>

    </div>
  `;

    const btnNuevaReserva = document.querySelector("#btnNuevaReserva");
    btnNuevaReserva.addEventListener("click", () => {
      document.body.innerHTML += createForm;
      let innerForm = document.querySelector("#innerForm");

      innerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
          const workspace = document.querySelector("#workspace").value.trim();
          const date = document.querySelector("#date").value.trim();
          const startHour = document.querySelector("#startHour").value.trim();
          const endHour = document.querySelector("#endHour").value.trim();
          const reason = document.querySelector("#reason").value.trim();

          const newData = await createReservation(
            {workspace: workspace, date: date, startHour: startHour, endHour: endHour, reason: reason, status: "pending", userId: parseInt(user.id)}
          );
      })
    })

    const btnGestionar = document.querySelector("#btnGestionar");
    btnGestionar.addEventListener("click", () => {
      alert("working")
    })
};
