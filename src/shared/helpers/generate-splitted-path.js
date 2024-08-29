const isFormatted = (str) => {
  return (
    !str.includes("-") &&
    str
      .split(" ")
      .every((word) => word.charAt(0) === word.charAt(0).toUpperCase())
  );
};

const formatUrlString = (str) => {
  if (isFormatted(str)) {
    return str;
  }
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export const generateSplittedPath = (url_string) => {
  return url_string
    ?.split("/")
    ?.filter((crumb) => crumb !== "")
    ?.map((string) => formatUrlString(string));
};
