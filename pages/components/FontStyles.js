export const SectionTitle = ({ title }) => {
  return (
    <div className="flex space-x-4 items-center">
      <span className="w-1/5 h-2 bg-sec"></span>
      <h4 className="text-2xl font-heading font-medium text-sec">{title}</h4>
    </div>
  );
};
export const Paragraph = ({ title, color, align }) => {
  return (
    <p className={`text-${align} font-body text-base text-${color}`}>{title}</p>
  );
};
