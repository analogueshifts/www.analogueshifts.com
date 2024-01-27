"use client";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor({ data, setData }) {
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-full w-full">
        <CKEditor
          editor={ClassicEditor}
          data={data.description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData((prev) => {
              return { ...prev, description: data };
            });
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
