import logoSite from '@/public/logo.webp'
import Image from 'next/image' 

  export default function Nav() {
  
    return (
        <>



        <div className="navbar bg-blue-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <Image width={30} height={30} src={logoSite} alt='logo lego' className='w-12 h-12 rounded-full'/> 

      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a>Film</a>
          <ul className="p-8" style={{ zIndex: 100 }}>
          <li><a>Populaire10</a></li>
            <li><a>Du moment</a></li>
            <li><a>A venir</a></li>
            <li><a>Les mieux evalués</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hidden sm:block"><Image width={30} height={30} src={logoSite} alt='logo lego' className='w-12 h-12 rounded-full'/> 
    </a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Film</summary>
          <ul className="p-2">
            <li><a>Populaire</a></li>
            <li><a>Du moment</a></li>
            <li><a>A venir</a></li>
            <li><a>Les mieux evalués</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        
        </>
      
    );
    }
  