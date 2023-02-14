function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}
loadScript("http://javascript.info/callback", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
