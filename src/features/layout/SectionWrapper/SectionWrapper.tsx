import type { ReactNode } from 'react';

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

export { SectionWrapper };
