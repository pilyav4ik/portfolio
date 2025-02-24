import type { Project } from '@prisma/client' // Importing the Post type from the Prisma client library.
import { notFound } from 'next/navigation' // Importing the notFound function from Next.js for handling 404 errors.
import { db } from '..'
import { cache } from 'react'

export async function fetchPosts(): Promise<Project[]> {  // Function to fetch all posts from the database.
    return await db.project.findMany({
    })
}

export const fetchProjectBySlug = cache(
    async function fetchProjectBySlug(slug: string): Promise<Project | null> { // Function to fetch a single post by its ID.
        const post = await db.project.findFirst({
            where: {
                slug
            }
        })
    
        if (!post) {
            notFound() // If the post is not found, a 404 error is thrown.
        }
    
        return post
    }
)