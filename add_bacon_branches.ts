import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// Al Bateen & Khalifa
content = content.replace(
  /findItem\("from-our-bakery", "fob_almond"\)!,/g,
  'findItem("from-our-bakery", "fob_almond")!,\n        findItem("from-our-bakery", "fob_bacon_glaze")!,'
);

// Al Qana
const alQanaTarget = `    {
      id: "baked-goods",
      title: "Baked Goods",
      items: [
        {
          id: "bg_plain",`;

const alQanaReplacement = `    {
      id: "baked-goods",
      title: "Baked Goods",
      items: [
        findItem("from-our-bakery", "fob_bacon_glaze")!,
        {
          id: "bg_plain",`;

// We need to make sure we only replace the one in Al Qana.
// Let's find the index of createAlQanaMenu
const alQanaIdx = content.indexOf('const createAlQanaMenu');
if (alQanaIdx !== -1) {
  const targetIdx = content.indexOf(alQanaTarget, alQanaIdx);
  if (targetIdx !== -1) {
    content = content.slice(0, targetIdx) + alQanaReplacement + content.slice(targetIdx + alQanaTarget.length);
    console.log('Successfully added to Al Qana');
  } else {
    console.log('Al Qana target not found');
  }
}

fs.writeFileSync('constants.ts', content);
console.log('Done');
