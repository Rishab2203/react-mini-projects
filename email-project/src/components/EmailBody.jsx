import React from "react";
import { useEffect, useState } from "react";
import { timeStampToDateAndTime } from "../utils/utils";
import Loader from "./Loader";

const EmailBody = ({ email, handleFavouriteClick }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailBody, setEmailBody] = useState("");
  useEffect(() => {
    async function fetchEmailBody() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://flipkart-email-mock.vercel.app/?id=${email?.id}`
        );
        const result = await response.json();
        setEmailBody(result.body);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEmailBody();
  }, [email]);
  return (
    <div className="bg-white  p-6 px-12 h-[90vh] min-w-[60vw]  flex gap-8  border-2 border-[#CFD2DC]  rounded-md overflow-y-auto mr-2 ">
      <span className=" flex justify-center items-center min-w-[50px]  h-[50px] rounded-[50%] bg-[#E54065]  text-white text-2xl p-2 ">
        {email["from"]["name"].slice(0, 1).toUpperCase()}
      </span>
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-[#636363]">{email["subject"]}</h1>
            <span className="text-[#7e7983]">
              {timeStampToDateAndTime(email["date"])}
            </span>
          </div>
          <button
            onClick={handleFavouriteClick}
            className="bg-[#E54065] rounded-xl text-white h-fit px-2 py-1 cursor-pointer active:translate-y-1"
          >
            Mark as favourite
          </button>
        </div>
        {loading ? (
          <div className="flex items-center justify-between  translate-x-[100%] translate-y-[100%] ">
            <Loader />
          </div>
        ) : (
          <p
            className="mt-6 text-[#7e7983] whitespace-normal leading-relaxed  "
            dangerouslySetInnerHTML={{ __html: emailBody }}
          ></p>
        )}
      </div>
    </div>
  );
};

export default EmailBody;
