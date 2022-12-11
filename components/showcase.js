import Style from '../styles/showcase.module.css';
import Image from "next/image";
import Script from 'next/script';
import Head from 'next/head';

let Showcase = () => {
  
    return (
     
        <section className={Style.showcaseBg}>
            <div className="container">
                <div className={Style.showcaseContainer}>
                    <h1 className={Style.showcaseText} id="showcaseText">
                        Save Money, fight against food wastage and help save our planet.
                    </h1>
                    <p className={Style.showcaseSubText}>
                        Great savings on groceries and food items that are nearing their before date at stores across nigeria
                    </p>
                    <ul className={Style.showcaseDevice}>
                        <li><a href="#"><Image src="/icons/ios.svg" width="120" height="120" className={Style.android}></Image></a></li>
                        <li><a href="#"><Image src="/icons/android.svg" width="115" height="115" className={Style.ios}></Image></a></li>
                        <li><a href="#" className={Style.showcaseDeviceText}>How it works <i className='fa fa-angle-right'></i></a></li>
                    </ul>
                </div>
            </div>
          
        </section>

    )
}

export default Showcase;