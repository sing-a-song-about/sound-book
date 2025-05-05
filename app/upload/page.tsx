'use client'

import { useState } from 'react'

export default function UploadPage() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [transcriptText, setTranscriptText] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!audioFile || !transcriptText.trim()) {
      alert('請上傳音檔並輸入文字稿')
      return
    }

    // 這裡可以改成送出到 API 或 Supabase
    console.log('音檔:', audioFile)
    console.log('文字稿:', transcriptText)
  }

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">上傳有聲書素材</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 音檔上傳 */}
        <div>
          <label className="block mb-1 font-medium">音檔（MP3）</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
            className="block w-full"
          />
        </div>

        {/* 文字稿輸入 */}
        <div>
          <label className="block mb-1 font-medium">文字稿</label>
          <textarea
            rows={6}
            value={transcriptText}
            onChange={(e) => setTranscriptText(e.target.value)}
            placeholder="請輸入文字稿內容..."
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* 送出按鈕 */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          上傳並處理
        </button>
      </form>
    </main>
  )
}
