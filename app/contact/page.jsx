"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Celular",
    description: "(+51) 999999999",
  },
  {
    icon: <FaEnvelope />,
    title: "Correo electrónico",
    description: "ing.borislf@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Dirección",
    description: "Arequipa - Cusco - Perú",
  },
];

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-3"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-3 p-6 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl text-accent">Trabajemos juntos</h3>
              <p className="text-white/60 text-[14px] ">
              Como ingeniero mecánico con experiencia en gestión de maquinaria pesada, mi objetivo es colaborar contigo para optimizar tu gestión.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input type="firstname" placeholder="Nombres" />
                <Input type="lastname" placeholder="Apellidos" />
                <Input type="email" placeholder="Correo" />
                <Input type="phone" placeholder="Teléfono celuar" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="gm">Gestion de Mantenimiento</SelectItem>
                    <SelectItem value="et">Expediente Técnico</SelectItem>
                    <SelectItem value="as">Asesoría</SelectItem>
                    <SelectItem value="ia">Inteligencia Artificial</SelectItem>
                    <SelectItem value="td">Tecnología Digital</SelectItem>
                    <SelectItem value="bd">Base de Datos</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[120px]" placeholder="Escribe tu mensaje aquí." />
              {/* btn */}
              <Button size="default" className="max-w-40">
                Enviar mensaje
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>      
    </motion.section>
  );
}

export default Contact;
