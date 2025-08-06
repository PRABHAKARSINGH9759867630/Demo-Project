import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  toggleAdminMode: () => void;
  isEditing: boolean;
  toggleEditing: () => void;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdminMode, setIsAdminMode] = useState(() => {
    const adminToken = localStorage.getItem('adminToken');
    return !!adminToken;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  // Sync admin mode with adminToken
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setIsAdminMode(true);
      localStorage.setItem('adminMode', 'true');
    } else {
      setIsAdminMode(false);
      setIsEditing(false);
      setSelectedElement(null);
      localStorage.setItem('adminMode', 'false');
    }
  }, []);

  // Listen for adminToken changes
  useEffect(() => {
    const handleStorageChange = () => {
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken) {
        setIsAdminMode(true);
        localStorage.setItem('adminMode', 'true');
      } else {
        setIsAdminMode(false);
        setIsEditing(false);
        setSelectedElement(null);
        localStorage.setItem('adminMode', 'false');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const toggleAdminMode = () => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      // Don't allow enabling admin mode without token
      return;
    }
    setIsAdminMode(!isAdminMode);
    localStorage.setItem('adminMode', (!isAdminMode).toString());
    if (!isAdminMode) {
      setIsEditing(false);
      setSelectedElement(null);
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminMode,
        toggleAdminMode,
        isEditing,
        toggleEditing,
        selectedElement,
        setSelectedElement
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 