
import Style from '../styles/footer.module.css';
import Image from 'next/image';
import Head from 'next/head';

let Footer = () => {
    return (
        <footer className={Style.footer} >
            <section className={Style.footerContent}>
                <div className='container'>
                    <a href="#" className={Style.follow}>Follow @FoodHeroINC</a>
                    <div className={Style.people}>
                        <Image src="/image/buffalofooood.jpg" height="200" width="200" className={Style.peopleImg}></Image>
                        <Image src="/image/detroitfather.jpg" height="200" width="200" className={Style.peopleImg}></Image>
                        <Image src="/image/shoshana.jpg" height="200" width="200" className={Style.peopleImg}></Image>
                        <Image src="/image/thefunemployedfamily.jpg" height="200" width="200" className={Style.peopleImg}></Image>
                        <Image src="/image/undeniableannie.jpg" height="200" width="200" className={Style.peopleImg}></Image>
                    </div>

                    <div className={Style.footerData}>
                        <div className={Style.nearYou}>
                            <p>Find FoodHero Near You  <i className="fa-solid fa-arrow-right" ></i></p>
                            <div className={Style.social}>
                                <a href="#"><i className="fab fa-whatsapp" ></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className={Style.footerInfo}>
                            <ul>
                                <li><a href="#">The Team</a></li>
                                <li><a href="#">Locations</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Food waste</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">refer a friend</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Partner</a></li>
                                <li><a href="#">careers</a></li>
                                <li><a href="#">support</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">response disclosure</a></li>
                            </ul>
                        </div>
                    </div>
                    <h3 className={Style.copyRight}>&copy; FoodHero Inc. 2022. All rights reserved.</h3>
                </div>        
            </section>
        </footer>
    )
}

export default Footer