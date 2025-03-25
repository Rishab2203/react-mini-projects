import React, { useEffect, useState } from "react";
import "../index.css";
import Email from "./Email";

import EmailBody from "./EmailBody";

const Emails = ({ data, setRead, setShowEmail, showMail, setFavourite }) => {
  const [email, setEmail] = useState({});

  const handleEmailClick = (mail) => {
    setEmail(mail);
    setShowEmail(true);
    setRead((prev) => {
      if (!prev.includes(mail)) {
        return [...prev, mail];
      }
      return prev;
    });
  };

  const handleFavouriteClick = () => {
    setFavourite((prev) => {
      if (!prev.includes(email)) {
        return [...prev, email];
      }
      return prev;
    });
  };

  return (
    <main className="flex items-center gap-11 ">
      <div className=" w-full overflow-auto  h-[90vh] min-w-[35vw]">
        {data.map((mail, index) => (
          <Email
            mail={mail}
            handelClick={() => handleEmailClick(mail)}
            email={email}
          />
        ))}
      </div>
      {showMail && (
        <EmailBody email={email} handleFavouriteClick={handleFavouriteClick} />
      )}
    </main>
  );
};

export default Emails;
