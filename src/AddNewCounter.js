import './AddNewCounter.css';

function AddNewCounter(props) {
  return (
    <div className="AddNewCounter">
      <p>Add counter:
        <input autofocus id="add_name" title="only accepts digits and letters a-z"
          pattern="[a-zA-Z0-9_]+" placeholder="enter name" />
        <button id="add_btn" onClick={() => props.addNewCounter(document.getElementById('add_name').value)}>add</button>
        <span class="errormessage">only use digits and letters please</span>
      </p>
    </div>
  );
}

export default AddNewCounter;
