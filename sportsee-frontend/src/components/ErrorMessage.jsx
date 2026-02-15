/**
 * ErrorMessage component that displays an error message with a navigation link.
 */

import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Renders an error message with a text and a link.
 *
 * @param {Object} props
 * @param {string} props.message - Message displayed on the error page.
 * @param {string} props.textAlert - Text displayed inside the navigation link.
 * @param {string} props.link - Destination path for the navigation link.
 * @returns {JSX.Element}
 */
const ErrorMessage = ({ message, textAlert, link }) => (
  <section className="error">
    <h1>404</h1>
    <p>{message}</p>
    <NavLink to={link}>{textAlert}</NavLink>
  </section>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  textAlert: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ErrorMessage;

