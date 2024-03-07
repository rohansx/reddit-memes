import axios from "axios";

const API_URL = "https://www.reddit.com/r/memes.json";

interface MemePost {
  data: {
    id: string;
    title: string;
    url: string;
    permalink: string;
  };
}

export const getMeme = async () => {
  try {
    const response = await axios.get(API_URL);
    // Process the response to extract relevant meme information
    const memes = response.data.data.children.map(
      (child: { data: MemePost["data"] }) => ({
        id: child.data.id,
        name: child.data.title,
        imageUrl: child.data.url, // Direct link to the meme image
      })
    );
    return memes; // Returns an array of simplified meme objects
  } catch (error: any) {
    console.log("Error is ", error.message);
    return []; // For simplicity, return an empty array in case of error
  }
};
