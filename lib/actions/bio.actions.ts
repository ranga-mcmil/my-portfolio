"use server"

import { BioText } from "@prisma/client";
import { db } from "../db";

export async function fetchRandomBioText(): Promise<BioText | null> {
    try {
      const result = await db.$queryRaw<BioText[]>`
        SELECT * FROM "BioText"
        ORDER BY RANDOM()
        LIMIT 1
      `;
      return result[0] || null;
    } catch (error: any) {
      console.error('Error fetching random bio text:', error);
      throw new Error('Failed to fetch random bio text');
    }
  }