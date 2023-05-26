const useValidator = (value) => {
  if (typeof value == "number") {
    return "this is a number";
  } else {
    return "not a number";
  }
};

export default useValidator;
