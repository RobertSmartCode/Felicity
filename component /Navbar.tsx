import styles from '../styles/Navbar.module.css'
import { IoSearchOutline } from 'react-icons/io5'
import { GoLocation } from 'react-icons/go'
import { BiGift } from 'react-icons/bi'
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import Image from "next/image"


export default function Navbar()  {

	return (
		<>
			<div className={styles.header}>
				{/* header */}
					<header className={styles.headertop}>
      			 	 <Image
				      	className={styles.logo}
        			  	alt="logo"
        			 	src="/logo.svg" 
					  	width={283}
                      	height={64}
      			  	  /> 
						<form  className="w-full lg:w-2/4 h-10 flex relative gap-3 items-center">
							<input
								type="text"
								placeholder="Buscar productos, marcas y más..."
								className="w-full h-full rounded-sm shadow-md pl-8 lg:py-2 lg:px-3 outline-none font-normal text-sm relative"
							/>
							<IoSearchOutline color="#b4b4b4" size={'1.2em'} className="lg:hidden absolute left-20 top-[10px]"/>
							<button className="hidden lg:block right-3 top-1/4 absolute search-button w-6">
								<IoSearchOutline color="#666670" size={'1.2em'} />
							</button>

							<AiOutlineMenu size={'2em'} color="#333" className='lg:hidden'/>
							<AiOutlineShoppingCart size={'2em'} color="#333" className='lg:hidden'/>
						</form>
						<div className="delivery flex gap-1">
								<BiGift size="1.5em" color="#303126" />
							<div className="delivery-info flex flex-col text-brown-meli">
								<span className="text-sm">Promo de Black Friday</span>
							</div>
						</div>
					</header>

					{/* NAVBAR */}
					
					<nav className="hidden mt-3 lg:flex justify-between">
						<div className="delivery flex gap-1">
								<GoLocation size="1.5em" color="#303126" />
							<div className="delivery-info flex flex-col text-brown-meli">
								<span className="text-xs">Ingresa tu </span>
								<span className="text-sm">Ubicación</span>
							</div>
						</div>
						<div>
						<ul className={styles.categorias}>
							<li>Bebé Niña</li>
							<li>Bebé Niño</li>
							<li>Niña</li>
							<li>Niño</li>
							<li>OUTLET</li>
							<li>Acesorios</li>
						</ul>
						</div>
						<div>
						<ul className="nav-user-categories mt-1 flex gap-5 items-end text-xs text-tiny">
							<li>Crea tu cuenta</li>
							<li>Ingresá</li>
							<li>Mis Compras</li>
							<li  className="cursor-pointer"><AiOutlineShoppingCart size={'2em'} color="#303126"/></li>
						</ul>
						</div>
					</nav>			
			</div>

		</>
	)
}
