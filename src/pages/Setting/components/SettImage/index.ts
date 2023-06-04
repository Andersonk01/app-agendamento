import { useState, useEffect } from "react";
let selectedImageUri: null | string = null;

export const setSelectedImageUri = (uri: string) => {
  selectedImageUri = uri;
};

export const getSelectedImageUri = (): string | null => {
  const [imageUri, setimageUri] = useState<string | null>(null);

  useEffect(() => {
    setimageUri(selectedImageUri);
  }, [selectedImageUri]);

  return imageUri;
};
