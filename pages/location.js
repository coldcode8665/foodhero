
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Style from '../styles/location.module.css';
import Image from 'next/image';
const Location = () => {

    return(
        <section className={Style.sectionContainer}>
        <Nav />
            <div className={Style.showCase}>
                <h1>Find FoodHero at a grocery store near you</h1>
                    
            </div>
            <div className={Style.mapSection}>
                <div className={Style.mapDetails}>
                    <div>
                        <input type="text" name="search" id="search" placeholder="Enter address or zipcode.."/>
                        <i class="fa fa-search"></i>
                        <a href="#">50 mi</a>
                        <a href="#">Filters</a>
                    </div>
                    <p className={Style.msg}>No results found.</p>
                    <p className={Style.notification}>Get notified about new locations near you!</p>
                    <div className={Style.userInfo}>
                        <form>
                            <input type="text" name="name" placeholder='Your name'></input>
                            <input type="text" name="name" placeholder='Your email'></input>
                            <input type="text" name="name" placeholder='Your address'></input>
                        </form>
                    </div>
                    <button className={Style.notifyBtn}>Notify me!</button>
                    <button className={Style.showBtn}>Show all locations</button>
                </div>
                <div className={Style.map}>
                    <button>Show all locations</button>
                <iframe src="https://www.openstreetmap.org/#map=6/9.117/8.674" title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
            </div>
            <div className={Style.pusher}>

            </div>
            <div className={Style.sponsors}>
                <div class="container">
                    <p>Now Available at</p>
                    <div>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>
                        <Image src="/image/savealot .png" height="100" width="100" className={Style.sponsorImg}></Image>

                    </div>
                </div>
            </div>
            <div className={Style.showcase}>
                <div class="container">
                    <div className={Style.infoData}>
                        <div className={Style.text}>
                            <div>
                                <p className={Style.mainText}>The easiest way to reduce food waste</p>
                                <p className={Style.subText}>while saving money on the everyday groceries you love</p>
                            </div>
                        </div>
                        <Image src="/image/EBT - phone mockup-p-500.png" height="700" width="600" className={Style.img}></Image>
                    </div>
                    <div className={Style.card}>
                        <div className={Style.cardContent}>
                            <Image src="/icons/quotation.svg" height="50" width="50"></Image>
                            <p>I saved over $300 in two weeks! I love this app.</p>
                            <div className={Style.likes}>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <a href="#">Maria from Lagos</a>
                            </div>
                        </div>
                    </div>
                    <p className={Style.cardText}>More than <span>300,000</span> people have snagged massive deals on FoodHero</p>
                </div>

            <div className={Style.showcasefooter}>

            </div>
            </div>


            <div className={Style.readytojoin}>
                <div>
                    <p>Ready to join us in the fight against food wastage?</p>
                    <a href="#" className={Style.btn}>download the app</a>
                </div>
            </div>
    
            
        <Footer />
        </section>
    )
}

export default Location;