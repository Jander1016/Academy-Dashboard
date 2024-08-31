'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Escolar',
    count: 50,
    fill: '#8884d8',
  },
  {
    name: 'Universitario',
    count: 26.69,
    fill: '#83a6ed',
  },
  {
    name: 'Pre-Universitario',
    count: 15.69,
    fill: '#8dd1e1',
  },
];

export const CountChart = () => (
  <>
    <article className='flex items-center justify-between'>
      <span className="text-lg font-semibold bg-white px-2 rounded-full text-green-600">Alumnos</span>
      <Image src={'/moreDark.png'} alt="Indicadores" width={20} height={20} />
    </article>
    <article className="relative w-full h-[75%]">
      <ResponsiveContainer>
        <RadialBarChart 
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={20}
          data={data}
        >
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="count" />
          <Legend iconSize={5} layout="vertical" verticalAlign="bottom" />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image
        src={"/maleFemale.png"}
        alt='Alumnos'
        width={50}
        height={50}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      />
    </article>
    <article>
      soy derecha
    </article>
  </>
)
