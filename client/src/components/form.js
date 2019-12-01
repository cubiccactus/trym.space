import React from 'react';

const Form = () => {
  return (
    <div className="form-container">
    <h1 className="shorten-title">shorten your urls right here</h1>
      <form onSubmit={submitLink}>
        <input id="link" type="text" />
        <input id="shorten-button" type="submit" value="✂️"/>
        <p className="redirect-url"></p>
      </form>
    </div>
  );
}

const submitLink = e => {
  e.preventDefault();
  const linkToShorten = e.target.link.value;
  const result = linkToShorten.replace(/(^\w+:|^)\/\//, '');
  fetch(`http://167.172.169.246/shorten/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: result})
  })
    .then(res => res.json())
    .then(res => {
      const redirectLink = `trym.space/${res.name}`;
      document.querySelector('.redirect-url').innerHTML = `All done! Your shortened url is available at <span><a href=http://${redirectLink}>${redirectLink}</a></span>`
    });
};

export default Form;
