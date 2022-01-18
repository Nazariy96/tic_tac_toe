const createElement = (n, c, l, ih = "") => {
  const tag = document.createElement(n);
  tag.className = c;
  if (ih !== "") {
    tag.innerHTML = ih;
  }
  document.querySelector(l).appendChild(tag);
};
createElement("h2", "message", "body");
createElement("div", "grid", "body");
createElement("button", "restart", "body", "RESTART");
