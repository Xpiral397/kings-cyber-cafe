export function Marix(list: string[]) {
    let i = 0;
    while(i < list.length) {
        list[Math.floor(Math.random() * list.length - 1)] = list[Math.floor(Math.random() * list.length - 1)]
        i++;
    }
}
