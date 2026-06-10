import { deleteReservation } from "../services/reservation.service";
import { isAdmin} from "../utils";
import deleteForm from "../components/deleteForm";

export const deleteController = async () => {
    const btnDelete = document.querySelector("#btnDelete");

    const deleteF = deleteForm();

    const admin = isAdmin()

    btnDelete.addEventListener("click", async (e) => {
        document.body.insertAdjacentHTML("beforeend", deleteF);

        const delete_Form = document.querySelector(".delete_Form");

        const cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", () => {
            delete_Form.remove();
        });

            const innerForm = document.querySelector("#innerForm");

        innerForm.addEventListener("submit", async(e) => {
            e.preventDefault();
            const id = document.querySelector("#id").value.trim();

            try {
                await deleteReservation(id);
                alert("Reserva Eliminada");
                deleteFormElement.remove();

            } catch (error) {
                alert("La reserva a eliminar no existe")
                console.error("Error deleting reservation:", error);
            }
        })
    })


}