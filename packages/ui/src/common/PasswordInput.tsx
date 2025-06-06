import { useState } from "react";

interface AuthInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  LeftIcon?: React.ElementType;
  PasswordEyeIcon?: React.ElementType;
}

export default function PasswordInput({
  text,
  setText,
  LeftIcon,
  PasswordEyeIcon,
}: AuthInputProps) {
  const [watchPassword, setWatchPassword] = useState<boolean>(false);
  const textBaseClassName =
    "w-full h-full py-[16px] text-base shadow-xl rounded-xl";
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
        type={watchPassword ? "text" : "password"}
        className={
          LeftIcon
            ? `${textBaseClassName} pl-[55px]`
            : `${textBaseClassName} pl-[15px]`
        }
        placeholder={LeftIcon ? "비밀번호" : "점8개"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
