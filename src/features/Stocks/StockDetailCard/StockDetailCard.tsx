import { Button, TrendingDownIcon, TrendingUpIcon } from 'features/shared';
import type { StockDetailCardProps } from 'features/types/types';
import { useState } from 'react';

import { PeriodReturnStats } from '../PeriodReturnStats/PeriodReturnStats';
import { PriceRangeStats } from '../PriceRangeStats/PriceRangeStats';

const TEMP_DETAIL_METRICS = {
	priceRange: 20000,
	lowPrice: 195000,
	highPrice: 215000,
	weekReturn: 8.5,
	monthReturn: 15.3,
};

export const StockDetailCard = ({
	name,
	ticker,
	mainIssue,
	price,
	percentage,
	priceRange = TEMP_DETAIL_METRICS.priceRange,
	lowPrice = TEMP_DETAIL_METRICS.lowPrice,
	highPrice = TEMP_DETAIL_METRICS.highPrice,
	weekReturn = TEMP_DETAIL_METRICS.weekReturn,
	monthReturn = TEMP_DETAIL_METRICS.monthReturn,
}: StockDetailCardProps) => {
	const [period, setPeriod] = useState<'week' | 'month'>('week');
	const isUp = percentage > 0;
	const directionText = isUp ? '상승' : '하락';
	const absPercentage = Math.abs(percentage);
	const formattedPrice = `${price.toLocaleString('ko-KR')}원`;

	return (
		<article className="w-full rounded-xl border border-gray-200 bg-white p-6">
			<div className="flex items-start justify-between">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl font-bold text-gray-900">{name}</h2>
					<p className="text-sm font-medium text-gray-500">{ticker}</p>
				</div>
				<div className="flex flex-col justify-end gap-0.5">
					<p className="text-xl font-bold text-gray-900">{formattedPrice}</p>
					<p
						className={`flex items-center justify-end text-sm font-bold ${
							isUp ? 'text-red-600' : 'text-blue-600'
						}`}
					>
						{isUp ? (
							<TrendingUpIcon
								sx={{ fontSize: 16, color: 'currentColor' }}
								aria-hidden
							/>
						) : (
							<TrendingDownIcon
								sx={{ fontSize: 16, color: 'currentColor' }}
								aria-hidden
							/>
						)}
						<span className="ml-1" aria-hidden>
							{isUp ? '+' : '-'}
						</span>
						<span>{absPercentage}%</span>
						<span className="sr-only">{directionText}</span>
					</p>
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

				<PeriodReturnStats weekReturn={weekReturn} monthReturn={monthReturn} />
			</section>

			<section className="mt-4 rounded-md bg-gray-100 p-4 px-5">
				<h3 className="text-xs font-medium text-gray-500">핵심 이슈 요약</h3>
				<p className="text-md mt-2 font-medium text-gray-900">
					{mainIssue ?? '핵심 이슈 데이터가 없습니다.'}
				</p>
			</section>

			<div className="mt-6 grid grid-cols-2 gap-3">
				<Button
					size="lg"
					className="w-full !border-none !bg-gray-100 !py-3 !text-base !font-bold !text-gray-700"
				>
					나중에 보기
				</Button>
				<Button
					variant="primary"
					size="lg"
					className="w-full !bg-[#0b1634] !py-3 !text-base !font-bold"
				>
					+ 관심 종목 추가
				</Button>
			</div>
		</article>
	);
};
