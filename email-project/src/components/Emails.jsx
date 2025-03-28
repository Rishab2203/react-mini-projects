import React, { useEffect, useState } from "react";
import "../index.css";
import Email from "./Email";

import EmailBody from "./EmailBody";

const Emails = ({ fetchedData, filter, email, setEmail, setFetchedData }) => {
  const handleEmailClick = (mail) => {
    setEmail(mail);

    setFetchedData((prev) => {
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
    setEmail((prev) => {
      return { ...prev, isFavourite: !prev.isFavourite };
    });
    setFetchedData((prev) => {
      const updated = prev.map((ele) => {
        if (ele.id === email.id) {
          return { ...ele, isFavourite: !ele.isFavourite };
        }
        return ele;
      });
      return updated;
    });
    if (filter === "favourites") {
      setEmail(null);
    }
  };

  let filteredEmails = fetchedData.filter((ele) => {
    if (filter === "read") {
      return ele.read;
    } else if (filter === "unread") {
      return !ele.read || ele?.id === email?.id;
    } else if (filter === "favourites") {
      return ele.isFavourite;
    } else if (filter === "all") {
      return true;
    }
  });

  return (
    <main className="flex items-center gap-8 mt-1">
      <div className=" w-full overflow-auto  h-[90vh] min-w-[35vw]">
        {filteredEmails.map((mail) => (
          <Email
            mail={mail}
            handelClick={() => handleEmailClick(mail)}
            email={email}
            key={`email-${mail.id}`}
          />
        ))}
      </div>
      {email && (
        <EmailBody
          key={email.id}
          email={email}
          handleFavouriteClick={handleFavouriteClick}
        />
      )}
    </main>
  );
};

export default Emails;
