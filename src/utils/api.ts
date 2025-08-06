// For image uploads
export const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    // For demo purposes, we'll use a local URL
    // In production, this would upload to a server or cloud storage
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
}; 