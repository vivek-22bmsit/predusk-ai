import { NextResponse } from 'next/server';
import { mockUsers } from '@/data/mockData';

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json({
    success: true,
    data: mockUsers,
    message: 'Users fetched successfully'
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate creating a new user
    const newUser = {
      id: mockUsers.length + 1,
      ...body,
      lastActive: new Date().toISOString()
    };
    
    // In a real app, you'd save to database
    mockUsers.push(newUser);
    
    return NextResponse.json({
      success: true,
      data: newUser,
      message: 'User created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to create user'
    }, { status: 400 });
  }
}