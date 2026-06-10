import { createReservation } from "@services/reservation.service";
import reservationForm from "../components/reservationForm";
import { getSession } from "../utils";

export const createController = async () => {
    const btnNewReservation = document.querySelector("#btnNewReservation");

    const user = getSession();

    const reserForm = reservationForm();

    btnNewReservation.addEventListener("click", async (e) => {
        document.body.insertAdjacentHTML("beforeend", reserForm);
        let formCreation = document.querySelector(".formCreation");
        let innerForm = document.querySelector("#innerForm");

        const cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", async() => {
            formCreation.remove()
        });

        innerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const workspace = document.querySelector("#workspace").value.trim();
            const date = document.querySelector("#date").value.trim();
            const startHour = document.querySelector("#startHour").value.trim();
            const endHour = document.querySelector("#endHour").value.trim();
            const reason = document.querySelector("#reason").value.trim();

            const newData = await createReservation({
                workspace: "Sala " + workspace,
                date: date,
                startHour: startHour,
                endHour: endHour,
                reason: reason,
                status: "pending",
                userId: user.id,
            });
        });
    });
};
