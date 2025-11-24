import { Slider } from "@/components/ui/slider";

interface PricingRangeProps {
  label: string;
  value: number;
  steps: Array<number | string>;
  onChange: (value: number) => void;
  className?: string;
}

const PricingRange = ({
  label,
  value,
  steps,
  onChange,
  className = "",
}: PricingRangeProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2">
        <label className="block font-medium whitespace-nowrap">{label}</label>
        <span className="text-sm text-gray-600 whitespace-nowrap">
          {steps[value]}
        </span>
      </div>
      <Slider
        min={0}
        max={steps.length - 1}
        step={1}
        value={[value]}
        onValueChange={(values) => onChange(values[0])}
        className="w-full"
      />
    </div>
  );
};

export default PricingRange;
