"use client"

import React, { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    const updateFormData = (newData) => {
        setFormData((prevData) => ({
        ...prevData,
        ...newData,
        }));
    };

    const resetFormData = () => {
        setFormData({});
    };

    return (
        <ProfileContext.Provider value={{ formData, updateFormData, resetFormData }}>
        {children}
        </ProfileContext.Provider>
    );
};
