const items = [
  { name: "Cuban Cigar {tap filter}" },
  { name: "Mish Mish" },
  { name: "Kenya KIRIMARA" },
  { name: "Blackberry {tap filter}" },
  { name: "Ethiopia" },
  { name: "Colombia Sweet Decaf" },
  { name: "Colombia Gesha" },
  { name: "Costa Rica" }
];

const filtered = items.filter(item => {
  const name = item.name.toLowerCase();
  return !name.includes('cuban cigar') &&
         !name.includes('cigar') &&
         !name.includes('blackberry') &&
         name !== 'ethiopia' &&
         name !== 'sweet decaf' &&
         name !== 'bodisha' &&
         name !== 'rogisha' &&
         name !== 'strawberry' &&
         name !== 'kirimara' &&
         name !== 'kenya kiramara {tap filter}' &&
         name !== 'kenya kirimara [tap filter]' &&
         name !== 'mish mish' &&
         name !== 'costa rica' &&
         name !== 'gesha';
});

console.log(filtered);
