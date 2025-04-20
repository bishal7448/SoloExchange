import { useState } from "react";
import { SoloExchangeContext } from "../context/SoloExchangeContext";

const About = () => {
  return (
    <div className="p-10 about-bg">
      <div className="my-5">
        <div className="about-card">
          <div className="w-auto text-left justify-center pr-20 pl-20 pt-10 text-white font-bold">
            <h1 className="text-6xl">About</h1>
          </div>
          <div className="w-full h-full">
            <div className="w-full text-justify pr-20 pl-20 pb-20 pt-10 text-white">
              <div>
                When was the last time you had to replace one of your devices? Did it last more than a couple of years before breaking? If not, your device is like millions of others that end up in landfills, contributing to waste without purpose.
              </div>{" "}
              <br />
              <div>
                In the past, producing devices was costly. However, with advancements in microchip technology, manufacturing has become so efficient that replacing a device is often cheaper than repairing it.
              </div>{" "}
              <br />
              <div>
                This shift has led to a surge in electronic waste (e-waste), with around 50 million tons generated annually. Without intervention, this number will continue to rise. E-waste often contains toxic materials that contaminate the soil and water near landfills.
              </div>{" "}
              <br />
              <div>
                So, what can you do to make a difference? Enter SoloExchange. While you may not have the power to influence governments or corporate policies, you can make impactful choices as a consumer. By choosing SoloExchange over purchasing new devices, you help reduce waste and discourage excessive production practices.
              </div>{" "}
              <br />
              <div>
                Buying second-hand is not only cost-effective but also a step toward a better, more sustainable world when you use SoloExchange.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
