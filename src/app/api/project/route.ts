import prisma from '@/app/lib/db';



 import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { title, slug, previewImageURL, images, services } = await req.json();

  try {
    const project = await prisma.project.create({
      data: {
        title,
        slug,
        previewImageURL,
        images: {
          create: images
        },
        services: {
          create: services
        }
      }
    });

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}