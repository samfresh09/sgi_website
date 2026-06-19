import type { RouteRecord } from "vite-react-ssg";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { SERVICES } from "@/data/services";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      {
        path: "services/:slug",
        element: <ServiceDetail />,
        // Pre-render one static HTML page per service.
        getStaticPaths: () => SERVICES.map((s) => `services/${s.slug}`),
      },
      { path: "a-propos", element: <About /> },
      { path: "contact", element: <Contact /> },
      // Explicit route so a static /404 page is generated (copied to 404.html).
      { path: "404", element: <NotFound /> },
      // Client-side catch-all.
      { path: "*", element: <NotFound /> },
    ],
  },
];
