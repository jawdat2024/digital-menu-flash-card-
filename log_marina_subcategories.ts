import fs from 'fs';
import path from 'path';
import { BRANCH_MENUS } from './constants';

const marinaMenu = BRANCH_MENUS['marina'];
const specialty = marinaMenu.find(c => c.id === 'specialty-coffee');
if (specialty && specialty.subCategories) {
  console.log("Current subcategories in Marina specialty-coffee:");
  specialty.subCategories.forEach(sc => {
    console.log(`- ${sc.id} (${sc.title})`);
  });
}
