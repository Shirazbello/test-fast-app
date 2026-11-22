import { NextRequest, NextResponse } from "next/server";

// In-memory sample data for quick testing
let items = [
  { id: 1, name: "Edge-Ready Rendering", status: "active" },
  { id: 2, name: "Type-Safe Routing", status: "active" },
];

// GET /api/items?q=edge
export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.toLowerCase();

  const filtered = query
    ? items.filter((item) => item.name.toLowerCase().includes(query))
    : items;

  return NextResponse.json({
    count: filtered.length,
    items: filtered,
  });
}

// POST /api/items
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || typeof body.name !== "string") {
      return NextResponse.json(
        { error: "Field 'name' is required." },
        { status: 400 }
      );
    }

    const newItem = {
      id: Date.now(),
      name: body.name,
      status: body.status ?? "active",
    };

    items.push(newItem);

    return NextResponse.json(newItem, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }
}
