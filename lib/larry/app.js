/* jshint esnext:true */
import { add } from '../common';

var titleNode = document.createElement('h1');
titleNode.appendChild(document.createTextNode('Larry says 1 + 2 is ' + add(1, 3)));
document.body.appendChild(titleNode);
