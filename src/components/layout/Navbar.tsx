import React , {FC} from "react"

interface NavbarProps {
}

const Navbar : FC<NavbarProps> = ({}) => {
  return (
      <header className="fixed top-5 w-full bg-black p-10 z-[100]"> 
        <nav>
            <h1>Ramoena</h1>
        </nav>
        </header>
  );
}

export default Navbar