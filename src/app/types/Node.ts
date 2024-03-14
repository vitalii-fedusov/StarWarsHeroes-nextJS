
export type Node = {
  id: string,
  sourcePosition?: Position,
  type?: string,
  data?: { label: string },
  position: { x: number, y: number },
  targetPosition?: Position,
}

type Position = 'top' | 'right' | 'bottom' | 'left';
