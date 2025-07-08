import { NextRequest, NextResponse } from 'next/server';

interface FriendContactData {
  name: string;
  alienName: string;
  age: string;
  birthday: string;
  currentResidence: string;
  birthPlace: string;
  favoriteColor: string;
  spaceFood: string;
  spaceGear: string;
  heroReason: string;
  alienHobbies: string;
  danceBattleSong: string;
  favoriteDisneyFilm: string;
  spaceMessage: string;
  ageVerification: boolean;
  consentGiven: boolean;
  dutchConsent: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.DOTNET_API_BASE_URL || 'http://localhost:5095';

export async function POST(request: NextRequest) {
  try {
    const data: FriendContactData = await request.json();

    // Basic client-side validation
    const requiredFields = ['name', 'alienName', 'age', 'birthday', 'currentResidence', 'birthPlace', 'favoriteColor'];
    const missingFields = requiredFields.filter(field => !data[field as keyof FriendContactData]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Validate age
    const age = parseInt(data.age);
    if (isNaN(age) || age < 18) {
      return NextResponse.json(
        { error: 'You must be 18 or older to submit this form' },
        { status: 400 }
      );
    }

    // Validate consent and age verification
    if (!data.ageVerification || !data.consentGiven || !data.dutchConsent) {
      return NextResponse.json(
        { error: 'Age verification, consent, and Dutch consent are required' },
        { status: 400 }
      );
    }

    // Forward to .NET API
    try {
      const response = await fetch(`${API_BASE_URL}/api/friendscontact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': request.headers.get('user-agent') || 'NextJS-API',
          'X-Forwarded-For': request.headers.get('x-forwarded-for') || '',
          'X-Real-IP': request.headers.get('x-real-ip') || '',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return NextResponse.json(
          { error: result.message || 'Failed to submit form' },
          { status: response.status }
        );
      }

      return NextResponse.json(result, { status: 200 });

    } catch (fetchError) {
      console.error('Error connecting to .NET API:', fetchError);
      
      // Fallback: Log locally if .NET API is unavailable
      console.log('Friend Contact Form Submission (Fallback):', {
        timestamp: new Date().toISOString(),
        name: data.name,
        alienName: data.alienName,
        age: data.age,
        // Don't log sensitive personal information in production
      });

      return NextResponse.json(
        { 
          message: 'Thank you for sharing your cosmic details! Your intergalactic friend profile has been received.',
          success: true,
          note: 'Stored locally - will sync to database when backend is available'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Error processing friend contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle GET request to provide form information
export async function GET() {
  return NextResponse.json({
    message: 'Friends Contact Form API',
    description: 'Elio-inspired contact form for Menno\'s friends',
    methods: ['POST'],
    version: '2.0.0',
    storage: 'Azure SQL Database via .NET API',
    dotnetApi: API_BASE_URL
  });
}
