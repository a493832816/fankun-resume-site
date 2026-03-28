const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

async function fetchApi(path: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }));
    throw new Error(err.detail || '请求失败');
  }
  return res.json();
}

export const api = {
  // Projects
  listProjects: () => fetchApi('/api/projects'),
  getProject: (id: string) => fetchApi(`/api/projects/${id}`),
  createProject: (data: { title: string; style: string; aspect_ratio: string }) =>
    fetchApi('/api/projects', { method: 'POST', body: JSON.stringify(data) }),
  deleteProject: (id: string) =>
    fetchApi(`/api/projects/${id}`, { method: 'DELETE' }),

  // Storyboard
  generateStoryboard: (projectId: string, data: { story_text: string; panel_count: number }) =>
    fetchApi(`/api/projects/${projectId}/storyboard`, { method: 'POST', body: JSON.stringify(data) }),
  updateStoryboard: (id: string, data: Record<string, string>) =>
    fetchApi(`/api/storyboards/${id}`, { method: 'PUT', body: JSON.stringify(data) }),

  // Images
  generateImage: (storyboardId: string) =>
    fetchApi(`/api/storyboards/${storyboardId}/image`, { method: 'POST' }),
  generateAllImages: (projectId: string) =>
    fetchApi(`/api/projects/${projectId}/images`, { method: 'POST' }),

  // Layout & Export
  layoutProject: (projectId: string, data: { layout_type: string; bubble_style: string }) =>
    fetchApi(`/api/projects/${projectId}/layout`, { method: 'POST', body: JSON.stringify(data) }),
  exportProject: (projectId: string, format?: string) =>
    `${API_BASE}/api/projects/${projectId}/export?format=${format || 'png'}`,
};

export const imageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${API_BASE}${path}`;
};
