export const formatCrumb = (crumb, services) => {
  if (crumb === "solar-panels") {
    return crumb
      .split("-")
      .map((str) => str?.[0].toUpperCase() + str?.slice(1))
      .join(" ");
  } else if (crumb?.includes("-")) {
    const service = services.find(
      (service) => service.attributes.Slug === crumb
    );
    return service?.attributes?.Title;
  }
  return crumb?.[0].toUpperCase() + crumb?.slice(1);
};

export const formatTitle = (splitedPath, services) => {
  const lastPath = splitedPath.at(-1);
  if (lastPath === "solar-panels") {
    return lastPath
      .split("-")
      .map((str) => str?.[0].toUpperCase() + str?.slice(1))
      .join(" ");
  } else if (lastPath?.includes("-")) {
    const service = services.find(
      (service) => service.attributes.Slug === lastPath
    );
    return service?.attributes.Title || "";
  }
  return lastPath?.[0].toUpperCase() + lastPath?.slice(1);
};

export const generateSplittedPath = (url_string) => {
  return url_string
    ?.split("/")
    ?.filter((crumb) => crumb !== "")
    ?.map((crum) => crum);
};
