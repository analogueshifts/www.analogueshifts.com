'use client'
import { Color } from '@tiptap/extension-color'
import './tiptap.css'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect, useState } from 'react'

const MenuBar = ({ valueChanged }) => {
    const { editor } = useCurrentEditor()
    editor.setOptions({
        editorProps: {
            attributes: {
                class: editor.isFocused
                    ? 'border-tremor-background-darkYellow outline-1 border-2 ' +
                      'px-3 z-30 pt-2 text-sm max-h-[120px] text-tremor-brand-boulder950 min-h-[130px] overflow-y-auto w-full rounded-b-2xl outline-none '
                    : 'border-tremor-brand-boulder200 border ' +
                      'px-3 z-30 pt-2 text-sm max-h-[120px] text-tremor-brand-boulder950 min-h-[130px] overflow-y-auto w-full rounded-b-2xl outline-none ',
            },
        },
    })

    useEffect(() => {
        valueChanged(editor.getHTML())
    }, [editor.getHTML()])

    if (!editor) {
        return null
    }

    return (
        <div
            className={`flex w-full overflow-x-auto gap-x-3 gap-y-3 px-3 py-3  top-0 z-40 bg-white  rounded-t-2xl border-b-0 ${
                editor.isFocused
                    ? 'border-tremor-background-darkYellow outline-1 border-2'
                    : 'border-tremor-brand-boulder200 border'
            }`}>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${
                    editor.isActive('bold')
                        ? 'border-tremor-brand-boulder950'
                        : 'border-white'
                } px-3 py-1 rounded-lg border`}>
                <i className="text-tremor-brand-boulder950 fas fa-bold"></i>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`${
                    editor.isActive('italic')
                        ? 'border-tremor-brand-boulder950'
                        : 'border-white'
                } px-3 py-1 rounded-lg border`}>
                <i className="text-tremor-brand-boulder950 fas fa-italic"></i>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`${
                    editor.isActive('paragraph')
                        ? 'border-tremor-brand-boulder950'
                        : 'border-white'
                } px-3 py-1 rounded-lg border`}>
                <i className="text-tremor-brand-boulder950 fas fa-p"></i>
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${
                    editor.isActive('bulletList')
                        ? 'border-tremor-brand-boulder950'
                        : 'border-white'
                } px-3 py-1 rounded-lg border`}>
                <i className="text-tremor-brand-boulder950 fas fa-list-ul"></i>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${
                    editor.isActive('orderedList')
                        ? 'border-tremor-brand-boulder950'
                        : 'border-white'
                } px-3 py-1 rounded-lg border`}>
                <i className="text-tremor-brand-boulder950 fas fa-list-ol"></i>
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}>
                <i className="text-tremor-brand-boulder950 fas fa-undo"></i>
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}>
                <i className="text-tremor-brand-boulder950 fas fa-redo"></i>
            </button>
        </div>
    )
}

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
]

const Tiptap = ({ changed, initialData }) => {
    const content = initialData
    return (
        <EditorProvider
            slotBefore={<MenuBar valueChanged={data => changed(data)} />}
            extensions={extensions}
            content={content}></EditorProvider>
    )
}

export default Tiptap
