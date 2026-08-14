const Card = ({ children, reverse }) => {
  return (
    <div
   className={`bg-white rounded-2xl p-4 md:p-8 my-2 relative border w-[90%] md:w-6/12 flex justify-center items-center box-border ${
  reverse && "bg-blue-900 text-amber-50"
}`}
    >
      {children}
    </div>
  );
};
Card.defaultProps = { reverse: false };

export default Card;
