/**
 * Greeting component that displays a welcome message with the user's first name.
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

export default Greeting;
