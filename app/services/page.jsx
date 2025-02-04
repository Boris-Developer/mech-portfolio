"use client"

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num: '01',
    title: 'Gestión de Mantenimiento',
    description: 'Especialista en la gestión de mantenimiento de flotas de maquinaria pesada y liviana.',
    href: ""
  },
  {
    num: '02',
    title: 'Expedientes técnicos',
    description: 'Elaboración de expedientes técnicos para adquisición y mantenimiento de maquinaria pesada y equipos livianos.',
    href: ""
  },
  {
    num: '03',
    title: 'Asesoramiento',
    description: 'Asesor en la gestion de mantenimiento de maquinarias implementando tecnologías digitales.',
    href: ""
  },
  {
    num: '04',
    title: 'Inteligencia Artificial',
    description: 'Implementación de inteligencia artificial para la gestion de mantenimiento de maquinaria.',
    href: ""
  },
  {
    num: '05',
    title: 'Tecnología Digital',
    description: 'Implementación de tecnología digital aplicado a la gestion de mantenimiento de maquinaria.',
    href: ""
  },
  {
    num: '06',
    title: 'Base de datos',
    description: 'Servicio asesoramiento para la recopilacion y acumulación de datos implementado a la gestión de mantenimiento.',
    href: ""
  },
]

import { motion } from 'framer-motion';

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center mt-6 py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className='w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-2xl' />
                  </Link>
                </div>
                {/* tittle */}
                <h2 className='text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                {/* description */}
                <p className='text-white/60'>{service.description}</p>
                {/* border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services

