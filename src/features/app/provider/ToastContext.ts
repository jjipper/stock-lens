import { createContext } from 'react';

export const ToastContext = createContext<{
	toasts: { id: string; message: string }[];
	addToast: (message: string) => void;
	removeToast: (id: string) => void;
} | null>(null);
