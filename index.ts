import parse from './parse';
import fs from 'fs'; 
let file = fs.readFileSync('yarn.lock', 'utf8');
let json = parse(file);
console.log(json)