import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogTitle,
  ogDescription,
  ogType = "website",
}: SEOHeadProps) => {
  useEffect(() => {
    const baseUrl = "https://silabele.com";

    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", `${baseUrl}${canonicalPath}`, true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${baseUrl}${canonicalPath}`);
  }, [title, description, keywords, canonicalPath, ogTitle, ogDescription, ogType]);

  return null;
};
