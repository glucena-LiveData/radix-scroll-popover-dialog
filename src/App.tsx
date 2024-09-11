import * as Tooltip from '@radix-ui/react-tooltip';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useRef } from 'react';

export function App() {
  const scrollRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 10, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div ref={scrollRef} className="flex space-x-2 overflow-x-auto">
        {Array.from({ length: 100 }).map((_, index) => (
          <Square key={index} index={index} />
        ))}
      </div>
    </div>
  )
}

function Square({ index }: { index: number }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="w-10 h-10 bg-blue-500 hover:cursor-pointer flex items-center justify-center">
              {index}
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
              <Dialog.Title className="text-lg font-bold">Dialog Title</Dialog.Title>
              <Dialog.Description className="mt-2">This is the dialog content for square {index}.</Dialog.Description>
              <Dialog.Close className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="bg-black text-white p-2 rounded" side="top" align="center">
          My index is {index}
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
