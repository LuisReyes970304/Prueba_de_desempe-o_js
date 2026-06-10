export default function reservationForm(){
        return `
    <div class="formCreation">

        <div class="bg-white p-8 rounded-lg shadow w-96">

            <button id="cancelBtn" class="bg-red-700 text-white w-25 py-2 rounded cursor-pointer">cancel</button>

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

                <label>Razon</label>
                <textarea
                type="text"
                id="reason"
                class="border w-full p-2 rounded mb-3 resize-none"
                ></textarea>

                <button
                class="bg-blue-600 text-white w-full py-2 rounded cursor-pointer"
                type="submit"
                >
                Crear
                </button>

            </form>

        </div>

    </div>
`;
}