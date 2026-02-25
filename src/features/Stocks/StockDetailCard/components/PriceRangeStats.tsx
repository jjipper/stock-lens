interface PriceRangeStatsProps {
  priceRange: number;
  lowPrice: number;
  highPrice: number;
}

const formatPrice = (price: number) => `${price.toLocaleString('ko-KR')}원`;

export const PriceRangeStats = ({
  priceRange,
  lowPrice,
  highPrice,
}: PriceRangeStatsProps) => {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <span className="inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2">
        <span className="text-lg font-medium text-gray-600 md:text-xl">변동폭</span>
        <span className="text-2xl font-bold text-gray-800 md:text-3xl">
          {formatPrice(priceRange)}
        </span>
      </span>
      <span className="inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2">
        <span className="text-lg font-medium text-gray-600 md:text-xl">최저</span>
        <span className="text-2xl font-bold text-blue-600 md:text-3xl">
          {formatPrice(lowPrice)}
        </span>
      </span>
      <span className="inline-flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-2">
        <span className="text-lg font-medium text-gray-600 md:text-xl">최고</span>
        <span className="text-2xl font-bold text-red-600 md:text-3xl">
          {formatPrice(highPrice)}
        </span>
      </span>
    </div>
  );
};
