import { headers } from "next/headers";

export async function getData(type: string) {
  const host = headers().get("host");
  try {
    const response = await fetch(`http://${host}/api/listing?type=${type}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${type}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
