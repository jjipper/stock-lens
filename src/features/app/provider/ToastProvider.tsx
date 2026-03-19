import { type ReactNode, useEffect, useState } from 'react';

import { ToastContext } from './ToastContext';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);

	const addToast = (message: string) => {
		const id = crypto.randomUUID();
		setToasts((prev) => [
			...prev,
			{
				id,
				message,
			},
		]);
	};

	const removeToast = (id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	};

	useEffect(() => {
		if (!toasts) return;

		const timer = setTimeout(() => {
			removeToast(toasts[0].id);
		}, 1000);

		return () => clearTimeout(timer);
	}, [toasts]);

	return (
		<ToastContext.Provider value={{ toasts, addToast, removeToast }}>
			{children}
		</ToastContext.Provider>
	);
};
