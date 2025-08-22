import { NextResponse } from 'next/server';
import { mockDashboardMetrics } from '@/data/mockData';

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return NextResponse.json({
    success: true,
    data: mockDashboardMetrics,
    message: 'Dashboard metrics fetched successfully'
  });
}