import React from 'react'
import { createPortal } from 'react-dom'

export default function ConfirmModal({message, onConfirm, onCancel}) {
  return createPortal(
    <div
  className="
    fixed inset-0 z-50
    flex items-center justify-center
    bg-black/60
    backdrop-blur-sm
    p-4
  "
>
  <div
    className="
      w-full max-w-md
      rounded-2xl
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      shadow-2xl
      p-6
    "
  >
    <p
      className="
        text-lg font-semibold
        text-gray-900 dark:text-gray-100
        mb-6
      "
    >
      {message}
    </p>

    <div className="flex justify-end gap-3">
      <button
        onClick={onCancel}
        className="
          px-4 py-2
          rounded-lg
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-gray-700 dark:text-gray-200
          hover:bg-gray-100 dark:hover:bg-gray-600
          transition-colors
        "
      >
        Cancel
      </button>

      <button
        onClick={onConfirm}
        className="
          px-4 py-2
          rounded-lg
          bg-red-600
          text-white
          font-medium
          hover:bg-red-700
          transition-colors
        "
      >
        Delete
      </button>
    </div>
  </div>
</div>,
    document.body,
  )
}
