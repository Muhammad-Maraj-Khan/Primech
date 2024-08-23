import { stats } from "../constants";
import styles from "../style";
import CountUp from 'react-countup';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer'; // Import the hook

const Stats = () => (
  <section className={`w-[100%] grid sm:grid-cols-4 grid-cols-2 gap-4 sm:my-10 my-4`}>
    <TransitionGroup component={null}>
      {stats.map((stat) => {
        const { ref, inView } = useInView({
          triggerOnce: true, // Trigger animation only once
          threshold: 0.5,    // Trigger when 50% of the element is in view
        });

        return (
          <CSSTransition
            key={stat.id}
            timeout={500} // Duration of transition in milliseconds
            classNames="fade"
          >
            <div ref={ref} className={`flex justify-start items-center flex-col m-3`}>
              <h4 className="text-white font-poppins font-semibold xs:text-[2.5rem] 
              text-[2rem] xs:leading-[3.313rem] leading-[2.688rem] text-center">
                {inView && (
                  <CountUp
                    start={0}
                    end={parseFloat(stat.value.replace(/[^\d.]/g, ''))}
                    suffix={stat.value.replace(/[\d.]/g, '')}
                    duration={2.75}
                    preserveValue={true}
                    useEasing={true}
                  />
                )}
              </h4>
              <p className="text-white font-poppins font-normal xs:text-[20px] 
              text-[1rem] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 text-center">
                {stat.title}
              </p>
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  </section>
);

export default Stats;
