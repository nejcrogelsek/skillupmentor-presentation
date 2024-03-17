import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        return NextResponse.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error })
    }
}
