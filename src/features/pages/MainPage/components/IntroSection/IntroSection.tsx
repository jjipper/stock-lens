import { MovingIcon } from 'features/shared';

export const IntroSection = () => {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl bg-linear-to-br from-primary to-primary-dark px-6 py-8">
      <div className="flex items-center gap-2">
        <MovingIcon className="text-white opacity-90" sx={{ fontSize: 24 }} />
        <span className="text-lg font-normal text-white opacity-90">Today's Market</span>
      </div>
      <h2 className="text-3xl font-semibold text-white">Check out the trending issues today</h2>
      <p className="text-base font-normal text-white opacity-70">
        The easiest way to understand stocks through issues
      </p>
    </div>
  );
};
