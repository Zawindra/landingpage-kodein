import { logoKodein } from '../assets'

const Navbar = () => {
  return (
    <div>
        <header className="bg-white shadow-md fixed top-0 w-full z-10">
            <div className="flex justify-between items-center px-4 md:px-16 lg:px-32 py-2">
                <a href="#" className="w-20 md:w-28">
                    <img src={ logoKodein } alt="Logo"/>
                </a>
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <ul className="flex items-center gap-4 lg:gap-8 text-[16px] md:text-[20px]">
                        <li><a href="#" className="text-gray-800 hover:text-blue-400">Our School</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-400">Academic</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-400">Student Life</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-blue-400">Student Portfolio</a></li>
                    </ul>
                    <a href="#" className="bg-blue-500 px-4 py-2 md:px-6 md:py-2 rounded-md text-[16px] md:text-[20px] font-semibold hover:bg-blue-300">PPDB</a>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar