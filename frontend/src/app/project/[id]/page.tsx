'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { api, imageUrl } from '@/lib/api';
import type { Project, Storyboard, Page } from '@/lib/types';

const STEPS = ['写故事', '生成分镜', '生成图片', '排版导出'];
const LAYOUTS = [
  { value: 'auto', label: '自动' },
  { value: '2panel_h', label: '两格横' },
  { value: '3panel_v', label: '三格竖' },
  { value: '4panel_grid', label: '四格田字' },
  { value: 'dramatic', label: '戏剧性' },
];
const BUBBLES = [
  { value: 'manga', label: '日漫' },
  { value: 'western', label: '美漫' },
  { value: 'minimal', label: '简约' },
];

export default function ProjectPage() {
  const params = useParams();
  const pid = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [step, setStep] = useState(0);
  const [storyText, setStoryText] = useState('');
  const [panelCount, setPanelCount] = useState(6);
  const [generating, setGenerating] = useState(false);
  const [layoutType, setLayoutType] = useState('auto');
  const [bubbleStyle, setBubbleStyle] = useState('manga');

  const loadProject = async () => {
    const data = await api.getProject(pid);
    setProject(data);
    if (data.storyboards && data.storyboards.length > 0) setStep(1);
    if (data.storyboards?.some((s: Storyboard) => s.status === 'generated')) setStep(2);
    if (data.pages && data.pages.length > 0) setStep(3);
  };

  useEffect(() => { loadProject(); }, [pid]);

  const handleGenStoryboard = async () => {
    if (!storyText.trim()) return;
    setGenerating(true);
    try {
      await api.generateStoryboard(pid, { story_text: storyText, panel_count: panelCount });
      await loadProject();
      setStep(1);
    } catch (e) {
      alert(`生成失败: ${e instanceof Error ? e.message : '未知错误'}`);
    } finally {
      setGenerating(false);
    }
  };

  const handleGenAllImages = async () => {
    setGenerating(true);
    try {
      await api.generateAllImages(pid);
      await loadProject();
      setStep(2);
    } catch (e) {
      alert(`生成失败: ${e instanceof Error ? e.message : '未知错误'}`);
    } finally {
      setGenerating(false);
    }
  };

  const handleGenSingleImage = async (sid: string) => {
    try {
      await api.generateImage(sid);
      await loadProject();
    } catch (e) {
      alert(`生成失败: ${e instanceof Error ? e.message : '未知错误'}`);
    }
  };

  const handleLayout = async () => {
    setGenerating(true);
    try {
      await api.layoutProject(pid, { layout_type: layoutType, bubble_style: bubbleStyle });
      await loadProject();
      setStep(3);
    } catch (e) {
      alert(`排版失败: ${e instanceof Error ? e.message : '未知错误'}`);
    } finally {
      setGenerating(false);
    }
  };

  const handleUpdateBoard = async (id: string, field: string, value: string) => {
    await api.updateStoryboard(id, { [field]: value });
    loadProject();
  };

  if (!project) return <div className="min-h-screen bg-gray-950 text-gray-400 flex items-center justify-center">加载中...</div>;

  const boards = project.storyboards || [];
  const pages = project.pages || [];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <a href="/" className="text-gray-500 hover:text-gray-300">← 返回</a>
          <h1 className="text-2xl font-bold">{project.title}</h1>
        </div>

        {/* Step Nav */}
        <div className="flex gap-1 mb-8">
          {STEPS.map((s, i) => (
            <button key={i} onClick={() => i <= step && setStep(i)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-t-lg transition ${i === step ? 'bg-gray-800 text-white' : i < step ? 'bg-gray-900 text-gray-400 hover:text-gray-200' : 'bg-gray-900/50 text-gray-600 cursor-default'}`}>
              {i + 1}. {s}
            </button>
          ))}
        </div>

        {/* Step 0: Story Input */}
        {step === 0 && (
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-lg font-semibold mb-4">输入你的故事</h2>
            <textarea value={storyText} onChange={(e) => setStoryText(e.target.value)}
              placeholder="在这里输入你的故事，AI会自动拆分为漫画分镜..."
              className="w-full h-48 bg-gray-800 border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-indigo-500 resize-none transition" />
            <div className="flex items-center justify-between mt-4">
              <label className="text-sm text-gray-400">
                分镜数量：
                <select value={panelCount} onChange={(e) => setPanelCount(Number(e.target.value))}
                  className="ml-2 bg-gray-800 border border-gray-700 rounded px-2 py-1">
                  {[4, 6, 8, 10, 12].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
              <button onClick={handleGenStoryboard} disabled={generating || !storyText.trim()}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 px-6 py-2.5 rounded-lg font-medium transition">
                {generating ? '生成中...' : '生成分镜 ✨'}
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Storyboard Editor */}
        {step === 1 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">编辑分镜</h2>
              <button onClick={handleGenAllImages} disabled={generating}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 px-5 py-2 rounded-lg font-medium transition">
                {generating ? '生成中...' : '全部生图 →'}
              </button>
            </div>
            <div className="space-y-3">
              {boards.map((b) => (
                <div key={b.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <div className="flex gap-4">
                    <span className="text-2xl font-bold text-gray-700 shrink-0 w-8 text-center">{b.panel_index + 1}</span>
                    <div className="flex-1 space-y-3">
                      <div>
                        <label className="text-xs text-gray-500">场景描述（用于AI生图）</label>
                        <textarea value={b.scene_description}
                          onChange={(e) => handleUpdateBoard(b.id, 'scene_description', e.target.value)}
                          className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm focus:outline-none focus:border-indigo-500 resize-none h-20" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs text-gray-500">台词</label>
                          <input value={b.dialogue} onChange={(e) => handleUpdateBoard(b.id, 'dialogue', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                          <label className="text-xs text-gray-500">说话人</label>
                          <input value={b.speaker} onChange={(e) => handleUpdateBoard(b.id, 'speaker', e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-indigo-500" />
                        </div>
                      </div>
                      <div className="flex gap-3 text-xs text-gray-500">
                        <span>📷 {b.camera_type}</span>
                        <span>🎭 {b.emotion}</span>
                        <span>🏃 {b.character_action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Image Generation */}
        {step === 2 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">图片预览</h2>
              <button onClick={() => setStep(3)} className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg font-medium transition">
                排版导出 →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {boards.map((b) => (
                <div key={b.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden group">
                  <div className="aspect-[3/4] bg-gray-800 relative">
                    {b.image_url ? (
                      <img src={imageUrl(b.image_url)} alt={`分镜${b.panel_index + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        {b.status === 'generating' ? '⏳ 生成中...' : '未生成'}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium truncate">{b.dialogue || '(无台词)'}</div>
                    <button onClick={() => handleGenSingleImage(b.id)}
                      className="mt-2 w-full text-xs bg-gray-800 hover:bg-gray-700 py-1.5 rounded transition">
                      重新生成
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Layout & Export */}
        {step === 3 && (
          <div>
            <div className="flex gap-4 mb-6 items-end">
              <div>
                <label className="text-xs text-gray-400 block mb-1">布局</label>
                <div className="flex gap-2">
                  {LAYOUTS.map((l) => (
                    <button key={l.value} onClick={() => setLayoutType(l.value)}
                      className={`px-3 py-1.5 text-sm rounded border transition ${layoutType === l.value ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-700 hover:border-gray-500'}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">气泡</label>
                <div className="flex gap-2">
                  {BUBBLES.map((b) => (
                    <button key={b.value} onClick={() => setBubbleStyle(b.value)}
                      className={`px-3 py-1.5 text-sm rounded border transition ${bubbleStyle === b.value ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-700 hover:border-gray-500'}`}>
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={handleLayout} disabled={generating}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 px-5 py-2 rounded-lg font-medium transition">
                {generating ? '排版中...' : '生成漫画页'}
              </button>
            </div>

            {pages.length > 0 ? (
              <div className="space-y-6">
                {pages.map((p) => (
                  <div key={p.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <div className="text-sm text-gray-500 mb-3">第 {p.page_index + 1} 页 · {p.layout_type}</div>
                    {p.output_url && (
                      <img src={imageUrl(p.output_url)} alt={`第${p.page_index + 1}页`} className="max-h-[600px] mx-auto rounded" />
                    )}
                    <a href={api.exportProject(pid)} download className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-sm font-medium transition">
                      📥 导出 PNG
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-600">点击「生成漫画页」查看排版效果</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
