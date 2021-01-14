export default function (txt) {
    let item = txt.toLowerCase();
    let cap = txt.toUpperCase();
    item = item.substr(1);
    cap = cap.split('', 1);
    return cap + item;
}