import { isAdmin } from "../utils";
import updateForm from "../components/updateForm";
import { updateReservation } from "../services/reservation.service";

export const updateController = async () => {
    const btnUpdate = document.querySelector("#btnUpdate");

    if (!btnUpdate) return;

    const admin = isAdmin();
    const update_Form = updateForm();

    btnUpdate.addEventListener("click", async (e) => {
        if (document.querySelector(".updateCreation")) return;

        document.body.insertAdjacentHTML("beforeend", update_Form);

        const updateCreation = document.querySelector(".updateCreation");
        const innerForm = document.querySelector("#innerForm");
        const cancelBtn = document.querySelector("#cancelBtn");

        cancelBtn.addEventListener("click", () => {
            updateCreation.remove();
        });

        innerForm.addEventListener("submit", async (submitEvent) => {
            submitEvent.preventDefault();

            const userId = document.querySelector("#userId").value.trim();
            const id = document.querySelector("#id").value.trim();

            const userIdInt = parseInt(userId);

            if (userIdInt > 3 || userIdInt < 2) {
                alert("Solo tienes dos usuarios válidos: ID 2 o ID 3");
                return;
            }

            const workspace = document.querySelector("#workspace").value.trim();
            const date = document.querySelector("#date").value.trim();
            const startHour = document.querySelector("#startHour").value.trim();
            const endHour = document.querySelector("#endHour").value.trim();
            const reason = document.querySelector("#reason").value.trim();

            try {
                await updateReservation({
                    workspace: "Sala " + workspace,
                    date: date,
                    startHour: startHour,
                    endHour: endHour,
                    reason: reason,
                    status: "pending",
                    userId: userId,
                }, id);

                alert("Hecho!");
                updateCreation.remove();
            } catch (error) {
                console.error("Error:", error);
                alert(
                    "Error actualizando",
                );
            }
        });
    });
};
