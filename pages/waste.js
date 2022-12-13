import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Ready from "../components/Ready";
import Style from "../styles/waste.module.css";
import Image from "next/image"

const Waste = () => {
    return(
        <section className={Style.waste}>

        <Nav />
            <div className={Style.hero}>
                <div class="container">
                    <div className={Style.heroContent}>
                        <p className={Style.subText}>Did you know?</p>
                        <h1 className={Style.mainText}>160 000 000 000 pounds of food in Nigeria end up in the landfill</h1>
                        <a href="#" className={Style.btn}>Learn more</a>
                    </div>
                </div>
            </div>


            <section className={Style.main}>
                <div class="container">
                    <div className={Style.workCard}>
                    <Image src="/image/illo-the-problem.png" className={Style.workCardImg} height="120" width="400"></Image>
                            <div className={Style.workCardText}>
                                <h1 className={Style.workCardParagraph}>The problem</h1>
                                <p className={Style.workCardData}>
                                When food ends up in the landfill, It gets covered by other garbage and rots in an anaerobic state - meaning it doesn’t get any oxygen 
                                while it decomposes. This creates methane gas, which is a leading cause of greenhouse gases that are making a noticeable gaping hole in 
                                the ozone layer and significantly contributing to climate change.
‍
                                Grocery stores are left with a surplus of food items that are reaching their best before date on a daily basis. The t
                                iming of when food is deemed unsellable is based on store policy, it typically ranges from a few days to 1-2 weeks.
                                </p>
                            </div>
                    </div>

                    <div className={Style.workCard}>
                    
                            <div className={Style.workCardText}>
                                <h1 className={Style.workCardParagraph}>Diversion efforts</h1>
                                <p className={Style.workCardData}>
                                Grocery retailers have taken steps to divert potential food waste through improving procurement and operating procedures as well as shortening supply chains to keep food fresher, longer. Retailers also partner with food banks, food recovery and rescue agencies.
‍
With all their efforts, grocery retailers are still left with a significant amount of food which typically gets sent to the landfill.
                                </p>
                            </div>
                            <Image src="/image/illo-foodwaste-diversion.svg" className={Style.workCardImg} height="120" width="400"></Image>
                    </div>

                    <div className={Style.workCard}>
                    <Image src="/image/illo-foodwaste-solution.svg" className={Style.workCardImg} height="120" width="400"></Image>
                            <div className={Style.workCardText}>
                                <h1 className={Style.workCardParagraph}>The solution</h1>
                                <p className={Style.workCardData}>
                                    By selling this food at 50% off the retail price through Flashfood, grocers are able to recover costs (i.e.: reduce shrink), and significantly reduce their carbon footprint.

                                    Consumers are able to take advantage of healthier food items like produce, meat and prepared meals that they would ordinarily deem too expensive. It's a #winwinwin for all!
                                </p>
                                <a href="#" className={Style.workCardlink}>Start saving <i class="fa fa-angle-right"></i></a>
                            </div>
                    </div>
                </div>
            </section>
        <div className={Style.footer}>
            <Ready />
            <Footer />
        </div>
        </section>
    )
}

export default Waste;