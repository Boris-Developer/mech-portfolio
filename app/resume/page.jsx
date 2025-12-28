"use client";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "Como ingeniero mecánico, he trabajado al rededor de 10 años en la gestión de mantenimiento de flotas de maquinaria pesada y equipos menores.",
  items: [
    {
      company: "Machinery Rent E.I.R.L.",
      position: "Jefe de Equipo Mecánico",
      duration: "Trabajando actualmente",
    },
    {
      company: "Municipalidad Distrital de Ocobamaba - Cusco",
      position: "Jefe de Equipo Mecánico",
      duration: "01/2023 - 02/2023",
    },
    {
      company: "Municipalidad Distrital de Vilcabamba - Cusco",
      position: "Jefe de Equipo Mecánico",
      duration: "07/2020 - 01/2021",
    },
    {
      company: "COTRANS E.I.R.L. - Arequipa",
      position: "Jefe de Servicios de Equipo Mecánico",
      duration: "2016 - 2019",
    },
    {
      company: "Gobierno Regional del Cusco",
      position: "Supervisor de Mantenimiento",
      duration: "2014",
    },
    {
      company: "Municipalidad Distrital de Echarati - Cusco",
      position: "Residente de Equipo Mecánico",
      duration: "02/2011 - 01/2013",
    },
    {
      company: "OVERALL STRATEGY - CASTROL",
      position: "Representante Técnico",
      duration: "04/2008 - 08/2008",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mis Estudios",
  description:
    "Formación universitaria en Ingeniería Mecánica con especialización en gestión de mantenimiento de flotas de equipo pesado móvil",
  items: [
    {
      institution: "Universidad Nacional San Antonio Abad del Cusco",
      degree: "Ingeniero Mecánico",
      duration: "2002 - 2008",
    },
    {
      institution: "TECSUP - AREQUIPA",
      degree: "Diplomado en gestión de mantenimiento",
      duration: "2015 - 2016",
    },
  ],
};

// technologies data
const technologies = {
  tittle: "Tecnologías",
  description:
    "Compromiso con la actualización continua en las tecnologías y tendencias en la gestión de maquinaria pesada para ofrecer soluciones innovadoras.",
    technologyList: [
    {
      icon: "Costos y presupuestos S-10.",
      name: "Costos y presupuestos S-10.",
    },
    {
      icon: "SAP Expert User - Plant Maintenance with SAP ERP.",
      name: "SAP Expert User - Plant Maintenance with SAP ERP.",
    },
    {
      icon: "Microsoft Excel Avanzado.",
      name: "Microsoft Excel Avanzado.",
    },
    {
      icon: "Autodesk Inventor profesional Avanzado.",
      name: "Autodesk Inventor profesional Avanzado.",
    },
  ],
};

// courses data
const courses = {
  tittle: "Cursos - capacitaciones",
  description:
    "Compromiso con la actualización continua de conocimientos en las últimas tecnologías y tendencias en la gestión de maquinaria pesada para ofrecer soluciones innovadoras.",
    courseList: [
    {
      icon: "Fundamentos del TPM - Mantenimiento Productivo Total.",
      name: "Fundamentos del TPM",
    },
    {
      icon: "Planificación y Programación del Mantenimiento.",
      name: "Planificación y Programación del Mantenimiento.",
    },
    {
      icon: "Soluciones Digitales Ferreyros (VisionLink, cat).",
      name: "VisionLink, parts.cat, my.cat",
    },
    {
      icon: "Peritajes y Valorizaciones de bienes tangibles.",
      name: "Peritajes y Valorizaciones",
    },
    {
      icon: "Capacitacion técnica en lubricación - Castrol",
      name: "Lubricación - Castrol",
    },
    {
      icon: "Ensamblaje de computadoras.",
      name: "Ensamblaje de computadoras.",
    },
  ],
};

// skills data
const skills = {
  tittle: "Conocimientos",
  description:
    "Compromiso con la actualización continua de conocimientos en las últimas tecnologías y tendencias en la gestión de maquinaria pesada para ofrecer soluciones innovadoras.",
  skillList: [
    {
      icon: "Delphin Express - costos y presupuestos.",
      name: "Delphin Express.",
    },
    {
      icon: "Sistema de Monitoreo Satelital Komtrax - Komatsu.",
      name: "Komtrax - Komatsu.",
    },
    {
      icon: "Sistema de Monitoreo Satelital Product Link, MyCAT.",
      name: "Product Link y MyCAT-Caterpillar",
    },
    {
      icon: "ET_Cat Electronic Technician.",
      name: "Electronic Technician.",
    },
    {
      icon: "Sis Caterpillar - Codificación.",
      name: "Sis Caterpillar - Codificación.",
    },
    {
      icon: "Microsoft Project.",
      name: "Microsoft Project.",
    },
    {
      icon: "Microsoft Excel.",
      name: "Microsoft Excel.",
    },
    {
      icon: "Microsoft Word.",
      name: "Microsoft Word.",
    },
    {
      icon: "Microsoft PowerPoint.",
      name: "Microsoft PowerPoint.",
    },
    {
      icon: "AutoCAD 2D y 3D.",
      name: "AutoCAD 2D y 3D.",
    },
    {
      icon: "Circuitos Lógicos.",
      name: "Circuitos Lógicos.",
    },
    {
      icon: "Electrónica Básica.",
      name: "Electrónica Básica.",
    },
    {
      icon: "Base de datos - MySQL.",
      name: "MySQL.",
    },
    {
      icon: "Lenguaje de programación Python - Machine Learning.",
      name: "Python - Machine Learning.",
    },
    {
      icon: "Lenguaje de programación JavaScript - App webs.",
      name: "JavaScript - App webs.",
    },
    {
      icon: "Lenguajes de programación HTML y CSS - App webs.",
      name: "HTML y CSS",
    },
  ],
};

// data about
const about = {
  title: "Sobre mi",
  description:
    "Soy ingeniero mecánico, con especialidad en la gestión del matenimiento de flotas de equipo pesado y livianos.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Boris Luna",
    },
    {
      fieldName: "Celular",
      fieldValue: "(+51) 999999999",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "10+ Años",
    },
    {
      fieldName: "Skype",
      fieldValue: "Boris.01",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Peruano",
    },
    {
      fieldName: "Correo",
      fieldValue: "ing.borislf@gmail.com",
    },
    {
      fieldName: "Independiente",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español, Ingles B1",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Estudios</TabsTrigger>
            <TabsTrigger value="technologies">Tecnologías</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="skills">Conocimientos</TabsTrigger>
            <TabsTrigger value="about">Sobre mi</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[80vh] w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[14px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[170px] py-4 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[14px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl min-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* technologies */}
            <TabsContent value="technologies" className="w-full">
              <div className="flex flex-col gap-[14px]">
                <div className="flex flex-col gap-3 text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{technologies.tittle}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                    {technologies.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 xl:gap-[10px]">
                    {technologies.technologyList.map((technology, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[50px] bg-[#232329] rounded-xl flex items-center justify-center xl:justify-start px-4 group">
                                <div className="text-[14px] xl:text-xl group-hover:text-accent pr-4 transition-all duration-300">
                                  {technology.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{technology.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* courses */}
            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-3 text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{courses.tittle}</h3>
                  <p className="man-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                    {courses.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 xl:gap-[10px]">
                    {courses.courseList.map((course, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[50px] bg-[#232329] rounded-xl flex items-center justify-center xl:justify-start px-4 group">
                                <div className="text-[14px] xl:text-xl group-hover:text-accent pr-4 transition-all duration-300">
                                  {course.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{course.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-3 text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.tittle}</h3>
                  <p className="xl:min-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 xl:gap-[10px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[54px] bg-[#232329] rounded-xl flex items-center justify-center xl:justify-start px-4 group">
                                <div className="text-[14px] xl:text-xl group-hover:text-accent pr-4 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-[14px]">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
