

const Button = ({ children, type, isDisabled, className }) => {
    if (isDisabled) {
        className="bg-gray-400 text-white px-4 py-2 rounded ml-2  cursor-not-allowed"
    }
    
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={className}
      
    >

        
      {children}
    </button>
  );
};

export default Button;
