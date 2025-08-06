import { Icon } from '@ui/components';

export interface FormMessageProps {
  id?: string;
  type: 'error' | 'success' | 'helper';
  children: React.ReactNode;
}

export const FormMessage = ({ id, type, children }: FormMessageProps) => {
  if (type === 'error') {
    return (
      <p id={id} role="alert" className="mt-xs font-style-small text-text-error">
        {children}
      </p>
    );
  }

  if (type === 'success') {
    return (
      <div className="mt-xs flex items-center gap-xs">
        <Icon name="CheckCircleFill" className="w-4 h-4 text-text-success" />
        <span className="font-style-small text-text-success">{children}</span>
      </div>
    );
  }

  if (type === 'helper') {
    return (
      <p id={id} className="mt-xs font-style-small text-text-info flex items-center gap-xs">
        <Icon name="InfoFill" className="w-4 h-4" />
        {children}
      </p>
    );
  }

  return null;
};
