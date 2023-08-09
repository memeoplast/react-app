import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return dom("div", {
    id: "error-page"
  }, dom("h1", null, "Oops!"), dom("p", null, "Sorry, an unexpected error has occurred."), dom("p", null, dom("i", null, error.statusText || error.message)));
}