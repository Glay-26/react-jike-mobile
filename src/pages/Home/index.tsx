import './style.css'
import { Tabs } from 'antd-mobile'
import { fetchChannelAPI, type ChannelItem } from '@/apis/list'
import { useState,useEffect } from 'react'
const Home = () => {
  const [channels, setChannels] = useState<ChannelItem[]>([])
  useEffect(() => {
    // 获取频道数据
    const getChannels = async () => {
      const res = await fetchChannelAPI()
      setChannels(res.data.data.channels)
    }
    getChannels()
  },[])
  return <div className='tabContainer'>
    <Tabs>
      {channels.map((item)=>{
        return <Tabs.Tab title={item.name} key={item.id}>
          </Tabs.Tab>
      })}
        </Tabs>
  </div>
}

export default Home