import { Image } from "@nextui-org/image";

export default function ItemDetail() {
  const requestValues = {
    "01.01 Peso": "100 Kg",
    "01.02 Largo": "10 cm",
    "01.03 Ancho": "10 cm",
    "01.04 Alto": "10 cm",
    "01.10 Grupo planificación": "Mantenimiento",
    "01.11 Grupo técnico": "Ferreteria",
    "07.10 Estado": "Inactivo",
    "10.01 Categoria Valoración": "4401 Material Rodante Mecánico",
  };

  return (
    <article className="border-t m-2 overflow-y-auto overflow-x-hidden scroll-smooth h-[600px]">
      <header className="flex items-center flex-col">
        <Image
          isBlurred
          height={240}
          src="https://www.comercturro.com/blog/documentos/ImagenesArticulos/principales/blog-amoladoras.jpg"
          alt="NextUI Album Cover"
          className="m-5 mx-auto"
        />
        <h2 className="font-bold -mt-2">1000000000</h2>
      </header>
      <div>
        <ul className="flex flex-col">
          {Object.entries(requestValues).map((value) => {
            return (
              <li key={value[0]} className="border-t p-2">
                <div className="grid grid-cols-3 align-middle items-center">
                  <div className="col-span-1 pe-4 text-sm text-gray-600">
                    {value[0]}
                  </div>
                  <div className="col-span-2">{value[1]}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
