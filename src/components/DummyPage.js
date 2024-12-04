import React from "react";

const DummyPage = ({ title }) => {
  return (
    <div className="dummy-page">
      <h1>{title} Page</h1>
      <p>This is a placeholder page for {title}.</p>
    </div>
  );
};

export default DummyPage;
