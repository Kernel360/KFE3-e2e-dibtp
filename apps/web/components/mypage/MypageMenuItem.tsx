import { Icon, type IconName } from '@repo/ui/components';
import Link from 'next/link';

export interface MypageMenuItemProps {
  icon: IconName;
  title: string;
  href?: string;
  onClick?: () => void;
}

const MypageMenuItem = ({ icon, title, href, onClick }: MypageMenuItemProps) => {
  const content = (
    <>
      <div className="flex items-center gap-sm">
        <div className="w-8 h-8 flex items-center justify-center">
          <Icon name={icon} size="sm" color="default" />
        </div>
        <div>
          <h3 className="font-style-medium">{title}</h3>
        </div>
      </div>
      <div className="flex items-center">
        <Icon name="ArrowRight" size="sm" color="default" />
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-between py-sm w-full cursor-pointer"
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href!} className="flex items-center justify-between py-sm">
      {content}
    </Link>
  );
};

export default MypageMenuItem;
