import type { NextPage } from "next";
import { Button } from "@mui/material";
import FrameComponent from "../components/frame-component";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[3.5rem] px-[5rem] pb-[3rem] box-border gap-[7.125rem] leading-[normal] tracking-[normal] mq450:gap-[1.75rem] mq975:gap-[3.563rem] mq975:pl-[2.5rem] mq975:pr-[2.5rem] mq975:box-border">
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.312rem] pl-[0rem] box-border max-w-full text-center text-[4rem] text-black font-small-text">
        <div className="w-[53.563rem] flex flex-col items-start justify-start p-[0.625rem] box-border max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] font-bold font-inherit mq450:text-[2.375rem] mq975:text-[3.188rem]">
              Landing page title
            </h1>
            <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[150%] font-normal font-inherit text-gray mq450:text-[1.188rem] mq450:leading-[1.813rem]">
              And a subheading describing your site, too
            </h3>
            <Button
              className="w-[6.188rem] h-[3.25rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)]"
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
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border max-w-full">
        <img
          className="h-[40rem] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/image--drag-in-to-fill@2x.png"
        />
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
