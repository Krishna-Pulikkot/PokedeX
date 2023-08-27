import * as React from 'react';

export default function BasicTextFields() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Namaste ${name} 🙏🏻.Thanks for submitting your query. We will get back to you soon.`)
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="text" placeholder="Enter your email " value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <textarea rows="8" cols="50" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

