import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";


const Testimonials = () =>(
    <section className='w-[100%] flex justify-center items-center'>
      <div className="flex flex-wrap sm:justify-center justify-center sm:w-full w-[20rem] feedback-container relative z-[1] ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>

    </section>
  )

export default Testimonials;