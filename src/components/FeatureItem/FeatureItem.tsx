import React from "react";

interface FeatureItemProps {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  label,
  icon: Icon,
  iconClassName = "",
}) => {
  return (
    <span className="flex items-center gap-1">
      <Icon className={`w-4 h-4 ${iconClassName}`} />
      {label}
    </span>
  );
};

export default FeatureItem;
