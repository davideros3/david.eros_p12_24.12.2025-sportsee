/**
 * ErrorMessage component that displays an error message with a navigation link.
 */

import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Renders an error message with a text and a link.
 *
 * @returns {JSX.Element}
 */
const ErrorMessage = ({ message, textAlert, link }) => (
  <section className="error">
    <h1>404</h1>
    <p>{message}</p>
    <NavLink to={link}>{textAlert}</NavLink>
  </section>
);

export default ErrorMessage;
