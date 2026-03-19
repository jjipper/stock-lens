export interface InfinityProps {
	page: number;
	size: number;
}

export type IssueType =
	| 'semiconductor'
	| 'battery'
	| 'biotech'
	| 'mobility'
	| 'internet'
	| 'energy'
	| 'defense'
	| 'finance';

export interface StockSummary {
	name: string;
	ticker: string;
	percentage: number;
}

export interface IssueCardProps {
	id: string;
	type: IssueType;
	title: string;
	description: string;
	stocks: StockSummary[];
	newsCount: number;
	newsList: string[];
	mention: boolean;
	effect: 'high' | 'middle' | 'low';
}

export interface IssueInfinityProps {
	list: IssueCardProps[];
	hasNextPage: boolean;
}

export interface StockCardProps {
	name: string;
	ticker: string;
	mainIssue?: string;
	price: number;
	percentage: number;
	issueTone: 'bullish' | 'bearish';
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

export interface NewsCardProps {
	title: string;
	publishedAt: string;
	source: string;
	imageUrl: string;
	onClick?: () => void;
}

export interface NewsListItem extends NewsCardProps {
	id: string;
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

export interface NewsInfinityProps {
	newsList: string[];
	pageParam: InfinityProps;
}

export interface NewsListInfinityProps {
	list: NewsListItem[];
	hasNextPage: boolean;
}
