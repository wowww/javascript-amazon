const countries = [
  {name: "dog"},
  {name: "cat"},
  {name: "squirrel"},
  {name: "ram"},
  {name: "rabbit"},
  {name: "hippo"},
  {name: "elephant"},
  {name: "deer"},
  {name: "cow"},
  {name: "whale"},
  {name: "turtle"},
  {name: "frog"},
  {name: "duck"}
];

const searchInput = document.querySelector('.search-input');
const suggestionsPanel = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', function() {
  const input = searchInput.value;
  
  suggestionsPanel.innerHTML = '';
  const suggestions = countries.filter(function(animal) {
    // console.log(country.name, input)
    return animal.name.toLowerCase().startsWith(input);
  });

  suggestions.forEach(function(suggested) {
    const div = document.createElement('div');
    div.innerHTML = suggested.name;
    suggestionsPanel.appendChild(div);
  });
  if (input === '') {
    suggestionsPanel.innerHTML = '';  
  }
});
