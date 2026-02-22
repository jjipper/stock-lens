export interface IssueCardProps {
  id: string;
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  title: string;
  description: string;
  stocks: { name: string; ticker: string; percentage: number }[];
  newsCount: number;
  mention: boolean;
  effect: 'high' | 'middle' | 'low';
}

export interface StockCardProps {
  name: string;
  ticker: string | number;
  mainIssue?: string;
  price: number;
  percentage: number;
  myStock: boolean;
  popular: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'line';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
