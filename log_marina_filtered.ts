import fs from 'fs';
import path from 'path';
import { BRANCH_MENUS } from './constants';

const marinaMenu = BRANCH_MENUS['marina'];
const specialty = marinaMenu.find(c => c.id === 'specialty-coffee');
if (specialty && specialty.subCategories) {
  const filteredHot = specialty.subCategories.find(sc => sc.id === 'filtered-hot');
  if (filteredHot) {
    console.log("Current Filtered (Hot) items in Marina:");
    filteredHot.items.forEach(item => {
      console.log(`- ${item.name}`);
    });
  }
}
