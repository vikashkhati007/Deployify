import { NextRequest, NextResponse } from "next/server";
import cors from "cors";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const searchParams = req.nextUrl.searchParams.get("github");
  return NextResponse.json(searchParams, { status: 200 });
};
