import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, attendance, guests, wishes } = await req.json();

    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      throw new Error("Missing env variables");
    }

    const text = `
💍 Новая заявка

👤 ФИО: ${name}
✅ Присутствие: ${attendance}
👥 Количество гостей: ${guests}
💌 Пожелания:
${wishes}
`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );

    const data = await tgRes.json();

    return NextResponse.json(
      { ok: tgRes.ok, data },
      { status: tgRes.ok ? 200 : 500 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}