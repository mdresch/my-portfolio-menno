import { NextRequest, NextResponse } from "next/server";

// In-memory storage for networking data
const networkingData = new Map();

interface NetworkingContact {
  id: string;
  userId: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  connectionType: "linkedin" | "email" | "referral" | "event";
  status: "pending" | "connected" | "declined";
  notes: string;
  lastContact: string;
  profileUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const type = searchParams.get('type'); // 'contacts' | 'events' | 'opportunities'

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const userNetworking = networkingData.get(userId) || {
      contacts: [],
      events: [],
      opportunities: []
    };

    if (type) {
      return NextResponse.json(userNetworking[type] || []);
    }

    return NextResponse.json(userNetworking);
  } catch (error) {
    console.error("Error fetching networking data:", error);
    return NextResponse.json(
      { error: "Failed to fetch networking data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, data } = body;

    if (!userId || !type || !data) {
      return NextResponse.json(
        { error: "User ID, type, and data are required" },
        { status: 400 }
      );
    }

    const userNetworking = networkingData.get(userId) || {
      contacts: [],
      events: [],
      opportunities: []
    };

    const now = new Date().toISOString();

    if (type === 'contact') {
      const newContact: NetworkingContact = {
        id: Date.now().toString(),
        userId,
        ...data,
        createdAt: now,
        updatedAt: now
      };

      userNetworking.contacts.push(newContact);
      networkingData.set(userId, userNetworking);

      return NextResponse.json({
        message: "Contact added successfully",
        contact: newContact
      });
    }

    if (type === 'event') {
      const newEvent = {
        id: Date.now().toString(),
        userId,
        ...data,
        createdAt: now,
        updatedAt: now
      };

      userNetworking.events.push(newEvent);
      networkingData.set(userId, userNetworking);

      return NextResponse.json({
        message: "Event added successfully",
        event: newEvent
      });
    }

    return NextResponse.json(
      { error: "Invalid type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error adding networking data:", error);
    return NextResponse.json(
      { error: "Failed to add networking data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, type, id, data } = body;

    if (!userId || !type || !id || !data) {
      return NextResponse.json(
        { error: "User ID, type, ID, and data are required" },
        { status: 400 }
      );
    }

    const userNetworking = networkingData.get(userId);
    if (!userNetworking) {
      return NextResponse.json(
        { error: "User networking data not found" },
        { status: 404 }
      );
    }

    if (type === 'contact') {
      const contactIndex = userNetworking.contacts.findIndex((c: NetworkingContact) => c.id === id);
      if (contactIndex === -1) {
        return NextResponse.json(
          { error: "Contact not found" },
          { status: 404 }
        );
      }

      userNetworking.contacts[contactIndex] = {
        ...userNetworking.contacts[contactIndex],
        ...data,
        updatedAt: new Date().toISOString()
      };

      networkingData.set(userId, userNetworking);

      return NextResponse.json({
        message: "Contact updated successfully",
        contact: userNetworking.contacts[contactIndex]
      });
    }

    return NextResponse.json(
      { error: "Invalid type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error updating networking data:", error);
    return NextResponse.json(
      { error: "Failed to update networking data" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!userId || !type || !id) {
      return NextResponse.json(
        { error: "User ID, type, and ID are required" },
        { status: 400 }
      );
    }

    const userNetworking = networkingData.get(userId);
    if (!userNetworking) {
      return NextResponse.json(
        { error: "User networking data not found" },
        { status: 404 }
      );
    }

    if (type === 'contact') {
      const contactIndex = userNetworking.contacts.findIndex((c: NetworkingContact) => c.id === id);
      if (contactIndex === -1) {
        return NextResponse.json(
          { error: "Contact not found" },
          { status: 404 }
        );
      }

      userNetworking.contacts.splice(contactIndex, 1);
      networkingData.set(userId, userNetworking);

      return NextResponse.json({
        message: "Contact deleted successfully"
      });
    }

    return NextResponse.json(
      { error: "Invalid type" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error deleting networking data:", error);
    return NextResponse.json(
      { error: "Failed to delete networking data" },
      { status: 500 }
    );
  }
}