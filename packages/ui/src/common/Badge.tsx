export const BADGE_VARIANTS = {
  BEST: {
    label: "인기",
    style: "bg-red-500 text-white",
  },
  URGENT: {
    label: "마감임박",
    style: "bg-yellow-500 text-white",
  },
} as const;

export type BadgeKey = keyof typeof BADGE_VARIANTS;

export interface BadgeProps {
  title: BadgeKey;
  className?: string;
}

const Badge = ({ title, className = "" }: BadgeProps) => {
  const { label, style } = BADGE_VARIANTS[title];
  return (
    <span className={`px-3 py-1 rounded-full text-sm ${style} ${className}`}>
      {label}
    </span>
  );
};

export default Badge;
