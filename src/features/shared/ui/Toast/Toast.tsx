import { Portal } from '../Portal/Portal';

type toastType = 'addMyStock' | 'removeMyStock';

interface toastTypeProps {
	styles: string;
	message: string;
}

const toastTypeMeta = {
	addMyStock: {
		styles: 'bg-blue-100 border-primary text-primary',
		message: '관심 종목에 추가되었습니다.',
	},
	removeMyStock: {
		styles: 'bg-red-100 border-red-600 text-red-600',
		message: '관심 종목에서 삭제되었습니다.',
	},
} as const satisfies Record<toastType, toastTypeProps>;

export const Toast = ({ type }: { type: toastType }) => {
	const toastType = toastTypeMeta[type];
	// TODO: toast 애니메이션 추가
	// const [showToast, setShowToast] = useState(false);

	return (
		<Portal>
			{/* TODO: 케이스별 z-index 고민 (모달 앞, 모달 뒤) */}
			<div
				className={`fixed bottom-8 left-8 z-[40] rounded-lg border px-6 py-3 transition-opacity ${toastType.styles} `}
			>
				<p>{toastType.message}</p>
			</div>
		</Portal>
	);
};
