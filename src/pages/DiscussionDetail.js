import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbUpIcon, ChatAltIcon, ShareIcon, ReplyIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useAppContext } from '../context/AppContext';

const DiscussionDetail = () => {
  const { id } = useParams();
  const { discussions, feed } = useAppContext();
  const [replyContent, setReplyContent] = useState('');
  
  // Temukan diskusi berdasarkan ID yang diberikan
  const discussion = discussions.find(d => d.id === parseInt(id)) || null;
  
  // Temukan aktivitas feed yang terkait dengan diskusi ini (jika ada)
  const relatedActivity = feed.find(f => f.type === 'discussion' && f.discussionTitle === discussion?.title) || null;

  // Jika diskusi tidak ditemukan, tampilkan pesan
  if (!discussion) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Diskusi Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-4">Maaf, diskusi dengan ID {id} tidak ditemukan.</p>
        <Link to="/discussions" className="btn-primary">
          Kembali ke Daftar Diskusi
        </Link>
      </div>
    );
  }
  
  // Data dummy untuk balasan diskusi
  const replies = [
    {
      id: 1,
      user: {
        id: 5,
        name: 'Reza Programmer',
        username: 'reza_p',
        avatar: 'https://i.pravatar.cc/150?img=14',
      },
      content: 'Saya setuju bahwa Concurrent Mode adalah fitur yang game-changing untuk React. Ini membuat aplikasi terasa lebih responsif.',
      timestamp: '5 jam yang lalu',
      likes: 12,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Dewi Candra',
        username: 'dewi_coder',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
      content: 'Saya sudah mencoba Concurrent Mode di proyek saya. Ada beberapa hal yang perlu diperhatikan, terutama saat menggunakan library pihak ketiga yang belum sepenuhnya mendukung.',
      timestamp: '3 jam yang lalu',
      likes: 8,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: 'Bambang Wijaya',
        username: 'bambang_tech',
        avatar: 'https://i.pravatar.cc/150?img=17',
      },
      content: 'Ada yang sudah mencoba React Server Components bersamaan dengan Concurrent Mode? Saya penasaran bagaimana performa dan developer experience-nya.',
      timestamp: '2 jam yang lalu',
      likes: 5,
    }
  ];
  
  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (replyContent.trim()) {
      alert(`Balasan: "${replyContent}" telah ditambahkan ke diskusi`);
      setReplyContent('');
    }
  };

  return (
    <div>
      <div className="mb-6">
        <Link to="/discussions" className="text-primary-600 hover:text-primary-800 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Diskusi
        </Link>
      </div>
      
      {/* Header diskusi */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center mb-2">
            {discussion.hot && (
              <span className="flex items-center text-xs font-medium text-red-600 mr-2">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                Hot
              </span>
            )}
            <span className="text-xs font-medium text-gray-500">{discussion.community}</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{discussion.title}</h1>
          
          <div className="flex items-center mb-4">
            {relatedActivity && (
              <div className="flex items-center">
                <img 
                  src={relatedActivity.user.avatar} 
                  alt={relatedActivity.user.name} 
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="ml-2">
                  <Link to={`/profile/${relatedActivity.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                    {relatedActivity.user.name}
                  </Link>
                  <p className="text-xs text-gray-500">Dibuat {relatedActivity.timestamp}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="prose max-w-none">
            {relatedActivity ? (
              <p>{relatedActivity.content}</p>
            ) : (
              <p>
                Diskusi mengenai masa depan React dengan Concurrent Mode dan bagaimana fitur ini
                akan mengubah cara kita membangun aplikasi React. Mari berbagi pengalaman dan
                pendapat mengenai fitur ini.
              </p>
            )}
          </div>
        </div>
        
        <div className="px-6 py-3 bg-gray-50 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <div className="flex items-center">
              <UserGroupIcon className="h-4 w-4 mr-1" />
              <span>{discussion.participants} Peserta</span>
            </div>
            <div className="flex items-center">
              <ChatAltIcon className="h-4 w-4 mr-1" />
              <span>{discussion.replies} Balasan</span>
            </div>
          </div>
          
          <button className="text-sm text-primary-600 hover:text-primary-800 flex items-center">
            <ShareIcon className="h-4 w-4 mr-1" />
            Bagikan
          </button>
        </div>
      </div>
      
      {/* Form balasan */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tambahkan Balasan</h2>
        <form onSubmit={handleSubmitReply}>
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Tulis balasan Anda..."
            className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            rows="4"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!replyContent.trim()}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
            >
              <ReplyIcon className="h-5 w-5 mr-2" />
              Kirim Balasan
            </button>
          </div>
        </form>
      </div>
      
      {/* Daftar balasan */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Balasan ({replies.length})</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {replies.map((reply) => (
            <div key={reply.id} className="p-6">
              <div className="flex">
                <img
                  src={reply.user.avatar}
                  alt={reply.user.name}
                  className="h-10 w-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link to={`/profile/${reply.user.username}`} className="font-medium text-gray-900 hover:underline">
                        {reply.user.name}
                      </Link>
                      <p className="text-xs text-gray-500">@{reply.user.username} • {reply.timestamp}</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-800">
                    <p>{reply.content}</p>
                  </div>
                  <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
                    <button className="flex items-center hover:text-primary-600">
                      <ThumbUpIcon className="h-4 w-4 mr-1" />
                      <span>{reply.likes} Suka</span>
                    </button>
                    <button className="flex items-center hover:text-primary-600">
                      <ReplyIcon className="h-4 w-4 mr-1" />
                      <span>Balas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetail; 