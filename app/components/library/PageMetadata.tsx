import { manifest } from "~/routes/webAppManifest";

function PageMetadata() {
  const description = manifest.description;
  const icon = {
    large: manifest.icons.at(-1)?.src,
    small: manifest.icons.at(0)?.src,
  };
  const title = manifest.name;
  const url = manifest.start_url;
  return (
    <>
      <link rel="apple-touch-icon" href={icon.small} />
      <link rel="icon" type="image/png" href={icon.small} />
      <link rel="manifest" href={`${url}manifest.json`} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={manifest.theme_color} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={icon.large} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
    </>
  );
}

export default PageMetadata;
