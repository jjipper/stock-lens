const SectionHeader = ({
  title,
  updateTime,
}: {
  title: string;
  updateTime?: string;
}) => {
  return (
    <div className="flex w-full items-end justify-between">
      <h4 className="text-2xl font-semibold">{title}</h4>
      {updateTime && (
        <p className="text-sm text-gray-400">Last update: {updateTime}</p>
      )}
    </div>
  );
};

export { SectionHeader };
