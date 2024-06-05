export default function Button({ type, name, onclick, label }) {
    return (
      <button
        type={type}
        name={name}
        onClick={onclick}
      >
        {label}
      </button>
    );
  }