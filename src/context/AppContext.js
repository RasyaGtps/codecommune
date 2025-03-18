import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  currentUser,
  communities,
  activityFeed,
  trendingDiscussions,
  featuredProjects,
  upcomingEvents,
  developerStats,
  dailyChallenges,
  leaderboard,
  suggestedConnections,
  learningPaths
} from '../data/dummyData';

// Membuat context
const AppContext = createContext();

// Custom hook untuk menggunakan context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  // State untuk user
  const [user, setUser] = useState(currentUser);
  
  // State untuk komunitas
  const [userCommunities, setUserCommunities] = useState(communities);
  
  // State untuk activity feed
  const [feed, setFeed] = useState(activityFeed);
  
  // State untuk diskusi trending
  const [discussions, setDiscussions] = useState(trendingDiscussions);
  
  // State untuk proyek unggulan
  const [projects, setProjects] = useState(featuredProjects);
  
  // State untuk acara mendatang
  const [events, setEvents] = useState(upcomingEvents);
  
  // State untuk statistik developer
  const [stats, setStats] = useState(developerStats);
  
  // State untuk challenges harian
  const [challenges, setChallenges] = useState(dailyChallenges);
  
  // State untuk leaderboard
  const [leaders, setLeaders] = useState(leaderboard);
  
  // State untuk koneksi yang disarankan
  const [connections, setConnections] = useState(suggestedConnections);
  
  // State untuk learning paths
  const [paths, setPaths] = useState(learningPaths);
  
  // State untuk notifikasi
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      content: 'Rina Wijaya mengirim pesan baru',
      isRead: false,
      timestamp: '5 menit yang lalu'
    },
    {
      id: 2,
      type: 'mention',
      content: 'Budi Santoso menyebut Anda dalam diskusi',
      isRead: false,
      timestamp: '30 menit yang lalu'
    },
    {
      id: 3,
      type: 'event',
      content: 'Workshop Docker akan dimulai dalam 1 jam',
      isRead: true,
      timestamp: '1 jam yang lalu'
    }
  ]);
  
  // Function untuk toggle join community
  const toggleJoinCommunity = (communityId) => {
    setUserCommunities(prevCommunities => {
      return prevCommunities.map(community => {
        if (community.id === communityId) {
          return { ...community, isJoined: !community.isJoined };
        }
        return community;
      });
    });
  };
  
  // Function untuk menambah post baru ke feed
  const addPost = (postContent) => {
    const newPost = {
      id: feed.length + 1,
      type: 'post',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        avatar: user.avatar
      },
      content: postContent,
      timestamp: 'Baru saja',
      likes: 0,
      comments: 0
    };
    
    setFeed(prevFeed => [newPost, ...prevFeed]);
  };
  
  // Function untuk mark notification as read
  const markNotificationAsRead = (notificationId) => {
    setNotifications(prevNotifications => {
      return prevNotifications.map(notification => {
        if (notification.id === notificationId) {
          return { ...notification, isRead: true };
        }
        return notification;
      });
    });
  };
  
  // Function untuk mark all notifications as read
  const markAllNotificationsAsRead = () => {
    setNotifications(prevNotifications => {
      return prevNotifications.map(notification => {
        return { ...notification, isRead: true };
      });
    });
  };
  
  // Function untuk like post
  const likePost = (postId) => {
    setFeed(prevFeed => {
      return prevFeed.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
    });
  };
  
  // Value yang akan di-share melalui context
  const contextValue = {
    user,
    userCommunities,
    feed,
    discussions,
    projects,
    events,
    stats,
    challenges,
    leaders,
    connections,
    paths,
    notifications,
    toggleJoinCommunity,
    addPost,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    likePost
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext; 