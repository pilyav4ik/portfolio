// app/api/projects/[slug]/route.ts
import prisma from '@/app/lib/db';
import { updateProject } from '@/app/services/projectService';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  try {
    const { id, ...updatedData } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const updatedProject = await updateProject(id, updatedData);
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}
