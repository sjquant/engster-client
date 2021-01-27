export default function() {
  if (!process.server) {
    let element = document.querySelector("#body-container");
    if (element) {
      element.scrollTop = 0;
    }
  }
}
