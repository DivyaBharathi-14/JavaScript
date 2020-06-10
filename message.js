
const message = (name) => {
    if (name == "ping") {
        return "pong";
    } else if (name == "beep") {
        return "boop";
    } else {
        return "ping pong! beep boop";
    }
}
module.exports = message;