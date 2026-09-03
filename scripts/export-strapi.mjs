import fs from 'fs';
import path from 'path';

// Uses the actual running port and API token from the project
const STRAPI = 'http://localhost:1338';
const TOKEN = '395d5102585e06efda78983174c5b9f7441cd29151bb26c9029d2c327e48e25f12ab874fdf9d0303ac0ccda5b947e69e56b495734f6802b524f55b63b03fd4d1ef6a87ee719b0e4f7ea5b311b28b85ec1d65ab5eda1185029635326c4f7329997e00891445f4953cb7821ef81777f692b0670de77e810f1fa92decc910b3590f';

const headers = { Authorization: `Bearer ${TOKEN}` };

fs.mkdirSync('content', { recursive: true });

// Export all services — paginate to get every record
let page = 1;
let all = [];
while (true) {
  const res = await fetch(
    `${STRAPI}/api/services?populate=*&pagination[pageSize]=100&pagination[page]=${page}`,
    { headers }
  );
  if (!res.ok) { console.error(`HTTP ${res.status}`); process.exit(1); }
  const json = await res.json();
  all = all.concat(json.data);
  console.log(`Page ${page}: fetched ${json.data.length} services`);
  if (page >= json.meta.pagination.pageCount) break;
  page++;
}

fs.writeFileSync('content/services.json', JSON.stringify(all, null, 2));
console.log(`\nDone. Exported ${all.length} services to content/services.json`);
console.log('NOTE: All images are on S3 — no media download needed.');
