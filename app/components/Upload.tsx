'use client';

import { useState } from 'react';

export default function Upload() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [textFile, setTextFile] = useState<File | null>(null);

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAudioFile(e.target.files?.[0] || null);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFile(e.target.files?.[0] || null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (audioFile && textFile) {
      alert(`已選擇音檔：${audioFile.name} 和 文字稿：${textFile.name}`);
      // 後續你可以把檔案上傳到伺服器
    } else {
      alert('請上傳音檔與文字稿');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label className="block mb-1 font-medium">上傳音檔 (MP3/WAV)</label>
        <input type="file" accept="audio/*" onChange={handleAudioChange} />
      </div>
      <div>
        <label className="block mb-1 font-medium">上傳文字稿 (TXT)</label>
        <input type="file" accept=".txt" onChange={handleTextChange} />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        上傳
      </button>
    </form>
  );
}
