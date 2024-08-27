import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section className='flex items-center justify-between p-2'>
      <Link href="/" className="flex items-center justify-start p-2 gap-2">
        <Image src="/logo.webp" alt="Logotipo academia" width={100} height={20} />
      </Link>
{/*       
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src={'/search.png'} alt='Ingresar Busqueda' width={14} height={14}/>
        <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div> */}

      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full size-7 fl items-center justify-center cursor-pointer'>
          <Image src={'/message.png'} alt='Mensajes del usuario' width={20} height={20} />
        </div>
        <div className='bg-white rounded-full size-7 fl items-center justify-center cursor-pointer relative'>
          <Image src={'/announcement.png'} alt='Anuncios para el usuario' width={20} height={20} />
          <div className='absolute -top-3 -right-3 size-5 flex items-center justify-center bg-purple-500 text-white rou text-xs rounded-full'>
            1
          </div>
        </div>
        <div className='hidden lg:flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Jander</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src={'/avatar.png'} alt='Avatar Usuario' width={36} height={36} className='rounded-full' />
      </div>
    </section>
  )
}

export default Navbar