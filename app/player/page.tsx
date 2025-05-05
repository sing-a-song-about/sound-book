import AudioPlayer from '@/components/AudioPlayer'

export default function PlayerPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">播放音檔</h1>
      <AudioPlayer src="/audio/sample.mp3" />
    </main>
  )
}
