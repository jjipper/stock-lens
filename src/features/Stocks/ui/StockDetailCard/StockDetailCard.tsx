import { Button, formatNumber, formatPercentage } from 'features/shared';
import type { StockCardProps } from 'features/types/types';
import { useState } from 'react';

import { PeriodReturnStats } from '../PeriodReturnStats/PeriodReturnStats';
import { PriceRangeStats } from '../PriceRangeStats/PriceRangeStats';

export const StockDetailCard = ({
	name,
	ticker,
	mainIssue,
	price,
	percentage,
}: StockCardProps) => {
	const [period, setPeriod] = useState<'week' | 'month'>('week');
	const formattedPrice = formatNumber(price);

	return (
		<article className="w-full rounded-xl border border-gray-200 bg-white p-6">
			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl font-bold text-gray-900">{name}</h2>
					<p className="text-sm font-medium text-gray-500">{ticker}</p>
				</div>
				<div className="flex flex-col justify-end gap-0.5">
					<p className="text-xl font-bold text-gray-900">{formattedPrice}원</p>
					{formatPercentage(percentage)}
				</div>
			</div>

			<div className="mt-4 flex gap-2">
				<button
					type="button"
					onClick={() => setPeriod('week')}
					className={`h-8 cursor-pointer rounded-lg px-3 py-1 text-sm transition-colors ${
						period === 'week'
							? 'bg-primary text-white'
							: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
					}`}
				>
					1주
				</button>
				<button
					type="button"
					onClick={() => setPeriod('month')}
					className={`h-8 cursor-pointer rounded-lg px-3 py-1 text-sm transition-colors ${
						period === 'month'
							? 'bg-primary text-white'
							: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
					}`}
				>
					1개월
				</button>
			</div>

			<section className="mt-4">
				<div className="relative flex h-26 items-center justify-center overflow-hidden rounded-xl bg-gray-50 pr-6">
					<svg
						width="100%"
						height="60"
						viewBox="0 0 240 60"
						fill="none"
						preserveAspectRatio="none"
						className="h-[60px] w-full"
					>
						<polyline
							points="0,55 15,58 30,51 45,45 60,47 75,43 90,37 105,31 120,25 135,19 150,23 165,30 180,34 195,28 210,32 225,38 240,41"
							fill="none"
							stroke="#dc2626"
							strokeWidth="2"
							strokeLinejoin="round"
							strokeLinecap="round"
						/>
					</svg>
				</div>

				<div className="mt-4 flex flex-wrap gap-3">
					<PriceRangeStats title={'변동폭'} price={20000} color={'black'} />
					<PriceRangeStats title={'최저'} price={195000} color={'blue'} />
					<PriceRangeStats title={'최고'} price={215000} color={'red'} />
				</div>

				<div className="mt-4 flex flex-wrap gap-3">
					<PeriodReturnStats title={'1주'} percentage={8.5} color={'red'} />
					<PeriodReturnStats title={'1개월'} percentage={15.3} color={'red'} />
				</div>
			</section>

			<section className="mt-4 rounded-md bg-gray-100 p-4 px-5">
				<h3 className="text-xs font-medium text-gray-500">핵심 이슈 요약</h3>
				<p className="text-md mt-2 font-medium text-gray-900">
					{mainIssue ?? '핵심 이슈 데이터가 없습니다.'}
				</p>
			</section>

			<div className="mt-6">
				<Button variant="primary" size="md" width="full">
					+ 관심 종목 추가
				</Button>
			</div>
		</article>
	);
};
