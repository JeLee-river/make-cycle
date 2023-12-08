import connectDB from '@/libs/db/connectDB';
import { recycleInfoDAO } from '@/libs/db/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await connectDB();

  const recycleResource = await request.json();
  const className = await recycleInfoDAO.addRecycleInfo(recycleResource);
  return NextResponse.json(
    { message: `Add ${className} recycle method` },
    { status: 201 }
  );
}

export async function GET(request: NextRequest) {
  await connectDB();

  const { className } = await request.json();
  const recycleResource = await recycleInfoDAO.findRecycleInfo(className);
  if (recycleResource === null) {
    return NextResponse.json(
      { error: `Cannot find ${className} recycle method` },
      { status: 404 }
    );
  }

  return NextResponse.json(recycleResource);
}
