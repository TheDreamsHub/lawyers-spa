import { useEffect, useRef } from 'react';

import { HiOutlineCheckCircle } from '@react-icons/all-files/hi/HiOutlineCheckCircle';
import { HiOutlineExclamationCircle } from '@react-icons/all-files/hi/HiOutlineExclamationCircle';


export interface TextAreaV2Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isValid?: boolean;
  hint?: string;
  error?: string;
  startIcon?: JSX.Element;
  limit?: number;
}

export function TextAreaV2({
  hint,
  isValid,
  startIcon,
  error,
  limit,
  ...props
}: TextAreaV2Props): JSX.Element {
  const valueLength = props.value?.toString().length || 0;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);
  const defaultRowsCount = props.rows || 5;

  const getValidationClass = () => {
    switch (isValid) {
      case true:
        return 'outline-none border-2 border-emerald-500 text-emerald-500 !bg-emerald-500 !bg-opacity-5';
      case false:
        return 'outline-none border-2 border-red-500 text-red-500 !bg-red-500 !bg-opacity-5';
      default:
        return 'border-transparent border-2';
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
        return 'text-slate-500 dark:text-slate-300';
    }
  };

  useEffect(() => {
    // auto resize textarea based on the content
    if (limit) {
      if (textareaRef.current && fakeRef.current) {
        const rowHeight = 36;
        const normalHight = defaultRowsCount * rowHeight;
        const numberOfRows = Math.round(
          textareaRef.current.scrollHeight / rowHeight
        );
        const fakeNumberOfRows = Math.round(
          fakeRef.current.scrollHeight / rowHeight
        );
        const hiddenValidationElementHight = fakeRef.current.scrollHeight;

        if (fakeNumberOfRows < defaultRowsCount - 1) {
          textareaRef.current.style.height = `${normalHight}px`;
          textareaRef.current.rows = defaultRowsCount;
        } else if (numberOfRows > defaultRowsCount) {
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
          textareaRef.current.rows = numberOfRows;
        } else if (
          valueLength <= limit &&
          hiddenValidationElementHight <= normalHight
        ) {
          textareaRef.current.style.height = `${normalHight}px`;
          textareaRef.current.rows = defaultRowsCount;
        } else {
          textareaRef.current.style.height = `${normalHight}px`;
          textareaRef.current.rows = defaultRowsCount;
        }
      }
    }
  }, [defaultRowsCount, limit, valueLength]);

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
        <textarea
          {...props}
          ref={textareaRef}
          className={`${getValidationClass()}
          ${limit ? 'resize-none' : ''}
          ${
            startIcon
              ? 'px-12'
              :true
              ? 'pr-4 pl-12'
              : 'pl-4 pr-12'
          } ${limit ? 'pb-10 pt-2' : 'py-2'}
          ${
            props.className ?? ''
          } disabled:bg-muted disabled:border-muted relative z-20 w-full overflow-hidden rounded-xl bg-gray-500/5 text-base leading-7 text-slate-500 ring-0 ring-transparent placeholder:text-slate-500 placeholder:opacity-40 focus:border-2 focus:border-blue-400 focus:outline-none focus:ring-0 focus:ring-transparent disabled:border-opacity-40 disabled:bg-opacity-20  dark:placeholder:text-white`}
          rows={defaultRowsCount}
        />
        {limit && limit > 0 && (
          <div
            className={`absolute inset-0 z-10 my-2 h-full w-full border-2 border-transparent text-transparent ${
              startIcon
                ? 'px-12'
                :true
                ? 'pr-4 pl-12'
                : 'pl-4 pr-12'
            } ${limit ? 'pb-10 pt-2' : 'py-2'}`}
          >
            <div
              dir={props.dir}
              ref={fakeRef}
              className="break-words text-base leading-7 text-transparent"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: (props.value as string)
                    .slice(0, limit)
                    .replaceAll('\n', '<br />\r\n'),
                }}
              ></span>
              <span
                className={`bg-red-500 bg-opacity-30 ${
                  isValid === false
                    ? 'dark:bg-opacity-20'
                    : 'dark:bg-opacity-90'
                }`}
                dangerouslySetInnerHTML={{
                  __html: (props.value as string)
                    .slice(limit, valueLength)
                    .replaceAll('\n', '<br />\r\n'),
                }}
              ></span>
            </div>
          </div>
        )}
        <div
          className={`absolute top-6 flex items-center justify-center space-x-1 ${
           true ? 'left-4' : 'right-4'
          }`}
        >
          {getValidationIcon()}
        </div>
        {limit ? (
          <div
            className={`absolute bottom-6 ${
             true ? 'left-4' : 'right-4'
            } z-30 text-sm text-slate-500 dark:opacity-80`}
          >
            {limit}/
            <span
              className={
                props.value?.toString() && valueLength > limit
                  ? 'text-red-500'
                  : ''
              }
            >
              {valueLength}
            </span>
          </div>
        ) : null}
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
