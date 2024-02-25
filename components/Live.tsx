import LiveCursors from './cursor/LiveCursors'
import { useOthers } from '@/liveblocks.config'

const Live = () => {
    const others = useOthers();
  return (
    <LiveCursors others={others}/>
  )
}

export default Live