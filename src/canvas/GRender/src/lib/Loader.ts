

export default class Loader {
    constructor(){}

    public loadImg(url: string): Promise<HTMLImageElement> {
        const imgEl = document.createElement('img')
        imgEl.src = url
        return new Promise((resolve, rej) => {
            imgEl.onload = function () {
                resolve(imgEl)
            }
        })
    }
}
