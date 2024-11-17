import { Twitter, MessageCircle } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-colors duration-200"
      >
        <Twitter className="h-6 w-6 text-purple-500 hover:text-purple-400" />
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-colors duration-200"
      >
        <MessageCircle className="h-6 w-6 text-purple-500 hover:text-purple-400" />
      </a>
    </div>
  );
};

export default SocialSidebar;
