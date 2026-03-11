import { IssueNewsListWrapper } from 'features/Issues';
import { StockNewsListWrapper } from 'features/Stocks';

export const NewsListWrapper = ({
	NewsType,
}: {
	NewsType: 'issue' | 'stock';
}) => {
	return (
		<>
			{NewsType == 'issue' ? <IssueNewsListWrapper /> : ''}
			{NewsType == 'stock' ? <StockNewsListWrapper /> : ''}
		</>
	);
};
