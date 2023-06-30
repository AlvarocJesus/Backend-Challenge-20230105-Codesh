async function teste() {
  const res = await fetch(
    'https://challenges.coode.sh/food/data/json/index.txt'
  );
  const text = await res.text();
  const array = text.split('\n');
  array.pop();

  const data = await fetch(
    `https://challenges.coode.sh/food/data/json/${array[0]}`
  );
  // const json = await data.json();
  // const texte = await data.text();
  const arrayBuffer = await data.arrayBuffer();
  console.log({ /* json, texte,*/ arrayBuffer });

  /*  for await (const filename of array) {
    const res = await fetch(
      `https://challenges.coode.sh/food/data/json/${filename}`
    );
    const json = await res.json();
  } */
}
teste();
