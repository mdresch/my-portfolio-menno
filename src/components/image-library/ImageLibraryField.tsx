"use client";

import { useState } from "react";
import type { PublicImageAssetDto } from "@/lib/image-library-serialize";
import ImageLibraryPicker from "./ImageLibraryPicker";

type Props = {
  label: string;
  value: string;
  onChange: (mediaUrl: string) => void;
  pickerTitle?: string;
  allowClear?: boolean;
};

export default function ImageLibraryField({
  label,
  value,
  onChange,
  pickerTitle,
  allowClear = true,
}: Props) {
  const [pickerOpen, setPickerOpen] = useState(false);

  return (
    <div>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-[200px] flex-1 rounded border px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
          placeholder="/media/your-image-slug"
        />
        <button
          type="button"
          onClick={() => setPickerOpen(true)}
          className="rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
        >
          Library
        </button>
        {allowClear && value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="rounded border px-3 py-2 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            Clear
          </button>
        )}
      </div>
      {value && (
        <div className="mt-2 overflow-hidden rounded border dark:border-gray-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="max-h-32 w-auto object-contain" />
        </div>
      )}
      <ImageLibraryPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        title={pickerTitle}
        onSelect={(image: PublicImageAssetDto) => onChange(image.mediaUrl)}
      />
    </div>
  );
}
