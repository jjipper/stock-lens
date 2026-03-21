import { Portal } from '../Portal/Portal';
import { useToast } from './useToast';

export const Toast = () => {
	const { toasts, removeToast } = useToast();

	if (toasts.length === 0) {
		return null;
	}

	return (
		<Portal>
			<div
				aria-live="polite"
				aria-atomic="true"
				className="pointer-events-none fixed inset-x-0 right-5 bottom-5 z-100 mx-auto flex flex-col items-end gap-2 px-4 sm:px-6 lg:px-8"
			>
				{toasts.map((toast) => {
					return (
						<div
							key={toast.id}
							role="status"
							className="toast-enter border-primary/18 pointer-events-auto flex min-w-64 cursor-pointer items-start gap-3 rounded-2xl border bg-white/80 px-4 py-3 text-sm font-medium text-slate-800 backdrop-blur-xl transition-colors duration-300 hover:bg-white/90"
							onClick={() => removeToast(toast.id)}
						>
							<p className="leading-5">{toast.message}</p>
						</div>
					);
				})}
			</div>
		</Portal>
	);
};
