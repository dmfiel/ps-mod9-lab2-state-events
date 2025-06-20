import type { TextInputProps } from '../../types';

// This input text box is used for the creator to write their content.
// Pre-written content could also be pasted here for ease of use.

export function TextInput({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}: TextInputProps) {
  return (
    <textarea
      autoFocus
      onChange={e => onTextChange(e.target.value)}
      placeholder={placeholder}
      defaultValue={initialValue}
      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px] resize-y bg-white"
      rows={6}
    />
  );
}
