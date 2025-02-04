// app/api/message/route.ts
'use server'
import { NextResponse } from 'next/server'

export async function GET() {
  const messageSecret = process.env.MA_VARIABLE_PRIVEE
  
  return NextResponse.json({ 
    message: messageSecret 
  })
}