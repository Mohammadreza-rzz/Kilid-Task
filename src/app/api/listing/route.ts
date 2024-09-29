import { NextResponse } from "next/server";
import { ListingData } from "@/mock";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const params = url.searchParams;

  const type = params.get("type");

  if (type !== "buy" && type !== "rent") {
    return NextResponse.json(
      { message: "Invalid type parameter. Must be 'buy' or 'rent'." },
      { status: 400 }
    );
  }

  const filteredListings = ListingData.filter(
    (listing) => listing.type === type
  );

  return NextResponse.json(filteredListings);
}
