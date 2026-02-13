export interface IssueCardProps {
  type: 'memory' | 'battery' | 'ai' | 'chart' | 'money';
  title: string;
  description: string;
  stocks: { name: string; ticker: string; percentage: number }[];
  newsCount: number;
  mention: boolean;
  effect: 'high' | 'middle' | 'low';
}
