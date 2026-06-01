const fetch = require('node-fetch');

async function test() {
  console.log("Sending POST to https://racenza-back.onrender.com/api/contact");
  try {
    const res = await fetch('https://racenza-back.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test",
        email: "test@example.com",
        projectType: "Test",
        message: "Test message"
      })
    });
    
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Response:", data);
  } catch(e) {
    console.log("Error:", e);
  }
}

test();
