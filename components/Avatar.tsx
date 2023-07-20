import React from 'react'
import Image from 'next/image';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import {placeholder} from '@/public/images';


interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
  }
const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {

    const router = useRouter();

  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);



  return (
    <div
    className={`
      ${hasBorder ? 'border-4 border-black' : ''}
      ${isLarge ? 'h-32' : 'h-12'}
      ${isLarge ? 'w-32' : 'w-12'}
      rounded-full 
      hover:opacity-90 
      transition 
      cursor-pointer
      relative
    `}
  >
    <Image
      fill
      style={{
        objectFit: 'cover',
        borderRadius: '100%'
      }}
      alt="Avatar"
      onClick={onClick}
      src={fetchedUser?.profileImage || placeholder}
    />
  </div>
  )
}

export default Avatar