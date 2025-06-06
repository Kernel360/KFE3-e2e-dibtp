import { useState } from "react";

interface AuthInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  LeftIcon?: () => React.ReactNode;
  PasswordEyeIcon?: () => React.ReactNode;
  placeHolder?: string;
}

export default function AuthInput({
  text,
  setText,
  LeftIcon,
  PasswordEyeIcon,
  placeHolder,
}: AuthInputProps) {
  const [watchPassword, setWatchPassword] = useState<boolean>(false);
  const textBaseClassName =
    "w-full h-full pt-[16px] text-base shadow-xl rounded-xl";
  return (
    <div className="relative w-[343px] h-[48px]">
      {LeftIcon && (
        <div className="absolute top-[15px] left-[22px]">
          <LeftIcon />
        </div>
      )}
      {PasswordEyeIcon && (
        <button
          onClick={() => setWatchPassword((watchPassword) => !watchPassword)}
          className="absolute top-[15px] right-[20px] hover:cursor-pointer"
        >
          <PasswordEyeIcon />
        </button>
      )}

      <input
        //FIXME - 텍스트 위치 이상함
        type={watchPassword ? "text" : "password"}
        className={
          LeftIcon
            ? `${textBaseClassName} pl-[55px]`
            : `${textBaseClassName} pl-[15px]`
        }
        placeholder={placeHolder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
