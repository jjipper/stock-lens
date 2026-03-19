import { Button, formatNumber, formatPercentage } from 'features/shared';
import { useToast } from 'features/shared/ui/Toast/useToast';
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
	const { addToast } = useToast();

	const getPeriodButtonClass = (targetPeriod: 'week' | 'month') =>
		`h-9 cursor-pointer rounded-xl border px-3 py-1 text-sm font-medium transition-all duration-300 ${
			period === targetPeriod
				? 'border-primary/75 bg-primary text-white shadow-soft'
				: 'border-slate-200/80 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50'
		}`;

	return (
		<article className="motion-fade-up rounded-panel shadow-card w-full border border-slate-200/80 bg-white/92 p-5 sm:p-6">
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div className="flex flex-col gap-1">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-900">
						{name}
					</h2>
					<p className="text-sm font-medium text-slate-500">{ticker}</p>
				</div>
				<div className="flex flex-col justify-end gap-0.5">
					<p className="text-2xl font-semibold tracking-tight text-slate-900">
						{formattedPrice}원
					</p>
					{formatPercentage(percentage)}
				</div>
			</div>

			<div className="mt-5 flex gap-2">
				<button
					type="button"
					onClick={() => setPeriod('week')}
					className={getPeriodButtonClass('week')}
				>
					1주
				</button>
				<button
					type="button"
					onClick={() => setPeriod('month')}
					className={getPeriodButtonClass('month')}
				>
					1개월
				</button>
			</div>

			<section className="mt-4">
				<div className="relative flex h-26 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-linear-to-br from-slate-50 to-blue-50/80 pr-6">
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
							stroke="#0b63f6"
							strokeWidth="2.5"
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

			<section className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-5 py-4">
				<h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
					핵심 이슈 요약
				</h3>
				<p className="mt-2 text-base font-medium text-slate-800">
					{mainIssue ?? '핵심 이슈 데이터가 없습니다.'}
				</p>
			</section>

			<div className="mt-6">
				<Button
					variant="primary"
					size="md"
					width="full"
					onClick={() => addToast('관심 종목이 추가되었습니다.')}
				>
					+ 관심 종목 추가
				</Button>
			</div>
		</article>
	);
};
