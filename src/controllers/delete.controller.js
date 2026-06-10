import { deleteReservation } from "../services/reservation.service";
import { isAdmin} from "../utils";
import deleteForm from "../components/deleteForm";

export const deleteController = async () => {
    const btnDelete = document.querySelector("#btnDelete");

    const deleteF = deleteForm();

    const admin = isAdmin()

    const deleteR = deleteReservation();

    btnDelete.addEventListener("click", async (e) => {
        document.body.insertAdjacentHTML("beforeend", deleteF);

        const delete_Form= document.querySelector(".delete_Form");

        const cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", () => {
            delete_Form.remove();
        });

        const id = document.querySelector("#id").value.trim();

        await deleteReservation(id)
        alert("Reserva ELiminada")
        delete_Form.remove();
    })
}