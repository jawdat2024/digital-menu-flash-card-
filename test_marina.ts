import { BRANCH_MENUS } from './constants';
const menu = BRANCH_MENUS.marina;
const specialty = menu.find((c: any) => c.id === 'specialty-coffee');
console.log(JSON.stringify(specialty, null, 2));
