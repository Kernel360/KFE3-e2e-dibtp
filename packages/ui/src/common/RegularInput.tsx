interface AuthInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  LeftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
  RightIconFunc?: () => void;
  placeHolder?: string;
  widthSize: "md" | "lg" | "xl";
  heightSize: "md" | "lg";
}

export default function RegularInput({
  text,
  setText,
  LeftIcon,
  RightIcon,
  RightIconFunc,
  placeHolder,
  widthSize,
  heightSize,
}: AuthInputProps) {
  const textBaseClassName =
    "w-full h-full py-[16px] text-base shadow-xl rounded-xl";

  const width = { md: "w-[225px]", lg: "w-[343px]", xl: "w-[355px]" };
  const height = { md: "h-[34px]", lg: "h-[48px]" };

  return (
    <div className={`relative ${width[widthSize]} ${height[heightSize]}`}>
      {LeftIcon && (
        <div className="absolute top-[15px] left-[22px]">
          <LeftIcon />
        </div>
      )}
      {RightIcon && (
        <button
          onClick={RightIconFunc}
          className="absolute top-[15px] right-[20px] hover:cursor-pointer"
        >
          <RightIcon />
        </button>
      )}

      <input
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
