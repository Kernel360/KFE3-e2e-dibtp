import { useState } from 'react';

export interface InputProps {
  label?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  error?: string;
  leftIcon?: 'email' | 'password';
  disabled?: boolean;
  required?: boolean;
}

export const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  leftIcon,
  disabled = false,
  required = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // 비밀번호 보기/숨기기 토글
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // 실제 input type 결정
  const inputType = type === 'password' && showPassword ? 'text' : type;

  // 왼쪽 아이콘 렌더링 (SVG로 직접 구현)
  const renderLeftIcon = () => {
    if (leftIcon === 'email') {
      return (
        <svg
          className="w-5 h-5 text-[var(--color-neutral-60)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    }
    if (leftIcon === 'password') {
      return (
        <svg
          className="w-5 h-5 text-[var(--color-neutral-60)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* 라벨 */}
      {label && (
        <label className="block text-sm font-medium text-[var(--color-neutral-70)] mb-2">
          {label}
          {required && <span className="text-[var(--color-red-500)] ml-1">*</span>}
        </label>
      )}

      {/* 입력 필드 컨테이너 */}
      <div className="relative">
        <div
          className={`
            flex items-center border rounded-lg px-3 py-2
            ${error ? 'text-[var(--color-red-500)]' : 'text-[var(--color-neutral-30)]'}
            ${disabled ? 'bg-[var(--color-neutral-20)]' : 'bg-[var(--color-neutral-0)]'}
            focus-within:ring-1
            ${error ? 'focus-within:ring-[var(--color-red-500)]' : 'focus-within:ring-[var(--color-primary-800)]'}
            ${error ? 'focus-within:text-[var(--color-red-500)]' : 'focus-within:text-[var(--color-primary-800)]'}
          `}
        >
          {/* 왼쪽 아이콘 */}
          {leftIcon && <div className="mr-3">{renderLeftIcon()}</div>}

          {/* 실제 입력 필드 */}
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="flex-1 bg-transparent border-0 outline-none placeholder-[var(--color-neutral-80)]disabled:cursor-not-allowed"
            {...props}
          />

          {/* 비밀번호 보기/숨기기 버튼 */}
          {type === 'password' && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="ml-3 text-[var(--color-neutral-60)] hover:text-[var(--color-neutral-80)]"
              disabled={disabled}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* 에러 메시지 */}
        {error && <p className="mt-1 text-sm text-[var(--color-red-500)]">{error}</p>}
      </div>
    </div>
  );
};
