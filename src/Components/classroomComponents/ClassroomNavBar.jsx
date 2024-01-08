import { BellIcon } from "@/shared/svgIcons/classroom";
import Image from "next/image";

export default function ClassroomNavBar() {
  return (
    <div className="right-[60px] gap-[30px] items-center absolute flex">
      <BellIcon />
      <Image alt="" width={38} height={38} src="/classroom_Images/DP.png" />
    </div>
  );
}
