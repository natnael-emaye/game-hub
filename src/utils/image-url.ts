export default function getOptimizedImage(image: string) {
    const url = image.split("media/");
    const firsturl = url[0] + "media/";
    return firsturl + "crop/600/400/" + url[1];
}

