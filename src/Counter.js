function Counter(props) {
  return (
    <div>
      <p class="counter">
        <span class="samewidth">
        Counter <span class="counter_name">{props.name || 'error'}</span>: <span class="counter_value">error</span>
        </span>
        <input type="number" class="counter_newval" />
        <button class="add">add</button>
        <button class="set">set</button>
        <button class="delete">delete</button>
        <button class="refresh">refresh</button>
      </p>
    </div>
  );
}

export default Counter;
