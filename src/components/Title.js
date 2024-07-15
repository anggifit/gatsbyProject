import * as React from "react";

const Title = ({ pageTitle, children }) => {
  return (
      <section>
        <h1 className="text-3xl text-pink-500">{pageTitle}</h1>
        {children}
      </section>

  );
};

export default Title;
