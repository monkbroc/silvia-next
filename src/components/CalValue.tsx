import { useRef, KeyboardEvent } from "react";
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

type Props = {
    value: string,
    onChange?: (value: string) => void;
    disabled?: boolean;
};

export default function CalValue({ value, onChange }: Props) {
    const text = useRef(value);

    const handleChange = (event: ContentEditableEvent) => {
        text.current = event.target.value;
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
        if (event.code === 'Enter') {
            event.preventDefault();
            emitChange();
        }
    };

    const handleBlur = () => {
        if (text.current !== value) {
            emitChange();
        }
    };


    const emitChange = () => {
        if (onChange) {
            onChange(text.current);
        }
    };

    return (
        <ContentEditable
            html={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            tagName='span'
            className='editable'
        />
    );
}
