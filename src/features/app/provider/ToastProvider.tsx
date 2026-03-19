import { type ReactNode, useState } from 'react';

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

	return (
		<ToastContext.Provider value={{ toasts, addToast }}>
			{children}
		</ToastContext.Provider>
	);
};
