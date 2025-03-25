import React, { useEffect, useState } from "react";
import "../index.css";
import Email from "./Email";

import EmailBody from "./EmailBody";

const Emails = ({ data }) => {
  const [showMail, setShowEmail] = useState(false);
  const [email, setEmail] = useState({});

  const handleEmailClick = (mail) => {
    setEmail(mail);
    setShowEmail(true);
  };

  return (
    <main className="flex items-center gap-11 ">
      <div className=" w-full overflow-auto  h-[90vh] min-w-[35vw]">
        {data.map((mail, index) => (
          <Email mail={mail} handelClick={() => handleEmailClick(mail)} />
        ))}
      </div>
      {showMail && <EmailBody email={email} />}
    </main>
  );
};

export default Emails;
