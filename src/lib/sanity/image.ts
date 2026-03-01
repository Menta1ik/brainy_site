import { createImageUrlBuilder } from "@sanity/image-url";

type SanityImageSource = Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0];
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
