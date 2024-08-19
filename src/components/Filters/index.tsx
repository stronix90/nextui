"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { FilterIcon } from "@/components/Filters/Icons";

export default function Filters() {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card className="rounded-none border-none shadow-none">
      <CardBody>
        <Button color="primary" variant="flat" className="w-24">
          <FilterIcon />
          Filtros
        </Button>
      </CardBody>
    </Card>
  );
}
