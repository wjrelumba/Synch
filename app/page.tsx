import Image from 'next/image'
import GetData from './api/getdata'
import DataSender from './components/dataSender'

export default function Home() {
  return (
    <>
    <GetData />
    <DataSender />
    </>
  )
}
