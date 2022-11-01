// 1
document.addEventListener("DOMContentLoaded", function (event) {
  var hash = window.decodeURI(location.hash.replace("#", ""));
  if (hash !== "") {
    var element = document.getElementById(hash);
    if (element) {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var clientTop =
        document.documentElement.clientTop || document.body.clientTop || 0;
      var offset = element.getBoundingClientRect().top + scrollTop - clientTop;
      // Wait for the browser to finish rendering before scrolling.
      setTimeout(function () {
        window.scrollTo(0, offset - 0);
      }, 0);
    }
  }
});

// 2

if (true) {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );
}
if (typeof ga === "function") {
  ga("create", "UA-119972196-1", "auto", {});
}
