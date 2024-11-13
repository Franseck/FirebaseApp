import React from 'react'

const Toast = () => {
  return (
    <div class="shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] text-black flex w-max max-w-sm rounded-md overflow-hidden"
    role="alert">
    <div class="flex items-center justify-center w-14 h-14 bg-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 shrink-0 fill-white inline" viewBox="0 0 512 512">
            <ellipse cx="256" cy="256" data-original="#000" rx="256" ry="255.832" />
            <path class="fill-green-500"
                d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                data-original="#000" />
        </svg>
    </div>

    <div class="py-2 mx-4">
        <p class="text-sm font-semibold">Update successfully</p>
        <p class="text-xs text-gray-400 mt-0.5">Some important information will appear here</p>
    </div>
</div>
  )
}

export default Toast