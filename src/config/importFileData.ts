import cron from 'node-cron';
import fs from 'fs';
import { ProductsRepository } from '../products/productsRepository';

const productsRepository = new ProductsRepository();

async function teste() {
  const res = await fetch(
    'https://challenges.coode.sh/food/data/json/index.txt'
  );
  const text = await res.text();
  let array = text.split('\n');
  array.pop();

  /* const data = await fetch(
    `https://challenges.coode.sh/food/data/json/${array[0]}`,
    {
      headers: {
        'Content-Type': /* 'application/json' 'text/plain; charset=UTF-8',
      },
    }
  );

  console.log(await data.text()); */

  for await (const filename of array) {
    const res = await fetch(
      `https://challenges.coode.sh/food/data/json/${filename}`,
      {
        headers: {
          'Content-Type': /* 'application/json' */ 'text/plain; charset=UTF-8',
        },
      }
    );
    const json = await res.json();
    await productsRepository.saveProduct(json);
  }
}

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
