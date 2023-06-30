import cron from 'node-cron';
import fs from 'fs';

async function teste() {
  const res = await fetch(
    'https://challenges.coode.sh/food/data/json/index.txt'
  );
  const text = await res.text();
  let array = text.split('\n');
  array.pop();
  array = array.map((item) => item.replace('.gz', ''));
  // console.log({ array });

  const data = await fetch(
    `https://challenges.coode.sh/food/data/json/${array[0]}`
  );

  const json = await data.json();
  const arrayBuffer = await data.arrayBuffer();
  console.log({ data, json, arrayBuffer });

  /*  for await (const filename of array) {
    const res = await fetch(
      `https://challenges.coode.sh/food/data/json/${filename}`
    );
    const json = await res.json();
  } */
}
// teste();
cron.schedule('0 0 * * *', () => {
  // Data to write on file
  let data = `${new Date().toUTCString()} 
   : Server is working\n`;

  // Appending data to logs.txt file
  fs.appendFile('../../logs.txt', data, function (err) {
    if (err) throw err;

    console.log('Status Logged!');
  });
  teste();
});
