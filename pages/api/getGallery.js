
export const getGallery = async () => {
    // const url = process.env.NODE_ENV === "development" ? process.env.DEV_URL : process.env.PROD_URL;
    const response = await fetch("https://serhiisav.github.io/kmkstroy-nextjs-app-gh-pages/api/gallery");
    const data = await response.json();
    return data;
}