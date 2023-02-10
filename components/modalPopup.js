import React from "react";

export default function ModalPopup({
  kembalian,
  open,
  setOpen,
  type,
  message,
}) {
  let Kembalian = "IDR " + kembalian.toLocaleString("id-ID");
  return (
    <div
      className={`relative z-10 ${open ? "block" : "hidden"}`}
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div
                  className={`${
                    type != "success" ? "bg-red-100" : "bg-green-100"
                  } mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10`}>
                  <svg
                    className={`h-6 w-6 ${
                      type != "success" ? "text-red-600" : "text-green-600"
                    }}`}
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                    />
                  </svg>
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3 className='text-sm text-gray-500' id='modal-title'>
                    {type != "success"
                      ? "Error"
                      : "Success, Amount of Change is :"}
                  </h3>
                  <div className='mt-2'>
                    <p className='text-lg font-medium leading-6 text-gray-900 '>
                      {type != "success" ? message : Kembalian}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                onClick={() => setOpen(false)}
                type='button'
                className={`${
                  type != "success"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                } inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}>
                Ok, Thank You
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
