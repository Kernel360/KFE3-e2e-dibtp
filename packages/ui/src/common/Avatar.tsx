export interface AvatarProps {
  src?: string;
  alt: string;
  size: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Avatar = ({ src, alt, size, className = "" }: AvatarProps) => {
  const generateAvatar = (name: string) => {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${name}`;
  };

  const imageSrc = src || generateAvatar(alt);

  const sizeClass = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-11 h-11",
    xl: "w-12 h-12",
  };

  const sizePx = {
    sm: 24,
    md: 32,
    lg: 44,
    xl: 48,
  };

  return (
    <div
      className={`rounded-full overflow-hidden border border-gray-300 ${sizeClass[size]} ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        width={sizePx[size]}
        height={sizePx[size]}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Avatar;
