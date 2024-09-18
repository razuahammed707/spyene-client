import { getImage } from "@/lib/getImage";
import Image from "next/image";

const DynamicImage = async ({ url, alt }) => {
  const { base64, img } = await getImage(url);
  return (
    <Image
      {...img}
      // src={`${config.api}${service.attributes.Thumbnail.data.attributes.url}`} was for strapi images
      placeholder="blur"
      blurDataURL={base64}
      alt={alt}
      width={179.2}
      height={160}
      style={{ objectFit: "cover", height: "160px", width: "100%" }}
    />
  );
};

export default DynamicImage;
