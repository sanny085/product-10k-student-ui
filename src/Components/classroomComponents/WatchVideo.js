import { LeftArrow, VideoIcon } from "@/shared/svgIcons/classroom";
import Link from "next/link";
export default function WatchVideo() {
  return (
    <div className="flex mt-[70px] gap-[30px]">
      <div className="rounded-[16px] overflow-hidden">
        <div className="bg-[#FF8541] h-[30rem] text-white  flex flex-col gap-[30px]">
          <div className="flex p-[20px] gap-[10px]">
            <LeftArrow />
            <p className="font-[700] text-[16px]">Go back</p>
          </div>
          <div className="font-[700] flex flex-col gap-[10px] pl-[40px] pr-[20px]">
            <p className="text-[24px]  ">Ordered Lists</p>
            <p>
              Estimated time: <span>10mins</span>
            </p>
            <p>
              Deadline: <span>25/06/23</span>
            </p>
            <p className="flex gap-[5px]">
              Type: <VideoIcon fill="white" />
            </p>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center font-bold text-[#FF8541] p-[30px] h-[5rem]">
          +50 Points
        </div>
      </div>
      <div className="flex flex-col  gap-[30px]">
        <div className="h-[320px] overflow-hidden rounded-[16px]">
          <iframe
            width="640"
            height="320"
            src="https://www.youtube.com/embed/bu7oR_waNEE?si=qEnHXDopsZ6lANJp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="bg-white w-[640px] rounded-[16px] flex flex-col gap-[20px] p-[20px]">
          <div className="text-[#FF8541]">
            <p className="font-bold mb-[5px]">Notes and Links</p>
            <Link
              target="_blank"
              href="https://javascript.info/first-steps"
              className="underline"
            >
              <p>https://javascript.info/first-steps</p>
            </Link>
            <Link
              target="_blank"
              href="https://javascript.info/code-quality"
              className="underline"
            >
              <p> https://javascript.info/code-quality</p>
            </Link>
          </div>
          <p>
            Today, JavaScript can execute not only in the browser, but also on
            the server, or actually on any device that has a special program
            called the JavaScript engine. The browser has an embedded engine
            sometimes called a “JavaScript virtual machine”.
          </p>
        </div>
      </div>
    </div>
  );
}
