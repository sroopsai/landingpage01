import type { NextPage } from "next";
import { memo } from "react";

export type CustomerQuoteType = {
  className?: string;
  aTerrificPieceOfPraise?: string;
  avatar?: string;
};

const CustomerQuote: NextPage<CustomerQuoteType> = memo(
  ({ className = "", aTerrificPieceOfPraise, avatar }) => {
    return (
      <div
        className={`flex-1 shadow-[-4px_8px_20px_rgba(0,_0,_0,_0.1)] rounded-xl bg-white box-border flex flex-col items-start justify-start py-[1.875rem] pr-[1.25rem] pl-spacing-sm gap-[3rem] min-w-[19rem] max-w-full text-left text-[1.25rem] text-black font-small-text border-[1px] border-solid border-whitesmoke mq450:gap-[1.5rem] ${className}`}
      >
        <blockquote className="m-0 w-[21.331rem] relative leading-[150%] font-medium flex items-center max-w-full mq450:text-[1rem] mq450:leading-[1.5rem]">
          {aTerrificPieceOfPraise}
        </blockquote>
        <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
          <img
            className="h-[2.813rem] w-[2.813rem] relative rounded-[50%] object-contain"
            loading="lazy"
            alt=""
            src={avatar}
          />
          <div className="flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="relative leading-[150%] font-medium inline-block min-w-[2.813rem]">
              Name
            </div>
            <div className="relative leading-[150%] font-medium text-gray inline-block min-w-[5.5rem]">
              Description
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CustomerQuote;