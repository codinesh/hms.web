import Image from 'next/image'

export default function Example() {
  return (
    <div className='w-full flex flex-col'>
      <h1 className='animate-pulse'>sample image...</h1>
      <div>
        <img src='dashboard.jpg' />
        {/*  <Image
          width={400}
          height={600}
          src={homeimg}
          alt='Picture of the author'
        /> */}
      </div>
    </div>
  )
}
