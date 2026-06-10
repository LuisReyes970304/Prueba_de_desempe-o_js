export default function deleteForm() {
    return `
    <div class="delete_Form">

        <div class="bg-white p-8 rounded-lg shadow w-96">

            <button id="cancelBtn" class="bg-red-700 text-white w-25 py-2 rounded cursor-pointer">cancel</button>

            <h1 class="text-3xl font-bold mb-5">
            Eliminar Reserva
            </h1>

            <form id="innerForm">

                <input
                type="text"
                id="id"
                placeholder="Ingrese el ID de la reserva"
                class="border w-full p-2 rounded mb-3"
                required
                >
                
                <button
                class="bg-blue-600 text-white w-full py-2 rounded cursor-pointer"
                type="submit"
                >
                Eliminar
                </button>

            </form>

        </div>

    </div>
`;
}
