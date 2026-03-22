import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

// We need to parse the menus for Al Qana, Khalifa City, Al Bateen, and Marina
// and extract the items under "Filter Coffee" or "Cold Brew" or "Cold Drip" that are beans.

// Actually, let's just write a script to extract all items with tastingNotes from these branches.
// Or we can just read the file and find them.
