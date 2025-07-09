// app/api/projects/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  try {
    const { id, ...updatedData } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // The updateProject function was removed, so this line will cause an error.
    // const updatedProject = await updateProject(id, updatedData);
    // return NextResponse.json(updatedProject);
    return NextResponse.json({ message: 'Project update functionality is currently unavailable.' }, { status: 501 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}
