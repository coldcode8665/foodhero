import Nav from "../components/Nav"
import Style from "../styles/story.module.css";
import Image from "next/image"
import CommentCard from "../components/CommentCard";
import Ready from "../components/Ready";
import Footer from "../components/Footer";

const Story = () => {
 
    return (
        <>
        <Nav />
        <section className={Style.content}>
            <div className={Style.showCase}>
                <div className="container">
                      <div className={Style.showcaseContent}>
                        <div>
                            <h2>Our home is Abuja, but our impact is global.</h2>
                            <a href="#">Read our story <i class="fa fa-angle-down"></i></a>
                        </div>
                      </div>  
                </div>
            </div>
            
            <div className={Style.subShowcase}>
                <div>
                    <p>We spent our careers in a variety of industries such as management consulting, finance, and emerging technology,
                        however we decided it was time to do something different - something that would create a better world for future generations,
                        while creating affordable access to food to everyone.
                    </p>
                    <a href="#">Meet the team <i class="fa fa-angle-right"></i></a>
                </div>
            </div>

            <div className={Style.mainSection}>
                <div className={Style.story}>
                    <div className={Style.storyContainer}>
                        <div className={Style.storyContent}>
                            <h1>It all started with a phone call</h1>
                            <p>Josh’s sister who was a chef called him distraught one night and said “I just threw out $4000 worth of food.” 
                                At first Josh laughed and thought it was a joke, but was shocked to discover that the food was from a catered event and a 
                                decision was made to throw it all out. 
                                This seemed too hard to dismiss as a common everyday occurrence, yet, that was the norm in the food and grocery industries.</p>
                        </div>
                        <div className={Style.storyImg}>
                            <Image src="/image/story-illo-1.png" height="500" width="500" className={Style.storyImage}></Image>
                        </div>
                    </div>
                    <div className={Style.storyContainer}>
                        <div className={Style.storyImg}>
                            <Image src="/image/story-illo-2.png" height="500" width="500" className={Style.storyImage}></Image>
                        </div>
                        <div className={Style.storyContent}>
                            <h1>Then came the lightbulb!</h1>
                            <p>After months of research, Josh was sitting in his condo which was on top of a grocery store and a 
                                light bulb went off in his head. What if he could buy 
                                food nearing its best before date at a discount from his phone and pick it up downstairs? He would buy
                                 food like that all the time.</p>
                        </div>
                    </div>
                    <div className={Style.storyContainer}>
                        <div className={Style.storyContent}>
                            <p>in fact, when food gets thrown out, it usually ends up in a landfill, gets covered by other garbage 
                                and rots. When this happens, the food doesn't have oxygen and the decomposition process produces
                                 methane gas. The statistic that eventually created Flashfood is:

                                'If International food waste were a country, it would be the third leading cause to
                                 GHG emissions behind the US & China'.</p>
                        </div>
                        <div className={Style.storyImg}>
                            <Image src="/image/story-illo-3.jpg" height="500" width="500" className={Style.storyImage}></Image>
                        </div>
                    </div>
                    <div className={Style.storyContainer}>
                    <div className={Style.storyImg}>
                            <Image src="/image/story-illo-4.png" height="500" width="500" className={Style.storyImage}></Image>
                        </div>
                        <div className={Style.storyContent}>
                            <p>He went on to speak to hundreds of grocery employees and top level executives in the grocery industry, it was alarming 
                                to learn that most food items that were not sold and approaching their best before dates by up to 2 weeks, were simply
                                 thrown out!

                                This is when the idea of Flashfood app was solidified. An app that allows shoppers to browse 
                                food items approaching their best before 
                                date, buy them at a discount and pick them up in store.</p>
                        </div>
                        
                    </div>
                </div>
                <div class="container">
                <p className={Style.helpText}>We’ve helped thousands of people save money on their groceries</p>
                <CommentCard text="Another day and another box of fruit bought off the Flashfood app! I love using this app and keeping perfectly good food from going into the landfill. All of the food posted on the app i
                   s reaching its best before date but still perfectly good to eat. A
                   nd it was only $5.00! 😊"  user="@ACELIACSTRAVELS FROM AIRDRIE, ALBERTA"/>
                </div>
            </div>
            <div className={Style.footerSection}>
            <Ready />
            <Footer />
            </div>
        </section>
        </>
    )

}

export default Story;