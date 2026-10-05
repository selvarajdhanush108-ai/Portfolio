import React from 'react';
import myImageWebp from '../assets/MyImage-transparent.webp';
import myImagePng from '../assets/MyImage-transparent.png';

interface SecuredAvatarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'featured';
  blendBottom?: boolean;
}

export const SecuredAvatar: React.FC<SecuredAvatarProps> = ({
  className = '',
  size = 'featured',
  blendBottom = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
    featured: 'w-44 h-44 sm:w-52 sm:h-52',
  }[size];

  const preventAction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <div
      className={`relative ${sizeClasses} select-none no-user-drag group ${className}`}
      onContextMenu={preventAction}
      onDragStart={preventAction}
      role="img"
      aria-label="Portrait of Dhanush S, .NET Developer & Software Engineer"
    >
      {/* Subtle Ambient Studio Backlight Glow (Blends with background and adds depth) */}
      <div
        className="absolute -inset-1 rounded-full opacity-35 dark:opacity-25 blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 45%, var(--accent) 0%, transparent 68%)',
        }}
      />

      {/* Layer 1: High-Definition Transparent Portrait with Soft Bottom Gradient Blend */}
      <div
        className="w-full h-full bg-contain bg-no-repeat bg-top pointer-events-none transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        style={{
          backgroundImage: `url(${myImageWebp}), url(${myImagePng})`,
          // Soft bottom dissolve so his suit blends directly into the page background
          WebkitMaskImage: blendBottom
            ? 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            : undefined,
          maskImage: blendBottom
            ? 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            : undefined,
        }}
      />

      {/* Layer 2: Transparent Security Shield Overlay (Blocks context menu, drag, click theft) */}
      <div
        className="absolute inset-0 z-10 cursor-default select-none no-user-drag"
        onContextMenu={preventAction}
        onDragStart={preventAction}
        title="Dhanush S"
      />
    </div>
  );
};
