/**
 * Greeting component that displays a welcome message with the user's first name.
 */

import PropTypes from "prop-types";

/**
 * Displays a greeting message using the user's first name.
 *
 * @param {Object} props
 * @param {Object} props.userInfos - User information object.
 * @param {string} props.userInfos.firstName - The user's first name.
 * @returns {JSX.Element}
 */
const Greeting = ({ userInfos = { firstName: "Unknown" } }) => {
  // Extracts the first name from user information.
  const { firstName } = userInfos ?? {};

  return (
    <div className="greeting">
      <h1>
        Hi <span>{firstName}</span>
      </h1>
      <p>Congratulations! You reached yesterday’s goal! 👏</p>
    </div>
  );
};

Greeting.propTypes = {
  userInfos: PropTypes.shape({
    firstName: PropTypes.string,
  }),
};

export default Greeting;

