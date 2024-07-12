import React from 'react';
import Image from 'next/image';

const ProfileDisplay = ({ profileData }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Picture */}
      {profileData.profilePicture && (
        <div className="mb-6">
          <Image
            src={profileData.profilePicture}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      )}

      {/* Personal Details */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          {profileData.firstName} {profileData.lastName}
        </h2>
        <p className="text-lg text-gray-600">{profileData.primaryRole}</p>
        <p className="text-gray-500">{profileData.location}</p>
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
          {profileData.Skills.map((skill, index) => (
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
          {profileData.App.map((aspiration, index) => (
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
        <ul>
          {profileData.youtube && (
            <li className="text-gray-600">YouTube: {profileData.youtube}</li>
          )}
          {profileData.instagram && (
            <li className="text-gray-600">Instagram: {profileData.instagram}</li>
          )}
          {profileData.linkedIn && (
            <li className="text-gray-600">LinkedIn: {profileData.linkedIn}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDisplay;