export interface ProgressBarProps {
  minVal?: number;
  maxVal?: number;
  currentVal: number;
}

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
