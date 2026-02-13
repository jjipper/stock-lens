export interface StockCardProps {
  name: string;
  ticker: string | number;
  mainIssue?: string;
  price: number;
  percentage: number;
}
