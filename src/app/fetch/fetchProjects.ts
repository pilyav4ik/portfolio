'use server'

import { API_BASE_URL, LAST_PROJECTS_API_ENDPOINT, PROJECTS_API_ENDPOINT } from '../constants';

export const fetchAllProjects = async () => {
  const response = await fetch(`${API_BASE_URL}${PROJECTS_API_ENDPOINT}`, {
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();
  return data.map((project: any) => ({
    title: project.title || "Untitled Project",
    services: project.services.map((service:any) => service.name).join(', ') || 'untitled',
    src: project.previewImageURL || 'default-image.png',
    color: "#000000", // Set a default color or fetch it if available
    url: project.slug,
    slug: project.slug,
  }));
};

export const fetchLastProjects = async () => {
  const response = await fetch(`${API_BASE_URL}${LAST_PROJECTS_API_ENDPOINT}`);
    
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();
  return data.map((project: any) => ({
    title: project.title || "Untitled Project",
    services: project.services.map((service:any) => service.name).join(', ') || 'untitled',
    src: project.previewImageURL || 'default-image.png',
    color: "#000000", // Set a default color or fetch it if available
    url: project.slug,
    slug: project.slug,
  }));
};
