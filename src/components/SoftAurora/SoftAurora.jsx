import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

import './SoftAurora.css';

// ... seluruh kode shader dan component SoftAurora ...

export default function SoftAurora({
  speed = 0.6,
  scale = 1.5,
  brightness = 1.0,
  color1 = '#f7f7f7',
  color2 = '#e100ff',
  noiseFrequency = 2.5,
  noiseAmplitude = 1.0,
  bandHeight = 0.5,
  bandSpread = 1.0,
  octaveDecay = 0.1,
  layerOffset = 0,
  colorSpeed = 1.0,
  enableMouseInteraction = true,
  mouseInfluence = 0.25
}) {
  // kode useEffect yang kamu kirim tadi
}