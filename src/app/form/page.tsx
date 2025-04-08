// app/form/page.tsx
'use client';

import { useState } from 'react';
import { API } from 'aws-amplify/api';
import { graphqlOperation } from 'aws-amplify/utils';
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto p-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="名前" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="メール" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="メッセージ" />
      <button type="submit" className="bg-blue-500 text-white p-2">送信</button>
    </form>
  );
}
