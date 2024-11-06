import { Color } from '@tiptap/extension-color'
import './tiptap.css'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

import Image from 'next/image'
import Bold from '@/public/images/tiptap/bold.svg'
import Italic from '@/public/images/tiptap/italic.svg'
import UnderlineImg from '@/public/images/tiptap/underline.svg'

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (editor) {
        editor.setOptions({
            editorProps: {
                attributes: {
                    class:
                        'px-6 z-10 py-4 scroll-hidden tablet:text-xs  text-sm font-normal max-h-[200px] w-full min-h-[200px] placeholder:text-[#00000099] border-[#E5E5E5] overflow-y-auto rounded-b-2xl outline-none border border-t-0 text-[#00000099] ',
                },
            },
        })
    }

    if (!editor) {
        return null
    }

    return (
        <div
            className={`flex w-full overflow-x-auto border-b border-b-[#0000000F] border-[#E5E5E5] gap-x-3 gap-y-3 px-6 pt-6 pb-5 top-0 z-20  bg-white rounded-t-2xl border-x border-t`}>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${editor.isActive('bold') ? '' : ''} px-2 `}>
                <Image src={Bold} alt="" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`${editor.isActive('italic') ? '' : ''} px-2`}>
                <Image src={Italic} alt="" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                disabled={!editor.can().chain().focus().toggleUnderline().run()}
                className={`${editor.isActive('underline') ? '' : ''} px-2`}>
                <Image src={UnderlineImg} alt="" />
            </button>
        </div>
    )
}

const Tiptap = ({ changed, initialData, placeholder }) => {
    return (
        <EditorProvider
            slotBefore={<MenuBar />}
            extensions={[
                Color.configure({ types: [ListItem.name] }), // Adjust here
                TextStyle, // No need to configure types here
                Underline,
                Placeholder.configure({
                    placeholder:
                        placeholder || 'Tell us a little about yourself',
                }),
                StarterKit.configure({
                    bulletList: {
                        keepMarks: true,
                        keepAttributes: false,
                    },
                    orderedList: {
                        keepMarks: true,
                        keepAttributes: false,
                    },
                }),
            ]}
            content={initialData}
            onUpdate={({ editor }) => {
                const html = editor.getHTML()
                changed(html)
            }}></EditorProvider>
    )
}

export default Tiptap
