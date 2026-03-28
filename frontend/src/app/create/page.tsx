'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

const STYLES = [
  { value: 'manga', label: '日漫', emoji: '🎌' },
  { value: 'western', label: '美漫', emoji: '🦸' },
  { value: 'chibi', label: 'Q版', emoji: '🥰' },
  { value: 'realistic', label: '写实', emoji: '📷' },
];

const RATIOS = [
  { value: '9:16', label: '9:16 竖屏' },
  { value: '3:4', label: '3:4 漫画' },
  { value: '1:1', label: '1:1 方形' },
];

export default function CreateProject() {
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState('manga');
  const [ratio, setRatio] = useState('9:16');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    try {
      const project = await api.createProject({ title: title.trim(), style, aspect_ratio: ratio });
      router.push(`/project/${project.id}`);
    } catch (err) {
      alert(`创建失败: ${err instanceof Error ? err.message : '未知错误'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-lg mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold mb-8">新建项目</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">项目标题</label>
            <input
              type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="给你的漫剧起个名字"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">漫画风格</label>
            <div className="grid grid-cols-4 gap-3">
              {STYLES.map((s) => (
                <button key={s.value} type="button" onClick={() => setStyle(s.value)}
                  className={`p-3 rounded-lg border text-center transition ${style === s.value ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-700 hover:border-gray-500'}`}>
                  <div className="text-2xl">{s.emoji}</div>
                  <div className="text-sm mt-1">{s.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">画面比例</label>
            <div className="grid grid-cols-3 gap-3">
              {RATIOS.map((r) => (
                <button key={r.value} type="button" onClick={() => setRatio(r.value)}
                  className={`p-3 rounded-lg border text-center text-sm transition ${ratio === r.value ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-700 hover:border-gray-500'}`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" disabled={loading || !title.trim()}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 py-3 rounded-lg font-medium transition">
            {loading ? '创建中...' : '创建项目'}
          </button>
        </form>
      </div>
    </div>
  );
}
