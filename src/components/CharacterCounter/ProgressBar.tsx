export interface ProgressBarProps {
  minVal?: number;
  maxVal?: number;
  currentVal: number;
}

// This progress bar provides easy, visual feedback for completion percentage
// along with red/green status of the correct word count range.
// The component takes the size of its enclosing element, so sizing is set
// by the parent component.

export function ProgressBar({ minVal, maxVal, currentVal }: ProgressBarProps) {
  if (!minVal || !maxVal) return;
  const donePct = Math.min((currentVal / maxVal) * 100, 100);
  const widthStyle = {
    width: Math.floor(donePct) + '%'
  };
  const colorClass =
    currentVal > maxVal || currentVal < minVal ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className="w-full h-full border border-gray-200 bg-white rounded-lg shadow-sm">
      <div
        style={widthStyle}
        className={`${colorClass} rounded-lg h-full mr-auto`}
      ></div>
    </div>
  );
}
