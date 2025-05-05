'use client'

import { useRef, useState } from 'react'

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button onClick={togglePlay} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}
