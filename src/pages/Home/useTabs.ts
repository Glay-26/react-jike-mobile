import { fetchChannelAPI, type ChannelItem } from '@/apis/list'
import { useState,useEffect } from 'react'
function useTabs() {
const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    // 获取频道数据
    const getChannels = async () => {
      const res = await fetchChannelAPI()
      setChannels(res.data.data.channels)
    }
    getChannels()
  },[])
  return {
    channels
  }
}

export { useTabs }