import StatItem from "./ui/StatItem";

// Reusable stat row (icon + label + value). `s` kept for backwards compat.
const StatCard = ({ s, icon, label, value }) => {
  if (s) {
    return <StatItem icon={s.icon} label={s.label} value={s.value} />;
  }
  return <StatItem icon={icon} label={label} value={value} />;
};

export default StatCard;