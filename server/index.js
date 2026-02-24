import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(express.json());

// Allow your Render frontend to call this API.
// (Later you can lock this down to your exact Render domain.)
app.use(cors());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const ABOUT_ME_CONTEXT = `
You are a helpful assistant that answers questions about Jack Lombardo based ONLY on the info below.
If the answer isn't in the info, say you don't know.

INFO:
- Name: Jack Lombardo
- LinkedIn: https://www.linkedin.com/in/jack-lombardo-45a85b226/
- Experience: 911inform (Wall, NJ)
  - Junior Software Developer (2022–2023): built client-configurable email system, solo smoke detector integration, Android app updates (Java/Android Studio), full-stack features (AngularJS/Bootstrap + Node.js/Koa + MongoDB).
  - Quality Assurance Engineer (Summer 2025): unit tests, manual testing, documented QA results, validated DB changes.
- Education:
  - Kean University, B.S. Computer Science (2024 – May 2026)
  - Brookdale Community College, A.A.S Computer Science (2018 – 2021)
- Projects:
  - PixelLoop: pixel-canvas app with save/export (C#, MonoGame)
  - Apartment Laundry Reservation System: web-based reservation system (AAMPS: Apache, MySQL, PHP)
`;

app.get("/health", (req, res) => res.json({ ok: true }));

app.post("/chat", async (req, res) => {
  try {
    const userMessage = (req.body?.message ?? "").toString().slice(0, 2000);
    if (!userMessage) return res.status(400).json({ error: "Missing message" });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        { role: "system", content: ABOUT_ME_CONTEXT },
        { role: "user", content: userMessage }
      ],
    });

    res.json({ reply: response.output_text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("API listening on", port));