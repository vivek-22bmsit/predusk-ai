// Mock data for the application
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  lastActive: string;
}

export interface Message {
  id: number;
  userId: number;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file';
}

export interface ChatRoom {
  id: number;
  name: string;
  description: string;
  participants: number[];
  createdAt: string;
  isPrivate: boolean;
}

export interface DashboardMetric {
  id: number;
  title: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  period: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Vivek Sharma',
    email: 'vivek.sharma@techcorp.io',
    avatar: '/avatars/vivek.jpg',
    role: 'admin',
    lastActive: '2024-08-21T14:25:00Z'
  },
  {
    id: 2,
    name: 'Prachi Gupta',
    email: 'prachi.gupta@techcorp.io',
    avatar: '/avatars/prachi.jpg',
    role: 'user',
    lastActive: '2024-08-21T13:42:00Z'
  },
  {
    id: 3,
    name: 'Mauli Desai',
    email: 'mauli.desai@techcorp.io',
    role: 'moderator',
    lastActive: '2024-08-21T11:18:00Z'
  },
  {
    id: 4,
    name: 'Arjun Mehta',
    email: 'arjun.mehta@techcorp.io',
    avatar: '/avatars/arjun.jpg',
    role: 'user',
    lastActive: '2024-08-20T16:33:00Z'
  },
  {
    id: 5,
    name: 'Kavya Singh',
    email: 'kavya.singh@techcorp.io',
    role: 'user',
    lastActive: '2024-08-21T09:57:00Z'
  }
];

// Mock Messages
export const mockMessages: Message[] = [
  {
    id: 1,
    userId: 1,
    content: 'Hey team! Welcome to our new AI-powered chat system. 🚀',
    timestamp: '2024-08-21T10:00:00Z',
    type: 'text'
  },
  {
    id: 2,
    userId: 2,
    content: 'Thanks Vivek! This looks amazing. The interface is so intuitive.',
    timestamp: '2024-08-21T10:02:00Z',
    type: 'text'
  },
  {
    id: 3,
    userId: 3,
    content: 'Absolutely! The real-time features work perfectly. Great job everyone! 👏',
    timestamp: '2024-08-21T10:05:00Z',
    type: 'text'
  },
  {
    id: 4,
    userId: 4,
    content: 'Can we schedule a demo for the stakeholders next week?',
    timestamp: '2024-08-21T10:08:00Z',
    type: 'text'
  },
  {
    id: 5,
    userId: 5,
    content: 'Sure Arjun! I\'ll coordinate with the team and send out invites.',
    timestamp: '2024-08-21T10:12:00Z',
    type: 'text'
  }
];

// Mock Chat Rooms
export const mockChatRooms: ChatRoom[] = [
  {
    id: 1,
    name: 'Team Discussions',
    description: 'Main channel for all team communications',
    participants: [1, 2, 3, 4, 5],
    createdAt: '2024-08-01T00:00:00Z',
    isPrivate: false
  },
  {
    id: 2,
    name: 'AI Development',
    description: 'Technical discussions for AI features',
    participants: [1, 3, 4],
    createdAt: '2024-08-10T00:00:00Z',
    isPrivate: true
  },
  {
    id: 3,
    name: 'Design Review',
    description: 'UI/UX design discussions and feedback',
    participants: [2, 5],
    createdAt: '2024-08-15T00:00:00Z',
    isPrivate: false
  }
];

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetric[] = [
  {
    id: 1,
    title: 'Total Users',
    value: 1247,
    change: 12.5,
    changeType: 'increase',
    period: 'vs last month'
  },
  {
    id: 2,
    title: 'Active Sessions',
    value: 892,
    change: -3.2,
    changeType: 'decrease',
    period: 'vs yesterday'
  },
  {
    id: 3,
    title: 'Messages Sent',
    value: 15420,
    change: 8.7,
    changeType: 'increase',
    period: 'vs last week'
  },
  {
    id: 4,
    title: 'Revenue',
    value: 52340,
    change: 15.3,
    changeType: 'increase',
    period: 'vs last quarter'
  }
];

// Mock API functions
export const mockApi = {
  // Users
  getUsers: (): Promise<User[]> => 
    new Promise(resolve => setTimeout(() => resolve(mockUsers), 500)),
  
  getUserById: (id: number): Promise<User | null> =>
    new Promise(resolve => 
      setTimeout(() => resolve(mockUsers.find(user => user.id === id) || null), 300)
    ),

  // Messages
  getMessages: (): Promise<Message[]> =>
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 400)),
  
  getMessagesByRoom: (roomId: number): Promise<Message[]> =>
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 400)),

  // Chat Rooms
  getChatRooms: (): Promise<ChatRoom[]> =>
    new Promise(resolve => setTimeout(() => resolve(mockChatRooms), 350)),

  // Dashboard
  getDashboardMetrics: (): Promise<DashboardMetric[]> =>
    new Promise(resolve => setTimeout(() => resolve(mockDashboardMetrics), 600))
};