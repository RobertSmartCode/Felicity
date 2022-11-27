import styles from '../styles/Carrusel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel()  {
    
        return (
            <Carousel className={styles.carrusel}>
                <div>
                    <img src="Banner1.jpg" />
                </div>
                <div>
                    <img src="Banner2.jpg" />
                </div>
                <div>
                    <img src="Banner3.jpg" />
                </div>
                <div>
                    <img src="Banner4.jpg" />
                </div>
                <div>
                    <img src="Banner5.jpg" />
                </div>
                <div>
                    <img src="Banner6.jpg" />
                </div>
            </Carousel>
        );
};