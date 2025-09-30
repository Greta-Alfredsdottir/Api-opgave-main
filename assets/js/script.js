// her er vores javascript

fetch('https://dog.ceo/api/breeds/image/random/12')
  .then(response => response.json())
  .then(data => {
    view(data);
  })
  .catch(error => {
    console.error('Fejl:', error);
  });

function view(data) {
  const output = document.getElementById('output');
  output.innerHTML = data.message
    .map(url => `<img src="${url}" alt="Dog image" style="max-width:200px;">`)
    .join('');
}