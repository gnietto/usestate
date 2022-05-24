import { shuffle } from 'd3-array';
import imgplatano from './frutas/Platano.svg';
import imgsandia from './frutas/Sandia.svg';
import imguva from './frutas/Uva.svg';
import imgnaranja from './frutas/Naranja.svg';
import imgdurazno from './frutas/Durazno.svg';
import imgdamasco from './frutas/Damasco.svg';
import imgframbuesa from './frutas/Frambuesa.svg';
import imgfrutilla from './frutas/Frutilla.svg';
import imgmanzana from './frutas/Manzana.svg';
import imgpera from './frutas/Pera.svg';

const imgfrutas = [
  {
    fruta: 'damasco',
    imagen: imgdamasco,
    precio: '$800',
    unidad: 'el kilo'
  },
  {
    fruta: 'durazno',
    imagen: imgdurazno,
    precio: '$650',
    unidad: 'el kilo'
  },
  {
    fruta: 'frambuesa',
    imagen: imgframbuesa,
    precio: '$2500',
    unidad: 'el kilo'
  },
  {
    fruta: 'frutilla',
    imagen: imgfrutilla,
    precio: '$1500',
    unidad: 'el kilo'
  },
  {
    fruta: 'manzana',
    imagen: imgmanzana,
    precio: '$450',
    unidad: 'el kilo'
  },
  {
    fruta: 'naranja',
    imagen: imgnaranja,
    precio: '$530',
    unidad: 'el kilo'
  },
  {
    fruta: 'pera',
    imagen: imgpera,
    precio: '$430',
    unidad: 'el kilo'
  },
  {
    fruta: 'platano',
    imagen: imgplatano,
    precio: '$600',
    unidad: 'el kilo'
  },
  {
    fruta: 'sandia',
    imagen: imgsandia,
    precio: '$1000',
    unidad: 'la unidad'
  },
  {
    fruta: 'uva',
    imagen: imguva,
    precio: '$1800',
    unidad: 'el kilo'
  }
];

const indicesImgFrutas = [...imgfrutas.keys()];
const indicesAleatorios = shuffle(indicesImgFrutas);
const [numeroAleatorio1, numeroAleatorio2, numeroAleatorio3] =
  indicesAleatorios;

export { imgfrutas, numeroAleatorio1, numeroAleatorio2, numeroAleatorio3 };
