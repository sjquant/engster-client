export default function () {
    if (!process.server) {
        document.querySelector("#body-container").scrollTop = 0
    }
}
