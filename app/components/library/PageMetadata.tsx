import { manifest } from "~/data";
import { routePaths } from "~/utils";

interface IParams {
  description?: string;
  path?: string;
  title?: string;
}

function PageMetadata({ description, path, title }: IParams) {
  const metaData = {
    description: description ?? manifest.description,
    icon: {
      large: manifest.icons.at(-1)?.src,
      small: manifest.icons.at(0)?.src,
    },
    title: `${manifest.name}${title ? ` - ${title}` : ""}`,
    url: `${manifest.start_url}${path ?? ""}`,
  };

  return (
    <>
      <link rel="apple-touch-icon" href={metaData.icon.small} />
      <link rel="icon" type="image/png" href={metaData.icon.small} />
      <link
        rel="manifest"
        href={`${manifest.start_url}${routePaths.manifest()}`}
      />
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.description} />
      <meta name="theme-color" content={manifest.theme_color} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.icon.large} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:url" content={metaData.url} />
    </>
  );
}

export default PageMetadata;
