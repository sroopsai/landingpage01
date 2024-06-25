import type { NextPage } from "next";
import { memo } from "react";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = memo(({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-start justify-start gap-[2.875rem] max-w-full text-left text-[1.5rem] text-black font-small-text mq725:gap-[1.438rem] ${className}`}
    >
      <div className="self-stretch h-[0.063rem] relative box-border border-t-[1px] border-solid border-gainsboro" />
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq1000:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[5.5rem]">
          <h3 className="m-0 relative text-inherit leading-[150%] font-normal font-inherit inline-block min-w-[7.063rem] mq450:text-[1.188rem] mq450:leading-[1.813rem]">
            Site name
          </h3>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <img
              className="h-[2.5rem] w-[2.5rem] relative rounded object-cover min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/buttons--icon@2x.png"
            />
            <img
              className="h-[2.5rem] w-[2.5rem] relative rounded object-cover min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/buttons--icon-1@2x.png"
            />
            <img
              className="h-[2.5rem] w-[2.5rem] relative rounded object-cover min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/buttons--icon-2@2x.png"
            />
            <img
              className="h-[2.5rem] w-[2.5rem] relative rounded object-cover min-h-[2.5rem]"
              loading="lazy"
              alt=""
              src="/buttons--icon-3@2x.png"
            />
          </div>
        </div>
        <div className="w-[39rem] flex flex-row items-start justify-start gap-[1.968rem] max-w-full text-[1rem] text-darkslategray mq725:flex-wrap mq725:gap-[1rem]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[8.75rem]">
            <div className="self-stretch relative leading-[150%] font-medium text-black">
              Topic
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[8.75rem]">
            <div className="self-stretch relative leading-[150%] font-medium text-black">
              Topic
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] min-w-[8.75rem]">
            <div className="self-stretch relative leading-[150%] font-medium text-black">
              Topic
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
            <div className="self-stretch relative leading-[150%] font-medium">
              Page
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;