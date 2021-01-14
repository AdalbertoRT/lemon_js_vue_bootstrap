export default function baseURL() {
    const url = window.location.href;
    let array_url = url.split("/");
    array_url.pop();
    let novoUrl = array_url.join("/");
    return novoUrl;
}

