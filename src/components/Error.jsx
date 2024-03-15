/** @format */

const Error = ({ formErrors }) => {
  return (
    <ul className="errors">
      {Object.keys(formErrors).map((key, index) => (
        <li className="errors__li" key={index}>
          {formErrors[key] ? `\u{1F62C} ${formErrors[key]}` : null}
        </li>
      ))}
    </ul>
  );
};

export default Error;
