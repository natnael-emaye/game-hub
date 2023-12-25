import noImage from "../assets/no-image.webp"

export default function getOptimizedImage(image: string) {
    if(!image) return noImage
    const url = image.split("media/");
    const firsturl = url[0] + "media/";
    return firsturl + "crop/600/400/" + url[1];
}

