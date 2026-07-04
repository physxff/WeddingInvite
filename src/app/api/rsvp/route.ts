import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const message = `
💍 Новая заявка

👤 ФИО:
${body.name}

✅ Придет:
${body.attending}

👥 Гостей:
${body.guests}

💬 Пожелания:
${body.wishes}
`;

  await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    }
  );

  return NextResponse.json({ success: true });
}