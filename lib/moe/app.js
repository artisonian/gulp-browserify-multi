/* jshint esnext:true */
import { add } from '../common';

var titleNode = document.createElement('h1');
titleNode.appendChild(document.createTextNode('Moe says 1 + 2 is ' + add(1, 1)));
document.body.appendChild(titleNode);
