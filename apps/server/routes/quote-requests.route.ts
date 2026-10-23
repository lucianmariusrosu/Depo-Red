import { Hono, type Context } from "hono";
import { z } from "zod";
import { apiFailure, apiSuccess } from "@repo/shared/http";
import { publicRoute } from "../_core/route-helpers";

const QuoteItemSchema = z.object({
  productId: z.string().trim().min(1).max(120),
  name: z.string().trim().min(1).max(240),
  unit: z.string().trim().min(1).max(40),
  quantity: z.number().int().min(1).max(100000),
  priceRon: z.number().nonnegative().optional(),
});

const QuoteRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(6).max(40),
  deliveryLocality: z.string().trim().min(2).max(160),
  comments: z.string().trim().max(2000).optional().default(""),
  items: z.array(QuoteItemSchema).min(1).max(100),
});

export const quoteRequestsRouter = new Hono();

const submitQuote = async (c: Context) => {
  const body = await c.req.json().catch(() => null);
  const parsed = QuoteRequestSchema.safeParse(body);
  if (!parsed.success) {
    return c.json(apiFailure("INVALID_INPUT", "Completează datele obligatorii și adaugă cel puțin un produs."), 400);
  }

  const reference = `DEMO-${Date.now().toString(36).slice(-6).toUpperCase()}`;
  return c.json(apiSuccess({
    reference,
    received: true,
    delivery: "prototype_confirmation_only",
    message: "Cererea a fost validată. Notificarea email trebuie configurată înainte de publicare.",
    itemCount: parsed.data.items.length,
  }), 200);
};

quoteRequestsRouter.post("", publicRoute, submitQuote);
quoteRequestsRouter.post("/", publicRoute, submitQuote);
