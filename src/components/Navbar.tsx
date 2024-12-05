import logo from '../assets/olola jaco cyan.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'



const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className='w-10 mx-5' />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/akinbusola-akinola/" target='blank'>
            <FaLinkedin />
            </a>

            <a href="https://github.com/OlolaJaco" target='blank'>
            <FaGithub />
            </a>

        </div>
    </nav>
  )
}

export default Navbar