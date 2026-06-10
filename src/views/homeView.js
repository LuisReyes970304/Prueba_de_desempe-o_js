import Sidebar from "@/components/Sidebar";
import { getSession } from "@/utils";
import { homeController } from "@/controllers/home.controller";
import { createController } from "../controllers/manage.controller";
import { updateController } from "../controllers/update.controller";
import { deleteController } from "../controllers/delete.controller";

export default function homeView() {
    const user = getSession();

    setTimeout(() => {
        homeController();
        if (user.role === "admin") {
            updateController();
            deleteController();
        } else {
            createController();
        }
    });

    return `
    <div class="flex">

      ${Sidebar()}

      <main class="flex-1 p bg-slate-100 min-h-screen">

        <div class="">

          <h1 class="text-sm font-bold">
            Bienvenido ${user?.name}
          </h1>

          <p class="text-orange-900">
            Rol: ${user?.role}
          </p>

        </div>

        ${
            user?.role === "admin"
                ? `
              <section
                class="bg-white p-5 rounded-lg shadow mb-6"
              >
                <h2 class="font-bold text-xl mb-2">
                  Panel Administrador
                </h2>

                <p>
                  Puedes visualizar todas las reservas.
                </p>

                <button id="btnUpdate"
                  class="mt-3 bg-blue-800 text-white px-4 py-2 rounded"
                >
                  Gestionar Reservas
                </button>

                <button id="btnDelete"
                  class="mt-3 bg-red-800 text-white px-4 py-2 rounded"
                >
                  Delete Reserva
                </button>

              </section>
            `
                : `
              <section
                class="bg-white p-5"
              >
                <h2 class="font-bold text-xl mb-2">
                  Panel Usuario
                </h2>

                <p>
                  Puedes visualizar únicamente tus reservas.
                </p>

                <button id="btnNewReservation"
                  class="mt-3 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Nueva Reserva
                </button>

              </section>
            `
        }

        <section
          class="bg-white p-5 rounded-lg shadow"
        >

          <div
            class="flex justify-between items-center mb-4"
          >
            <h2 class="font-bold text-xl">
              Reservas
            </h2>

            <span
              class="text-sm text-slate-500"
            >
              ${
                  user?.role === "admin"
                      ? "Mostrando todas las reservas"
                      : "Mostrando únicamente tus reservas"
              }
            </span>
          </div>

          <div
            id="reservationsContainer"
            class="grid gap-4 md:grid-cols-2"
          >
            <div class="w-full text-center py-8 col-span-2">
              <p class="text-emerald-800">
                Cargando reservas ...
              </p>
            </div>
          </div>

        </section>

      </main>

    </div>
  `;
}
