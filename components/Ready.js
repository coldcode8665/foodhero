import Style from "../styles/ready.module.css";
import Image from 'next/image';

const Ready = () => {
    return (
        <section className={Style.ready}>
            <div className="container">
                <div className={Style.readyContainer}>
                    <div className={Style.readyShowcaseContainer}>
                    <p className={Style.readyTitle}>ARE YOU READY?</p>
                    <h3 className={Style.readyShowcase}>Download the free app and save money on groceries now</h3>
                    <ul className={Style.showcaseDevice}>
                    <li><a href="#"><Image src="/icons/ios.svg" width="120" height="120" className={Style.android}></Image></a></li>
                    <li><a href="#"><Image src="/icons/android.svg" width="115" height="115" className={Style.ios}></Image></a></li>
                    </ul>
                    </div>
                    <Image src="/image/pressingDevice.jpeg" height="500" width="500" className={Style.readyImg}></Image>
                </div>
            </div>
        </section>
    )
}
export default Ready