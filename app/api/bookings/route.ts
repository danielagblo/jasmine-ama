import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Booking from "@/models/Booking";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    
    const newBooking = await Booking.create(data);
    
    return NextResponse.json({ success: true, booking: newBooking }, { status: 201 });
  } catch (error) {
    console.error("Booking Error:", error);
    return NextResponse.json({ success: false, error: "Failed to create booking" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const bookings = await Booking.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch bookings" }, { status: 500 });
  }
}
