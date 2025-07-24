'use client';

import { Player } from '@lottiefiles/react-lottie-player';

export default function Lottie404() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'>
        <Player
          autoplay
          loop
          src="/loties/404 error.json"
          style={{ height: '600px', width: '600px', margin: '0 auto' }}
        />
    </div>
  );
}
