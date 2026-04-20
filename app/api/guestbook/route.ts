import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "guestbook.json");
const MAX_PER_IP = 10;

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

async function readData(): Promise<{ messages: Array<{ name: string; content: string; time: string; ip: string }>; ipCount: Record<string, number> }> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { messages: [], ipCount: {} };
  }
}

interface GuestbookData { messages: Array<{ name: string; content: string; time: string; ip: string }>; ipCount: Record<string, number> }

async function writeData(data: GuestbookData): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const data = await readData();
  // Strip IPs from response
  const messages = data.messages.map(({ ip, ...msg }) => msg);
  return NextResponse.json({ messages });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, content } = body;

  if (!name?.trim() || !content?.trim()) {
    return NextResponse.json({ error: "昵称和内容不能为空" }, { status: 400 });
  }
  if (name.length > 50 || content.length > 500) {
    return NextResponse.json({ error: "内容过长" }, { status: 400 });
  }

  const ip = getIp(req);
  const data = await readData();
  const count = data.ipCount[ip] || 0;

  if (count >= MAX_PER_IP) {
    return NextResponse.json({ error: "每个 IP 最多留言 10 条" }, { status: 429 });
  }

  const now = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  data.messages.push({ name: name.trim(), content: content.trim(), time: now, ip });
  data.ipCount[ip] = count + 1;

  await writeData(data);
  const messages = data.messages.map(({ ip: _, ...msg }) => msg);
  return NextResponse.json({ messages });
}
