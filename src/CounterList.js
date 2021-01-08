import Counter from './Counter';
import './CounterList.css';

function CounterList(props) {
  const counters = props.counters.map((counter) =>
    <li>
      <Counter name={counter.name} />
    </li>
  );
  return (
    <ul>{counters}</ul>
  );
}

export default CounterList;
