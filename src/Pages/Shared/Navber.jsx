import { Link } from "react-router-dom";
import logo from '../../assets/Group 2.png'


const Navber = () => {
    return (
        <div className="navbar px-32 bg-transparent z-10 text-white  absolute top-0">
  <div className="navbar-start ">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
        <li className="py-2 text-xl"><Link>Home</Link></li>
        <li className="py-2 text-xl"><Link>About</Link></li>
        <li className="py-2 text-xl"><Link>Appoirtment</Link></li>
        <li className="py-2 text-xl"><Link>Login</Link></li>
      </ul>
    </div>
  <img src={logo} alt="" />
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className=" menu-horizontal ">
    <li className="px-2 text-xl"><Link>Home</Link></li>
        <li className="px-2 text-xl"><Link>About</Link></li>
        <li className="px-2 text-xl"><Link>Appoirtment</Link></li>
        <li className="px-2 text-xl"><Link>Login</Link></li>
    </ul>
  </div>
  
</div>

    );
};

export default Navber;