import type { APIRoute } from "astro";
import { cities } from "../data/site";

const site = "https://www.skimndipllc.com";
const pages = [
  "/",
  "/services",
  "/chem-plus",
  "/chems-bags-baskets",
  "/chemical-only",
  "/recent-work",
  "/about",
  "/meet-the-team",
  "/service-areas",
  "/contact",
  ...cities.map((c) => `/${c.slug}`),
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site}${p === "/" ? "/" : p}</loc></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
