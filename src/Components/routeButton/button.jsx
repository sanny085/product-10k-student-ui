import Link from "next/link";
import Image from "next/image";

export default function ButtonComponent(props) {
  const { route, img, text, bg } = props;
  const bgColor = {backgroundColor: bg};
  return (
    <Link
      href={route}
      style={bgColor}
      className={`uppercase sm:mx-auto mb-[24px] mt-[28px] flex ml-[30px] justify-center sm:w-[230px] md:w-[297px] h-[44px] p-[10px] gap-x-[10px] rounded-lg items-center text-[10px] font-semibold text-white`}
    >
      <Image width={24} height={24} draggable="false" src={img} alt="" />
      <p className="tracking-[1px]">{text}</p>
    </Link>
  );
}
