import { useCallback, useRef } from 'react';

const TOAST_DURATION = 1000;

interface Timer {
	timerId?: ReturnType<typeof setTimeout>;
	remain: number;
	start: number;
}

export const useToastTimer = (onExpire: (id: string) => void) => {
	const timers = useRef<Map<string, Timer>>(new Map());
	const paused = useRef(false);

	const start = useCallback(
		(id: string) => {
			const t = timers.current.get(id);
			if (!t) return;
			t.start = Date.now();
			t.timerId = setTimeout(() => {
				timers.current.delete(id);
				onExpire(id);
			}, t.remain);
		},
		[onExpire],
	);

	const register = useCallback(
		(id: string) => {
			if (timers.current.has(id)) return;
			timers.current.set(id, { remain: TOAST_DURATION, start: Date.now() });
			if (!paused.current) start(id);
		},
		[start],
	);

	const unregister = (id: string) => {
		const t = timers.current.get(id);
		if (t) clearTimeout(t.timerId);
		timers.current.delete(id);

		if (timers.current.size === 0) {
			paused.current = false;
		}
	};

	const pauseAll = () => {
		paused.current = true;
		for (const t of timers.current.values()) {
			clearTimeout(t.timerId);
			t.remain -= Date.now() - t.start;
		}
	};

	const resumeAll = () => {
		paused.current = false;
		for (const id of timers.current.keys()) start(id);
	};

	return { register, unregister, pauseAll, resumeAll };
};
