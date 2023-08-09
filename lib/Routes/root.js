export default function Root() {
  return dom("div", {
    className: "block__content"
  }, dom("h1", {
    className: "heading__primary"
  }, "I am Root"));
}