import renderFace from './renderFace.js';
import randomColor from 'random-color';
import randomTextFaces from 'random-text-faces';
import './style.css';

const color = randomColor().hexString();
const face = randomTextFaces.get();

renderFace(color, face);
