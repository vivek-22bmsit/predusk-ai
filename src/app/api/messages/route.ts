import { NextResponse } from 'next/server';
import { mockMessages } from '@/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get('roomId');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  let filteredMessages = mockMessages;
  
  if (roomId) {
    // In a real app, you'd filter by room ID from database
    filteredMessages = mockMessages; // For now, return all messages
  }
  
  return NextResponse.json({
    success: true,
    data: filteredMessages,
    message: 'Messages fetched successfully'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newMessage = {
      id: mockMessages.length + 1,
      ...body,
      timestamp: new Date().toISOString()
    };
    
    mockMessages.push(newMessage);
    
    return NextResponse.json({
      success: true,
      data: newMessage,
      message: 'Message sent successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to send message'
    }, { status: 400 });
  }
}