import { HiOutlineCheckCircle } from '@react-icons/all-files/hi/HiOutlineCheckCircle';
import { HiOutlineExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';


export interface InputFieldV2Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  hint?: string;
  error?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export function InputFieldV2({
  hint,
  error,
  isValid,
  startIcon,
  endIcon,
  ...props
}: InputFieldV2Props): JSX.Element {
 

  const getValidationPaddingClass = () => {
    switch (isValid) {
      case true:
        return true ? 'pr-4 pl-10' : 'pl-4 pr-10';
      case false:
        return true ? 'pr-4 pl-10' : 'pl-4 pr-10';
      default:
        return 'px-4';
    }
  };

  const getValidationIcon = () => {
    switch (isValid) {
      case true:
        return <HiOutlineCheckCircle className="text-base text-emerald-500" />;
      case false:
        return (
          <HiOutlineExclamationCircle className="text-base text-red-500" />
        );
      default:
        return;
    }
  };

  const getErrorClass = () => {
    switch (isValid) {
      case true:
        return 'text-emerald-500';
      case false:
        return 'text-red-500';
      default:
        return '';
    }
  };

  return (
    <div className={`mb-2 w-full ${props.disabled ? 'opacity-40' : ''}`}>
      {props['aria-label'] && (
        <label className={`mb-2 block text-sm ${getErrorClass()}`}>
          {props['aria-label']}
        </label>
      )}

      <div className="relative py-2">
        {Boolean(startIcon) && (
          <div
            className={`absolute top-6 ${
              false ? 'left-4' : 'right-4'
            }`}
          >
            {startIcon}
          </div>
        )}
        <input
          {...props}
          className={`w-full  rounded-sm bg-[#64748B0D] h-10 text-slate-500
          ${props.className ?? ''}
          ${startIcon ? 'px-12' : getValidationPaddingClass()}
          `}
        />
        <div
          className={`absolute top-6 flex items-center justify-center space-x-1 ${
            true ? 'left-4' : 'right-4'
          }`}
        >
          {endIcon}
          {getValidationIcon()}
        </div>
      </div>
      {hint && (
        <p className="text-xs text-slate-400 opacity-60 dark:text-slate-300">
          {hint}
        </p>
      )}
      {error && <p className={`text-xs ${getErrorClass()}`}>{error}</p>}
    </div>
  );
}
