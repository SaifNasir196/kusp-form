"use client"
import React from 'react';
import Image from 'next/image';
import { useProfileContext } from '@/context/ProfileContext';
import { Badge } from '@/components/ui/badge';
import { BadgeEuro } from 'lucide-react';
import Link from 'next/link';
import { LuInstagram } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";






const ProfileDisplay = () => {
    const { formData: profileData } = useProfileContext();

    return (
        <section className="flex flex-col items-center my-36">

            <div className='flex gap-4'>
                {/* Profile Picture */}
                    <div className=" mr-20 mb-6 border-b bg-gray-400 w-96 h-100 rounded-xl flex items-center justify-center">
                        {profileData?.profilePicture ? (
                        <Image
                            src={profileData.profilePicture}
                            alt="Profile Picture"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                        ) : (
                            <span className='text-white text-5xl'> {profileData?.firstName[0]}</span>
                        )}
                    </div>

                <div className='flex-col'>
                    {/* Personal Details */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-2">
                            {profileData.firstName} {profileData.lastName}
                        </h2>
                        <div className='flex justify-between'>
                            <p className="text-lg text-gray-600">{profileData.primaryRole}</p>
                            <Badge variant="secondary" className="text-lg text-gray-600"> {}</Badge>
                            <Badge variant="secondary" className="text-lg text-gray-600"> {profileData.location}</Badge>

                        </div>

                    </div>


                    {/* About */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">About</h3>
                        <p className="text-gray-600">{profileData.about}</p>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Skills</h3>
                        <ul className="flex flex-wrap">
                            {profileData.Skills?.map((skill, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Aspirations */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Aspirations</h3>
                        <ul className="flex flex-wrap">
                            {profileData.App?.map((aspiration, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                >
                                    {aspiration}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                        <p className="text-gray-600">Email: {profileData.email}</p>
                        <p className="text-gray-600">Phone: {profileData.phone}</p>
                        <p className="text-gray-600">Website: {profileData.website}</p>
                    </div>

                    {/* Social Media */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                        <ul className='flex gap-4'>
                            {profileData.youtube && (
                                <Link href={profileData.youtube}>
                                    <TbBrandYoutubeFilled size={36}/>
                                </Link>
                            )}
                            {profileData.instagram && (
                                <Link href={profileData.instagram}>
                                    <LuInstagram size={36}/>
                                </Link>
                            )}
                            {profileData.linkedIn && (
                                <Link href={profileData.linkedIn}>
                                    <PiLinkedinLogo size={36}/>
                                </Link>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfileDisplay;