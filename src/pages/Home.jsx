import { Stats, Testimonials, Hero } from "../components";
import GetAQuote from "../components/GetAQuote";
import Services from "../components/Services";
import Contact_home from "../components/Contact_home";
import Service_Content_Text from "../components/Service_Content_Text";



const Home = () => {

    
    return (
        <div>
            <div className="overflow-hidden">
                <div className="bg-primary w-full overflow-hidden">
                    <Hero />
                    <GetAQuote />
                    <Stats />
                    <Services />
                    <Service_Content_Text heading={"What Our Clients Say"} text={"Explore what our clients say about their experience with Primech."}/>
                    <Testimonials />
                    <Contact_home />
                </div>
            </div>
        </div>
                )
}

export default Home