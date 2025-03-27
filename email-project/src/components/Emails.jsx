import React, { useEffect, useState } from "react";
import "../index.css";
import Email from "./Email";

import EmailBody from "./EmailBody";

const Emails = ({
  data,
  setFavourite,
  email,
  setEmail,
  favourite,
  setData,
}) => {
  const handleEmailClick = (mail) => {
    setEmail(mail);

    setData((prev) => {
      const updated = prev.map((ele) => {
        if (ele.id === mail.id) {
          ele.read = true;
        }
        return ele;
      });
      return updated;
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
    <main className="flex items-center gap-8 mt-1">
      <div className=" w-full overflow-auto  h-[90vh] min-w-[35vw]">
        {data.map((mail) => (
          <Email
            mail={mail}
            handelClick={() => handleEmailClick(mail)}
            email={email}
            favourite={favourite}
          />
        ))}
      </div>
      {email && (
        <EmailBody email={email} handleFavouriteClick={handleFavouriteClick} />
      )}
    </main>
  );
};

export default Emails;
