import * as Tooltip from '@radix-ui/react-tooltip';

export function App() {
  return (
    <div className="w-[5000px] h-screen bg-red-600 flex items-center">
      <div className="flex space-x-2">
        {Array.from({ length: 50 }).map((_, index) => (
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
        <div key={index} className="w-10 h-10 bg-blue-500 hover:cursor-pointer flex items-center justify-center">{index}</div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className="bg-black text-white p-2 rounded">
          My index is {index}
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
