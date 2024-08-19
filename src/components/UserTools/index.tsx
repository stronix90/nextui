import { Button, ButtonGroup } from "@nextui-org/button";

export default function UserTools() {
  return (
    <div className="flex justify-between p-2 mt-auto flex-wrap">
      <Button color="danger" variant="light">
        Rechazar
      </Button>

      <div>
        <ButtonGroup>
          <Button>Pedir aclaración</Button>
          <Button disabled>Enviar aclaración</Button>
        </ButtonGroup>
        <Button className="ms-4">Agregar mensaje</Button>
        <Button color="success" className="ms-4">
          Aprobar
        </Button>
      </div>
    </div>
  );
}
