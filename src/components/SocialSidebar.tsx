import React from 'react';
import { Twitter, MessageCircle, Globe } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socials = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-6 w-6" />,
      url: 'https://twitter.com/joinvanth',
    },
    {
      name: 'Discord',
      icon: <MessageCircle className="h-6 w-6" />,
      url: 'https://discord.gg/',
    },
    {
      name: 'Website',
      icon: <Globe className="h-6 w-6" />,
      url: 'https://joinvanth.com',
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/20 transition-all duration-300 text-gray-400 hover:text-purple-400"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
