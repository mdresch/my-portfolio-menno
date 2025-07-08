// test-friends-contact-api.js
// Script to test the Friends Contact API integration

const API_BASE_URL = process.env.DOTNET_API_BASE_URL || 'https://localhost:7095';

const testData = {
  name: "Test Friend",
  alienName: "Cosmic Tester",
  age: "25",
  birthday: "1999-01-01",
  currentResidence: "Earth",
  birthPlace: "Planet Earth",
  favoriteColor: "Blue",
  spaceFood: "Pizza and Tang",
  spaceGear: "Sonic screwdriver",
  heroReason: "Always helps friends in need",
  alienHobbies: "Collecting stardust",
  danceBattleSong: "Space Oddity",
  favoriteDisneyFilm: "WALL-E",
  spaceMessage: "Hello from Earth! Ready for an intergalactic adventure!",
  ageVerification: true,
  consentGiven: true,
  dutchConsent: true
};

async function testFriendsContactAPI() {
  console.log('🚀 Testing Friends Contact API...\n');
  
  try {
    // Test POST request
    console.log('📤 Testing POST /api/friendscontact...');
    const response = await fetch(`${API_BASE_URL}/api/friendscontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ POST request successful!');
      console.log('Response:', result);
      
      if (result.id) {
        console.log(`\n📤 Testing GET /api/friendscontact/${result.id}...`);
        
        // Test GET specific contact
        const getResponse = await fetch(`${API_BASE_URL}/api/friendscontact/${result.id}`);
        const getResult = await getResponse.json();
        
        if (getResponse.ok) {
          console.log('✅ GET specific contact successful!');
          console.log('Contact details:', getResult);
        } else {
          console.log('❌ GET specific contact failed:', getResult);
        }
      }
      
      // Test GET all contacts
      console.log('\n📤 Testing GET /api/friendscontact...');
      const getAllResponse = await fetch(`${API_BASE_URL}/api/friendscontact`);
      const getAllResult = await getAllResponse.json();
      
      if (getAllResponse.ok) {
        console.log('✅ GET all contacts successful!');
        console.log(`Found ${getAllResult.length} contacts`);
      } else {
        console.log('❌ GET all contacts failed:', getAllResult);
      }
      
    } else {
      console.log('❌ POST request failed:');
      console.log('Status:', response.status);
      console.log('Error:', result);
    }
    
  } catch (error) {
    console.log('❌ Network error:', error.message);
    console.log('\n💡 Make sure your .NET API is running on:', API_BASE_URL);
    console.log('   Run: cd api/api.ApiService && dotnet run');
  }
}

// Test Next.js API route as well
async function testNextJSAPI() {
  console.log('\n🌐 Testing Next.js API route...');
  
  try {
    const response = await fetch('http://localhost:3000/api/friends-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Next.js API route successful!');
      console.log('Response:', result);
    } else {
      console.log('❌ Next.js API route failed:', result);
    }
  } catch (error) {
    console.log('❌ Next.js API error:', error.message);
    console.log('💡 Make sure your Next.js app is running on http://localhost:3000');
  }
}

// Run tests
testFriendsContactAPI()
  .then(() => testNextJSAPI())
  .then(() => console.log('\n🎉 API testing complete!'));
