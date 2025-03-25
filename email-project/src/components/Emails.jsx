import React from "react";
import "../index.css";
import { timeStampToDateAndTime } from "../utils/utils";

const Emails = ({ data }) => {
  return (
    <div>
      {data.map((mail, index) => {
        return (
          <div
            className="flex gap-5 border-2 border-[#CFD2DC] my-3 p-3 px-6 rounded-lg "
            key={`email-${mail.id}`}
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
                <span>{mail["subject"]}</span>
              </div>
              <span className="text-[#7e7983]">
                {mail["short_description"]}
              </span>
              <span className="text-[#7e7983]">
                {timeStampToDateAndTime(mail["date"])}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Emails;
