export type IssueType =
	| 'semiconductor'
	| 'battery'
	| 'biotech'
	| 'mobility'
	| 'internet'
	| 'energy'
	| 'defense'
	| 'finance';

export interface IssueCardProps {
	id: string;
	type: IssueType;
	title: string;
	description: string;
	stocks: { name: string; ticker: string; percentage: number }[];
	newsCount: number;
	newsList: string[];
	mention: boolean;
	effect: 'high' | 'middle' | 'low';
}

export interface StockCardProps {
	name: string;
	ticker: string;
	mainIssue?: string;
	price: number;
	percentage: number;
	myStock: boolean;
	popular: boolean;
	newsList: string[];
}

export interface ButtonProps {
	variant: 'primary' | 'primaryLine' | 'gray' | 'grayLine' | 'black';
	size: 'sm' | 'md' | 'lg';
	width?: 'full' | '';
	onClick?: () => void;
	children: React.ReactNode;
}

export interface AppBarOutletContext {
	setAppBarTitle: (v: string) => void;
}

export interface NewsListItem {
	id?: string;
	title: string;
	publishedAt: string;
	source: string;
	imageUrl: string;
}

export interface NewsItem {
	id: string;
	title: string;
	publishedAt: string;
	source: string;
	imageUrl: string;
	summary: [string, string, string];
	impact: 'high' | 'middle' | 'low';
	impactSummary: string;
	nextCheckpoint: string;
	articleUrl: string;
}
