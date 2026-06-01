const fs = require('fs');
const https = require('https');

https.get('https://racenza-mu.vercel.app/assets/index-BRcLPYMv.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/racenza-back\.onrender\.com[^"']*/);
    console.log("FOUND URL IN BUNDLE:", match ? match[0] : "NOT FOUND");
  });
});
