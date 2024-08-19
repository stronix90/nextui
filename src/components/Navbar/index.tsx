"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownSection,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";

import { User } from "@nextui-org/user";

import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavbarUI() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" />,
    scale: <Scale className="text-warning" fill="currentColor" />,
    lock: <Lock className="text-success" fill="currentColor" />,
    activity: <Activity className="text-secondary" fill="currentColor" />,
    flash: <Flash className="text-primary" fill="currentColor" />,
    server: <Server className="text-success" fill="currentColor" />,
    user: <TagUser className="text-danger" fill="currentColor" />,
  };

  return (
    <Navbar className="p-1 shadow-lg border-b-1 h-14">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">SICAF</p>
      </NavbarBrand>

      {/* Bandejas */}
      <NavbarContent justify="center">
        <Dropdown>
          {/* Cabecera */}
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="flat"
              >
                Mis pendientes (5)
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownSection title="Solicitante" showDivider>
              {/* Mis solicitudes */}
              <DropdownItem
                key="mis_solicitudes"
                description="Solicitudes que he creado"
                startContent={icons.activity}
              >
                Mis solicitudes
              </DropdownItem>

              {/* Solicitudes del grupo */}
              <DropdownItem
                key="solicitudes_grupo"
                description="Solicitudes que ha creado mi grupo"
                startContent={icons.flash}
              >
                Solicitudes del grupo
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="Aprobador" showDivider>
              {/* Mis pendientes */}
              <DropdownItem
                key="mis_pendientes"
                description="Solicitudes pendientes de procesamiento"
                startContent={icons.scale}
              >
                Mis pendientes
              </DropdownItem>
            </DropdownSection>

            <DropdownSection title="Visualización" showDivider>
              <DropdownItem
                key="tablero"
                description="Visualización de todas las solicitudes"
                startContent={icons.server}
              >
                Tablero
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* Operaciones ABM */}
      <NavbarContent justify="center">
        {/* Alta */}
        <NavbarItem>
          <Link color="foreground" href="#">
            Alta
          </Link>
        </NavbarItem>

        {/* Modificación */}
        <NavbarItem>
          <Link color="foreground" href="#">
            Modificación
          </Link>
        </NavbarItem>

        {/* Baja */}
        <NavbarItem>
          <Link color="danger" href="#">
            Baja
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Varios */}
      <NavbarContent>
        {/* Herramientas */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Herramientas
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Consulta */}
        <NavbarItem>
          <Link href="#" aria-current="page">
            Consulta
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Usuario */}
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger className="flex">
              <User
                className="cursor-pointer	"
                name="Lucas Gallo"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem key="cambiar_contrasena" startContent={icons.scale}>
              Cambiar contraseña
            </DropdownItem>

            <DropdownItem key="cerrar_sesion" startContent={icons.scale}>
              Cerrar sesión
            </DropdownItem>

            <DropdownItem key="manual_sicaf" startContent={icons.scale}>
              Manual de SICAF
            </DropdownItem>

            <DropdownItem key="manual_catalogacion" startContent={icons.scale}>
              Manual de catalogación
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
