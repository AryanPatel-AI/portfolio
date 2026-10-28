export interface OptimizedImageProps {
  src: string;
  alt: string;
  sizes: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

/**
 * Returns optimized image attributes for responsive photography exhibits.
 * Configures appropriate viewport sizes to prevent downloading over-dimensioned assets.
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  layout: "gallery" | "hero" | "thumbnail" = "gallery"
): OptimizedImageProps {
  let sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

  if (layout === "hero") {
    sizes = "100vw";
  } else if (layout === "thumbnail") {
    sizes = "(max-width: 640px) 50vw, 20vw";
  }

  return {
    src,
    alt,
    sizes,
    loading: layout === "hero" ? "eager" : "lazy",
    priority: layout === "hero",
  };
}
