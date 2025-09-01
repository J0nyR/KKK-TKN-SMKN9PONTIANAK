import { useCounter } from '@/hooks/useCounter';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

const AnimatedCounter = ({ target, duration }: AnimatedCounterProps) => {
  const count = useCounter(target, duration);
  return <>{count}</>;
};

export default AnimatedCounter;