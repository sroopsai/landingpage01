import type { NextPage } from "next";
import { Button } from "@mui/material";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between pt-[0rem] px-[0rem] pb-[3.25rem] box-border max-w-full gap-[1.25rem] text-left text-[1.25rem] text-black font-small-text ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
        <div className="relative leading-[150%] font-medium inline-block min-w-[5.938rem] whitespace-nowrap">
          Site name
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[3rem] max-w-full mq450:gap-[1.5rem] mq725:hidden">
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[3.063rem]">
            Page
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[3.063rem]">
            Page
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
          <div className="relative leading-[150%] font-medium inline-block min-w-[3.063rem]">
            Page
          </div>
        </div>
        <Button
          className="h-[3.25rem] w-[6.188rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#000",
            borderRadius: "8px",
            "&:hover": { background: "#000" },
            width: 99,
            height: 52,
          }}
        >
          Button
        </Button>
      </div>
    </header>
  );
};

export default FrameComponent;
