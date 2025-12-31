import './style.css'
import { Tabs } from 'antd-mobile'
import { useTabs } from './useTabs'
const Home = () => {
  const { channels } = useTabs()
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