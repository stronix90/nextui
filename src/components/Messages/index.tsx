import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function Messages() {
  const menssages = [
    {
      user: "Leonel Avila",
      date: "2024-08-01",
      text: "Publica solicitud",
      type: "publica",
    },
    {
      user: "Martín Cornaglia",
      date: "2024-08-08",
      text: "Aprueba solicitud",
      type: "aprueba",
    },
    {
      user: "Adrían Quiroga",
      date: "2024-08-09",
      text: "Aprueba solicitud",
      type: "aprueba",
    },
    {
      user: "Matias Mena",
      date: "2024-08-09",
      text: "Aprueba solicitud",
      type: "aprueba",
    },
    {
      user: "Lucas, Gallo",
      date: "2024-08-10",
      text: "Por favor, aprobar",
      type: "mensaje",
    },
    {
      user: "Lucas, Gallo",
      date: "2024-08-10",
      text: "Perdón, por favor, rechazar",
      type: "mensaje",
    },
  ];
  return (
    <div className="p-2 h-56 overflow-auto scroll-smooth">
      <h2 className="text-xl">Mensajes</h2>
      <ScrollShadow size={20} className="w-[300px] ">
        <div>
          {menssages.map((message) => {
            if (message.type === "aprueba") {
              // Aprobación
              return (
                <div
                  key={message.date + message.user}
                  className="my-1 px-2 py-1 rounded bg-pink-50 flex justify-between items-center"
                >
                  <div className="text-sm ">{message.user} ✅</div>
                  <div className="text-xs text-gray-700">{message.date}</div>
                </div>
              );
            }

            // Mensaje común
            return (
              <div
                key={message.date + message.user}
                className="my-1 pt-5 px-2 py-1 rounded bg-pink-50 relative"
              >
                {message.text}
                <div className="absolute top-[4px] left-0 text-xs ms-2 text-gray-700">
                  {message.user}
                </div>
                <div className="absolute top-[4px] right-0 text-xs me-2 text-gray-700">
                  {message.date}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollShadow>
    </div>
  );
}
