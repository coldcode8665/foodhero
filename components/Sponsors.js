import Image  from 'next/image';
import Style from '../styles/sponsors.module.css';
import Script from 'next/script';
import CommentCard from "../components/CommentCard";
import Ready from './Ready';

let Sponsors = () => {
    return (
        <section className={Style.sponsorsContainer}>
            <div className={Style.subContainer}>
                <div className="container">
                    <div className={Style.sponsors} id="sponsor">
                        <Image src="/icons/sponsors/1.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/2.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/3.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/4.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/5.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/6.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/7.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/8.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/9.png" height="100" width="200" className={Style.img}></Image>
                        <Image src="/icons/sponsors/10.png" height="100" width="200" className={Style.img}></Image>
                    </div>

                    <div className={Style.work} id="workwithus">
                        <p>Are you a grocery chain that wants to work with Flashfood?</p>
                        <a href="#" className={Style.btn} id="dbtn">Learn more</a>
                    </div>
                    <p className={Style.workText}>How it works</p>

                    {/* how it works content */}
                    <div className={Style.workCard}>
                        <div className={Style.workCardText}>
                            <h1 className={Style.workCardParagraph}>First, use the free app to quickly and easily find discounted food from wherever you are.</h1>
                            <ul>
                                <li className={Style.workCarditem}>Browse deals of up to 50% off at a grocery store location near you. <a href="#" className={Style.workCardlink}>see Locations {">"} </a></li>
                                <li className={Style.workCarditem}>Choose your discounted food items.</li>
                                <li className={Style.workCarditem}>Pay right in the app using any major credit card, VISA debit card.</li>
                            </ul>
                        </div>
                        <Image src="/image/foodandmap.png" className={Style.workCardImg} height="620" width="400"></Image>
                    </div>
                    <div className={Style.workCard1}>
                        <div className={Style.workCardText1}>
                            <h1 className={Style.workCardParagraph1}>First, use the free app to quickly and easily find discounted food from wherever you are.</h1>
                            <p>Head to the store, grab your food items from the Flashfood zone, and quickly confirm your order with the customer service desk.</p>
                        </div>
                        <Image src="/image/ladyandfridge.png" className={Style.workCardImg1} height="370" width="150"></Image>
                    </div>
                    <div className={Style.workCard2}>
                        <div className={Style.workCardText2}>
                            <h1 className={Style.workCardParagraph2}>First, use the free app to quickly and easily find discounted food from wherever you are.</h1>
                            <p>Head to the store, grab your food items from the Flashfood zone, and quickly confirm your order with the customer service desk.</p>
                        </div>
                        <Image src="/image/peopleandbar.png" className={Style.workCardImg2} height="370" width="150"></Image>
                    </div>
                    <p className={Style.helpText}>We’ve helped thousands of people save money on their groceries</p>

                   <CommentCard text="Another day and another box of fruit bought off the Flashfood app! I love using this app and keeping perfectly good food from going into the landfill. All of the food posted on the app i
                   s reaching its best before date but still perfectly good to eat. A
                   nd it was only $5.00! 😊"  user="@ACELIACSTRAVELS FROM AIRDRIE, ALBERTA"/>
                  
                </div>
            </div>
            <Ready />
            <Script type="text/javascript" src="/js/index.js"/>
        </section>
    )
}
export default Sponsors;