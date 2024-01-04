"use client";
import DummyModal from "@/components/Modals/DummyModal";
import Link from "next/link";

const CancelModalContent = ({ modalStatus, handleModal }) => {
  return (
    <DummyModal modalStatus={modalStatus} handleModal={handleModal}>
      <div className="flex flex-col justify-center items-center h-[280px] sm:h-[322px] sm:w-[575px] md:w-[550px]">
        <div>
          <h3 className="text-2xl font-semibold text-orange-500">
            Do you really want to cancel the exam ?
          </h3>
        </div>

        <div className="space-x-10 space-y-5 text-white">
          <Link href="/">
            <button
              onClick={() => {
                handleModal();
              }}
              className="rounded-2xl bg-dodgerblue shadow-[0px_2px_5px_rgba(116,_116,_116,_0.25)] py-3 px-6"
            >
              <span>Submit & Exit</span>
            </button>
          </Link>

          <button
            onClick={() => {
              handleModal();
            }}
            className="rounded-2xl bg-red-600 shadow-[0px_2px_5px_rgba(116,_116,_116,_0.25)] py-3 px-6"
          >
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </DummyModal>
  );
};

export default CancelModalContent;
