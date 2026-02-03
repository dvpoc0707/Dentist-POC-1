#!/usr/bin/env node

/**
 * Script to generate a client config JSON from a form
 * This can be used to create VITE_CLINIC_CONFIG for Vercel
 * 
 * Usage: node scripts/generate-config.js > config.json
 * Or use interactively to fill out the form
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function generateConfig() {
  console.log('=== Clinic Configuration Generator ===\n');

  // Basic Info
  const clinicName = await question('Clinic Name: ');
  const tagline = await question('Tagline: ');
  const logoInitial = await question('Logo Initial (single letter): ');

  // Contact
  const phone = await question('Phone: ');
  const email = await question('Email: ');
  const street = await question('Street Address: ');
  const city = await question('City: ');
  const state = await question('State: ');
  const zip = await question('ZIP Code: ');
  const weekdays = await question('Weekday Hours (e.g., Mon-Fri: 9AM - 7PM): ');
  const saturday = await question('Saturday Hours (or press Enter to skip): ');
  const sunday = await question('Sunday Hours (or press Enter for "Closed"): ');

  // Social (optional)
  const facebook = await question('Facebook URL (optional): ');
  const instagram = await question('Instagram URL (optional): ');
  const twitter = await question('Twitter URL (optional): ');
  const youtube = await question('YouTube URL (optional): ');

  const config = {
    clinic: {
      name: clinicName,
      tagline: tagline,
      logo: {
        initial: logoInitial || clinicName[0].toUpperCase()
      }
    },
    contact: {
      phone: phone,
      email: email,
      address: {
        street: street,
        city: city,
        state: state,
        zip: zip
      },
      hours: {
        weekdays: weekdays,
        ...(saturday && { saturday }),
        sunday: sunday || "Closed"
      }
    },
    social: {
      ...(facebook && { facebook }),
      ...(instagram && { instagram }),
      ...(twitter && { twitter }),
      ...(youtube && { youtube })
    }
  };

  rl.close();

  // Output as minified JSON (for Vercel env var)
  console.log('\n=== Minified JSON (for VITE_CLINIC_CONFIG) ===');
  console.log(JSON.stringify(config));

  // Output as formatted JSON (for file)
  console.log('\n=== Formatted JSON (for config file) ===');
  console.log(JSON.stringify(config, null, 2));
}

generateConfig().catch(console.error);
