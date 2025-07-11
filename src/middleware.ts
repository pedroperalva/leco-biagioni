// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing"; // or wherever your file is

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
