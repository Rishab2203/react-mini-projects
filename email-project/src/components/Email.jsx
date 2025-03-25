import React from "react";
import { timeStampToDateAndTime } from "../utils/utils";

const Email = ({ mail, handelClick, email, favourite }) => {
  return (
    <div
      onClick={handelClick}
      className={`flex gap-5 border-2 border-[#CFD2DC] mb-4 p-3 px-6 rounded-lg cursor-pointer bg-white ${
        email.id === mail.id ? "border-[#E54065]" : ""
      }`}
      key={`email-${mail.id}`}
      id={mail.id}
    >
      <span className=" flex justify-center items-center  w-[50px] h-[50px] rounded-[50%] bg-[#E54065]  text-white text-2xl p-2 ">
        {mail["from"]["name"].slice(0, 1).toUpperCase()}
      </span>
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-2 ">
          <span className="text-[#7e7983]">From: </span>
          <span>
            {mail["from"]["name"]} {mail["from"]["email"]}
          </span>
        </div>
        <div className="flex gap-2 ">
          <span className="text-[#7e7983]">Subject: </span>
          <span className="truncate">{mail["subject"]}</span>
        </div>
        <span className="text-[#7e7983] text-overflow-ellipsis ">
          {mail["short_description"]}
        </span>
        <div className="flex gap-6">
          <span className="text-[#7e7983]">
            {timeStampToDateAndTime(mail["date"])}
          </span>
          {favourite.includes(mail) && (
            <span className=" text-[#E54065]">Favourite</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
