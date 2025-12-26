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

    // Validate type parameter
    const validTypes = ['contacts', 'events', 'opportunities'];
    if (type && !validTypes.includes(type)) {
      return NextResponse.json(
        { error: "Invalid type parameter" },
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

    // Normalize type (handle both singular and plural)
    const normalizedType = type === 'contact' || type === 'contacts' ? 'contact' : 
                          type === 'event' || type === 'events' ? 'event' : type;

    if (normalizedType === 'contact') {
      // Validate and sanitize input data
      const sanitizedData = {
        name: data.name?.toString().trim().slice(0, 100) || '',
        title: data.title?.toString().trim().slice(0, 100) || '',
        company: data.company?.toString().trim().slice(0, 100) || '',
        industry: data.industry?.toString().trim().slice(0, 50) || '',
        location: data.location?.toString().trim().slice(0, 100) || '',
        connectionType: ['linkedin', 'email', 'referral', 'event'].includes(data.connectionType) ? data.connectionType : 'linkedin',
        status: ['pending', 'connected', 'declined'].includes(data.status) ? data.status : 'pending',
        notes: data.notes?.toString().trim().slice(0, 500) || '',
        lastContact: data.lastContact || now,
        profileUrl: data.profileUrl?.toString().trim().slice(0, 200) || undefined
      };

      // Validate URL if provided
      if (sanitizedData.profileUrl) {
        try {
          new URL(sanitizedData.profileUrl);
        } catch {
          sanitizedData.profileUrl = undefined;
        }
      }

      const newContact: NetworkingContact = {
        id: Date.now().toString(),
        userId: userId.toString().trim().slice(0, 100),
        ...sanitizedData,
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

    if (normalizedType === 'event') {
      // Validate and sanitize event data
      const sanitizedEventData = {
        title: data.title?.toString().trim().slice(0, 200) || '',
        type: ['virtual', 'in-person', 'hybrid'].includes(data.type) ? data.type : 'virtual',
        date: data.date?.toString().slice(0, 10) || '',
        time: data.time?.toString().slice(0, 8) || '',
        location: data.location?.toString().trim().slice(0, 200) || '',
        industry: Array.isArray(data.industry) ? data.industry.slice(0, 10).map((i: any) => i?.toString().trim().slice(0, 50) || '') : [],
        description: data.description?.toString().trim().slice(0, 1000) || '',
        attendees: Math.max(0, Math.min(10000, Number(data.attendees) || 0)),
        registrationUrl: data.registrationUrl?.toString().trim().slice(0, 300) || ''
      };

      // Validate registration URL if provided
      if (sanitizedEventData.registrationUrl) {
        try {
          new URL(sanitizedEventData.registrationUrl);
        } catch {
          sanitizedEventData.registrationUrl = '';
        }
      }

      const newEvent = {
        id: Date.now().toString(),
        userId: userId.toString().trim().slice(0, 100),
        ...sanitizedEventData,
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

    // Normalize type (handle both singular and plural)
    const normalizedType = type === 'contact' || type === 'contacts' ? 'contact' : 
                          type === 'event' || type === 'events' ? 'event' : type;

    if (normalizedType === 'contact') {
      const contactIndex = userNetworking.contacts.findIndex((c: NetworkingContact) => c.id === id);
      if (contactIndex === -1) {
        return NextResponse.json(
          { error: "Contact not found" },
          { status: 404 }
        );
      }

      // Sanitize update data
      const sanitizedUpdates = {};
      if (data.name !== undefined) sanitizedUpdates.name = data.name?.toString().trim().slice(0, 100) || '';
      if (data.title !== undefined) sanitizedUpdates.title = data.title?.toString().trim().slice(0, 100) || '';
      if (data.company !== undefined) sanitizedUpdates.company = data.company?.toString().trim().slice(0, 100) || '';
      if (data.industry !== undefined) sanitizedUpdates.industry = data.industry?.toString().trim().slice(0, 50) || '';
      if (data.location !== undefined) sanitizedUpdates.location = data.location?.toString().trim().slice(0, 100) || '';
      if (data.connectionType !== undefined) sanitizedUpdates.connectionType = ['linkedin', 'email', 'referral', 'event'].includes(data.connectionType) ? data.connectionType : 'linkedin';
      if (data.status !== undefined) sanitizedUpdates.status = ['pending', 'connected', 'declined'].includes(data.status) ? data.status : 'pending';
      if (data.notes !== undefined) sanitizedUpdates.notes = data.notes?.toString().trim().slice(0, 500) || '';
      if (data.profileUrl !== undefined) {
        let validUrl = data.profileUrl?.toString().trim().slice(0, 200) || '';
        if (validUrl) {
          try {
            new URL(validUrl);
            sanitizedUpdates.profileUrl = validUrl;
          } catch {
            sanitizedUpdates.profileUrl = undefined;
          }
        } else {
          sanitizedUpdates.profileUrl = undefined;
        }
      }

      userNetworking.contacts[contactIndex] = {
        ...userNetworking.contacts[contactIndex],
        ...sanitizedUpdates,
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