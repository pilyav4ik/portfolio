import prisma from '@/app/lib/db';
import { Project } from '@prisma/client';

export async function updateProject(id: number, updatedData: Partial<Project>) {
  return await prisma.project.update({
    where: { id },
    data: updatedData,
  });
}
