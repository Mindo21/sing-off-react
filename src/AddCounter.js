import './AddCounter.css';

function AddCounter() {
  return (
    <div className="AddCounter">
      <p>Add counter:
        <input autofocus id="add_name" title="only accepts digits and letters a-z"
          pattern="[a-zA-Z0-9_]+" placeholder="enter name" />
        <button id="add_btn">add</button>
        <span class="errormessage">only use digits and letters please</span>
      </p>
    </div>
  );
}

export default AddCounter;
