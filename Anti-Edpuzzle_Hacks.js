javascript:(function(){
  var csp = "default-src 'self'; script-src 'self';";
  var meta = document.createElement('meta');
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = csp;
  document.getElementsByTagName('head')[0].appendChild(meta);
})();
