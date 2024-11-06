import { NextRequest } from 'next/server';
import sharp from 'sharp';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Spécifier qu'on utilise Node.js runtime
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  // Cette approche ne permettrait pas de manipuler les images localement
  // Il faudrait utiliser des services externes ou une autre approche
} 