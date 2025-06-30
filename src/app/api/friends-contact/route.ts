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

export async function POST(request: NextRequest) {
  try {
    const data: FriendContactData = await request.json();

    // Validate required fields
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

    // Here you would typically save to a database
    // For now, we'll log it (in production, use proper logging)
    console.log('Friend Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      alienName: data.alienName,
      age: data.age,
      // Don't log sensitive personal information in production
    });

    // In a real application, you might:
    // 1. Save to a database
    // 2. Send an email notification to Menno
    // 3. Store in a secure location
    // 4. Send a confirmation email to the friend

    return NextResponse.json(
      { 
        message: 'Thank you for sharing your cosmic details! Your intergalactic friend profile has been received.',
        success: true 
      },
      { status: 200 }
    );

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
    version: '1.0.0'
  });
}
