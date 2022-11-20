
export const getGallery = async () => {
    // const url = process.env.NODE_ENV === "development" ? process.env.DEV_URL : process.env.PROD_URL;
    const response = await fetch("http://localhost:3001/api/gallery/");
    const data = await response.json();
    return data;
}