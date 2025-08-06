import { cn } from '@repo/ui/utils/cn';

import { AlarmButton, BackButton, RegionLabel, SearchButton } from '../header-icon';

import HeaderContainer from './HeaderContainer';

export interface TopNavigationProps {
  title: string;
  showTitle: boolean;
  showRegion?: boolean;
  showBackButton: boolean;
  showSearchButton: boolean;
  showAlarmButton: boolean;
}

const TopNavigation = ({
  title,
  showTitle = true,
  showRegion = false,
  showBackButton,
  showSearchButton,
  showAlarmButton,
}: TopNavigationProps) => {
  return (
    <HeaderContainer className="relative">
      <h1 className={cn('font-style-headline-h5', !showTitle && 'sr-only')}>{title}</h1>

      <div className="flex gap-sm absolute left-[var(--space-container)]">
        {showBackButton && <BackButton />}
        {showRegion && <RegionLabel />}
      </div>

      <div className="flex gap-sm absolute right-[var(--space-container)]">
        {showSearchButton && <SearchButton />}
        {showAlarmButton && <AlarmButton />}
      </div>
    </HeaderContainer>
  );
};

export default TopNavigation;
