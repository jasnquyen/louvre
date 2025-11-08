import RiskMeter from '../RiskMeter';

export default function RiskMeterExample() {
  return (
    <div className="p-8 space-y-8 bg-background">
      <RiskMeter percentage={92} size="lg" />
      <RiskMeter percentage={67} size="md" />
      <RiskMeter percentage={35} size="sm" />
    </div>
  );
}
