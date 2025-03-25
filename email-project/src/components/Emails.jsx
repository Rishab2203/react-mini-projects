import React, { useEffect, useState } from "react";
import "../index.css";
import Email from "./Email";
import { timeStampToDateAndTime } from "../utils/utils";

const Emails = ({ data }) => {
  const [emailBody, setEmailBody] = useState("");
  const [showMail, setShowEmail] = useState(false);
  const [email, setEmail] = useState({});
  const [loading, setLoading] = useState(false);

  const handleEmailClick = (mail) => {
    setEmail(mail);
    setShowEmail(true);
  };
  useEffect(() => {
    async function fetchEmailBody() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://flipkart-email-mock.vercel.app/?id=${email.id}`
        );
        const result = await response.json();
        setEmailBody(result.body);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEmailBody();
  }, [email]);
  return (
    <main className="flex items-center gap-11 ">
      <div className=" w-full overflow-auto  h-[90vh] min-w-[35vw]">
        {data.map((mail, index) => (
          <Email mail={mail} handelClick={() => handleEmailClick(mail)} />
        ))}
      </div>
      {showMail && (
        <div className="bg-white  p-6 px-12 h-[90vh] min-w-[60vw]  flex gap-8  border-2 border-[#CFD2DC]  rounded-md">
          <span className=" flex justify-center items-center   h-[50px] rounded-[50%] bg-[#E54065]  text-white text-2xl p-2 ">
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
              <button className="bg-[#E54065] rounded-xl text-white h-fit px-2 py-1 cursor-pointer">
                Mark as favourite
              </button>
            </div>
            {loading ? (
              <div className="">Loading....</div>
            ) : (
              <p
                className="mt-6 text-[#7e7983] whitespace-normal leading-relaxed "
                dangerouslySetInnerHTML={{ __html: emailBody }}
              ></p>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Emails;
