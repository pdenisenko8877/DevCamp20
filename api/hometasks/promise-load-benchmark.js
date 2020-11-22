const https = require("https");

const resources = [
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "youtube.com",
  "google.com",
  "tiktok.com"
];

async function loadResource(addr) {
  const startTime = new Date().getTime();

  return new Promise((resolve, reject) => {
    https.get(`https://${addr}`, resp => {
      resolve(`${addr} loaded! Time: ${new Date().getTime() - startTime}ms`);
    }).on("error", err => reject(err));
  });
}

(async () => {
  const startTime1 = new Date().getTime();

  await Promise.allSettled(resources.map(resource => loadResource(resource))).then(
    results => {
    results.forEach((result, i) => {
      if (result.status === "fulfilled") {
        console.log(`${++i}. ${result.value}`);
      } else {
        console.log(`${++i}. ${resources[i]}: ${result.reason}`);
      }
    });
    console.log('Parallel resources time loaded use "allSettled"(ms):', new Date().getTime() - startTime1);
  });

  console.log('------------------------');

  const startTime2 = new Date().getTime();

  await Promise.all(resources.map(resource => loadResource(resource))).then(
    results => {
      let i = 0;
      for (const res of results) {
        console.log(`${++i}. ${res}`);
      }
      console.log('Parallel resources time loaded use "all"(ms):', new Date().getTime() - startTime2);
    }
  );
})();
