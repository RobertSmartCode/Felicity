import styles from '../styles/Cuerpo.module.css'
import Image from "next/image"

export default function Cuerpo()  {

    return(
        <div className={styles.carrusel}>
             <Image
				className={styles.cuerpo}
        		alt="fondo"
        		src="/Banner.jpg" 
				width={1600}
                height={340}
      		  /> 

        </div>
        
        
    )

}