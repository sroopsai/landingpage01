import type { NextPage } from "next";
import CustomerQuote from "./customer-quote";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.437rem] box-border gap-[2rem] max-w-full text-left text-[2.5rem] text-black font-small-text mq725:gap-[1rem] ${className}`}
    >
      <div className="w-[45.813rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-semibold font-inherit mq450:text-[1.5rem] mq450:leading-[1.625rem] mq975:text-[2rem] mq975:leading-[2.188rem]">
          Heading
        </h1>
        <h3 className="m-0 w-[39.063rem] relative text-[1.5rem] leading-[150%] font-normal font-inherit text-gray flex items-center max-w-full mq450:text-[1.188rem] mq450:leading-[1.813rem]">
          Subheading to introduce testimonials
        </h3>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2rem] max-w-full text-[1.25rem] mq725:gap-[1rem]">
        <CustomerQuote
          aTerrificPieceOfPraise="“A terrific piece of praise”"
          avatar="/avatar@2x.png"
        />
        <CustomerQuote
          aTerrificPieceOfPraise="“A fantastic bit of feedback”"
          avatar="/avatar-1@2x.png"
        />
        <CustomerQuote
          aTerrificPieceOfPraise="“A genuinely glowing review”"
          avatar="/avatar-2@2x.png"
        />
      </div>
    </section>
  );
};

export default Testimonials;
