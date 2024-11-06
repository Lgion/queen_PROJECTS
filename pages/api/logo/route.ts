// FINALEMENT, CETTE ESSAIE DE CRÉATION D'IMAGE EN API POUR LE LOGO 
// N'A JAMAIS FONCTIONNÉ
import { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const width = parseInt(searchParams.get('width') || '120');
    const height = parseInt(searchParams.get('height') || '48');
    const format = searchParams.get('format') || 'webp';

    const imagePath = path.join(process.cwd(), 'assets', 'tmp_logo.avif');
    const imageBuffer = await fs.readFile(imagePath);

    // Utiliser sharp pour redimensionner et convertir l'image
    const processedImage = await sharp(imageBuffer)
      .resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFormat(format as keyof sharp.FormatEnum)
      .toBuffer();

    // Définir le type MIME approprié
    const contentType = format === 'webp' 
      ? 'image/webp'
      : format === 'png'
        ? 'image/png'
        : 'image/jpeg';

    // Retourner l'image traitée
    return new Response(processedImage, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return new Response('Error processing image', { status: 500 });
  }
}  