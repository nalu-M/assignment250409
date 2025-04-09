'use client';

import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createFormEntry } from '@/graphql/mutations';

export default function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.graphql(graphqlOperation(createFormEntry, { input: formData }));
      alert('送信完了！');
    } catch (err) {
      console.error('送信失敗:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md w-full p-4 bg-white shadow-md rounded">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="名前"
          required
          className="border p-2 rounded"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="メール"
          required
          className="border p-2 rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="メッセージ"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          送信
        </button>
      </form>
    </div>
  );
}
