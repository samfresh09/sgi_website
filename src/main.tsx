import "./index.css";
import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";

// Entry for both client hydration and static-site generation.
export const createRoot = ViteReactSSG({ routes });
