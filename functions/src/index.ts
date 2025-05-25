/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import express from 'express';
import { runFlow } from '@genkit-ai/flow';
import { chatFlow, chatPromptSchema } from './flows/chatFlow';

const app = express();
app.use(express.json());

/**
 * @openapi
 * /chat:
 *   post:
 *     summary: Chat with Genkit AI.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Hello, AI!"
 *     responses:
 *       200:
 *         description: AI response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 */
app.post('/chat', async (req, res) => {
  const validation = chatPromptSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ error: 'Invalid input', details: validation.error.format() });
  }
  try {
    const result = await runFlow(chatFlow, validation.data);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ error: 'AI error', details: error.message });
  }
});

export const api = onRequest({ region: 'us-central1' }, app);
