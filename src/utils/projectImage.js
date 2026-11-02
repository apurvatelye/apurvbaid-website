/**
 * Normalizes image values from the sample data and future API responses.
 * Supports remote URLs, local paths, complete data URIs, and raw Base64.
 */
export function resolveProjectImage(value) {
  if (typeof value !== "string") return "";

  let image = value.trim();
  if (!image) return "";

  // Recover URLs accidentally wrapped in a Base64 prefix by older code/API data.
  const malformedDataUrl = image.match(/^data:image\/[^;]+;base64,(https?:\/\/.*)$/i);
  if (malformedDataUrl) return malformedDataUrl[1];

  // A valid, complete data URI must be preserved.
  if (/^data:image\/[a-z0-9.+-]+;base64,/i.test(image)) return image;

  // Remote URLs, local public paths, relative paths, and blob URLs are not Base64.
  if (/^(https?:\/\/|\/|\.\.?\/|blob:)/i.test(image)) return image;

  // Raw Base64 returned by the API.
  const mimeType = image.startsWith("iVBOR")
    ? "image/png"
    : image.startsWith("UklGR")
      ? "image/webp"
      : image.startsWith("R0lGOD")
        ? "image/gif"
        : "image/jpeg";

  return `data:${mimeType};base64,${image}`;
}
