
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
                                <li>The Team</li>
                                <li>Locations</li>
                                <li>Our Story</li>
                                <li>Food waste</li>
                            </ul>
                            <ul>
                                <li>News</li>
                                <li>Blog</li>
                                <li>refer a friend</li>
                            </ul>
                            <ul>
                                <li>Partner</li>
                                <li>careers</li>
                                <li>support</li>
                                <li>Contact us</li>
                            </ul>
                            <ul>
                                <li>Terms of use</li>
                                <li>privacy policy</li>
                                <li>response disclosure</li>
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