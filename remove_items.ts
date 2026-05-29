import fs from "fs";

let content = fs.readFileSync("constants.ts", "utf-8");

// We want to remove the Black Forest object and Cardamom Bun object.
// We can find their exact strings. Let's do a regex replacement.

const blackForestRegex = /\{\s*id:\s*["']d_1000["'],\s*name:\s*["']Black Forest["'],[\s\S]*?calories:\s*440,\s*\},/;
const cardamomBunRegex = /\{\s*id:\s*["']fob_cardamom["'],\s*name:\s*["']Cardamom Bun["'],[\s\S]*?calories:\s*280,\s*\},/;

if (blackForestRegex.test(content)) {
    content = content.replace(blackForestRegex, "");
    console.log("Removed Black Forest");
} else {
    console.log("Could not find Black Forest");
}

if (cardamomBunRegex.test(content)) {
    content = content.replace(cardamomBunRegex, "");
    console.log("Removed Cardamom Bun");
} else {
    console.log("Could not find Cardamom Bun");
}

fs.writeFileSync("constants.ts", content);
