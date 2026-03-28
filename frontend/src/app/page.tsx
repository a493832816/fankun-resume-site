'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '@/lib/api';
import type { Project } from '@/lib/types';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const data = await api.listProjects();
      setProjects(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('确认删除？')) return;
    await api.deleteProject(id);
    load();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">🎬 ComicFlow</h1>
          <Link href="/create" className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-lg font-medium transition">
            + 新建项目
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">加载中...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🖌️</div>
            <p className="text-gray-400 text-lg">还没有项目</p>
            <p className="text-gray-600 mt-2">创建第一个AI漫剧项目</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div key={p.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition group">
                <div className="flex justify-between items-start">
                  <Link href={`/project/${p.id}`} className="text-lg font-semibold hover:text-indigo-400 transition">
                    {p.title}
                  </Link>
                  <button onClick={() => handleDelete(p.id)} className="text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition">
                    ✕
                  </button>
                </div>
                <div className="mt-3 flex gap-2 text-sm text-gray-500">
                  <span className="bg-gray-800 px-2 py-0.5 rounded">
                    {{ manga: '日漫', western: '美漫', chibi: 'Q版', realistic: '写实' }[p.style] || p.style}
                  </span>
                  <span className="bg-gray-800 px-2 py-0.5 rounded">{p.aspect_ratio}</span>
                </div>
                <div className="mt-2 text-xs text-gray-600">{new Date(p.created_at).toLocaleString('zh-CN')}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
