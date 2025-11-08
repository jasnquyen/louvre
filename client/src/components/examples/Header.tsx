import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="bg-background">
      <Header
        heistCount={3}
        onViewHeist={() => console.log('View heist plan clicked')}
      />
    </div>
  );
}
