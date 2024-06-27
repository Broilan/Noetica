import React, { useState, useCallback, useImperativeHandle, forwardRef, useEffect } from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  message: string;
}

export interface AlertRef {
  openAlert: (type: 'success' | 'error' | 'info', message: string) => void;
}

const Alert = forwardRef<AlertRef, AlertProps>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'success' | 'error' | 'info'>(props.type);
  const [message, setMessage] = useState(props.message);
  const [isClosing, setIsClosing] = useState(false);

  const openAlert = useCallback((newType: 'success' | 'error' | 'info', newMessage: string) => {
    setType(newType);
    setMessage(newMessage);
    setIsOpen(true);
    setIsClosing(false);
  }, []);

  const closeAlert = useCallback(() => {
    setIsClosing(true);
  }, []);

  useImperativeHandle(ref, () => ({
    openAlert
  }));

  useEffect(() => {
    if (isOpen && type !== 'info') {
      const timer = setTimeout(() => {
        closeAlert();
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, closeAlert, type]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 500); // 0.5 seconds for fade-out animation

      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-auto max-w-sm mx-auto my-6">
        <div className={`relative flex opacity-90 flex-col w-full ${getBackgroundColor()} border-0 rounded-lg shadow-lg outline-none focus:outline-none`}>
          <div className="flex items-start justify-between p-2 border-b border-solid border-gray-200 rounded-t">
            <h3 className="text-2xl font-semibold text-white">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeAlert}
            >
              <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="flex items-center">
              <p className="ml-3 text-white text-lg">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Alert;