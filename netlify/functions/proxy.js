// netlify/functions/proxy.js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { url } = event.queryStringParameters;
  
  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL is required' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS for all domains
      },
    };
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS for all domains
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Allow CORS for all domains
      },
    };
  }
};
