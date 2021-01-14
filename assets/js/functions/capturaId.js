export default function capturaId() {
    let url = location.search.slice(1);
    let id = url.split('=');
    id = id[1];
    return id;
}