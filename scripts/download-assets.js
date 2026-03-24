const fs = require('fs');
const path = require('path');
const axios = require('axios');

const PROD_URL = process.env.STRAPI_PRODUCTION_URL;
const API_TOKEN = process.env.PRODUCTION_API_TOKEN;

async function downloadAssets() {
  try {
    // Get all media files
    const response = await axios.get(`${PROD_URL}/api/upload/files`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    
    const files = response.data.data;
    
    for (const file of files) {
      const fileUrl = file.url.startsWith('http') 
        ? file.url 
        : `${PROD_URL}${file.url}`;
      
      const localPath = path.join('./public/uploads', file.hash + file.ext);
      const dir = path.dirname(localPath);
      
      // Create directory if needed
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Download file
      const fileResponse = await axios.get(fileUrl, { 
        responseType: 'arraybuffer' 
      });
      
      fs.writeFileSync(localPath, fileResponse.data);
      console.log(`Downloaded: ${file.name}`);
    }
    
    console.log(`Downloaded ${files.length} assets`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadAssets();
