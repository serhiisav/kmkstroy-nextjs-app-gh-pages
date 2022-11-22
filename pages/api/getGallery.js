
export const getGallery = async () => {
    // const url = process.env.NODE_ENV === "development" ? process.env.DEV_URL : process.env.PROD_URL;
    const response = await fetch("https://github.com/serhiisav/kmkstroy-nextjs-app-gh-pages/blob/main/gallery.json");
    const data = await response.json();
    return { gallery: data };
}