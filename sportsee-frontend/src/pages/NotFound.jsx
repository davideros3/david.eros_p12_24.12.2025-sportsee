/**
 * Error page component that displays a 404 error message.
 */

import React from "react";
import ErrorMessage from "../components/ErrorMessage";

/**
 * Renders the error page content.
 *
 * @returns {JSX.Element}
 */
const Error = () => {
  return (
    // Main content wrapper for the error page.
    <div id="content">
      {/* Container used to center the error message. */}
      <div className="container">
        {/* Displays the error message with a link back to the home page. */}
        <ErrorMessage
          message="Oops! It looks like this page doesn’t exist."
          textAlert="Go back to home page"
          link="/"
        />
      </div>
    </div>
  );
};

export default Error;
