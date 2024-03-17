export const dynamic = 'force-dynamic'

import { type NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest, { params: { userId } }: { params: { userId: string } }) {
    try {
        return NextResponse.json({ userId }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}
