"use client";

import { useState } from "react";
import type { PublicImageAssetDto } from "@/lib/image-library-serialize";
import { insertMarkdownImageAtEnd } from "@/lib/image-library-frontmatter";
import ImageLibraryField from "./ImageLibraryField";
import ImageLibraryPicker from "./ImageLibraryPicker";

type Props = {
  coverImage: string;
  onCoverImageChange: (url: string) => void;
  content: string;
  onContentChange: (content: string) => void;
};

export default function BlogPostImageTools({
  coverImage,
  onCoverImageChange,
  content,
  onContentChange,
}: Props) {
  const [insertPickerOpen, setInsertPickerOpen] = useState(false);

  const handleInsert = (image: PublicImageAssetDto) => {
    const alt = image.altText || image.title || image.slug;
    onContentChange(insertMarkdownImageAtEnd(content, image.mediaUrl, alt));
  };

  return (
    <div className="mb-6 space-y-4 rounded-lg border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/40 dark:bg-blue-950/20">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Image library</p>
      <ImageLibraryField
        label="Cover image"
        value={coverImage}
        onChange={onCoverImageChange}
        pickerTitle="Choose cover image"
      />
      <div>
        <button
          type="button"
          onClick={() => setInsertPickerOpen(true)}
          className="rounded border border-blue-300 bg-white px-3 py-2 text-sm hover:bg-blue-50 dark:border-blue-700 dark:bg-gray-900 dark:hover:bg-gray-800"
        >
          Insert image from library into content
        </button>
      </div>
      <ImageLibraryPicker
        open={insertPickerOpen}
        onClose={() => setInsertPickerOpen(false)}
        title="Insert into post body"
        onSelect={handleInsert}
      />
    </div>
  );
}
