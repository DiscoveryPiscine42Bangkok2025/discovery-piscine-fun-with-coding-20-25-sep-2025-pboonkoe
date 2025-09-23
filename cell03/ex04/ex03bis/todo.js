const list = document.getElementById('ft_list'),
      btn = document.querySelector('.new-btn');

const save = () => {
  const todos = [...document.querySelectorAll('.to-do-item')].map(i => i.textContent);
  document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))};path=/`;
};

const addTodo = text => {
  const div = document.createElement('div');
  div.className = 'to-do-item';
  div.textContent = text;
  div.onclick = () => { if(confirm(`Remove "${text}"?`)){ div.remove(); save(); } };
  list.prepend(div);
  save();
};

(() => {
  const c = document.cookie.split(';').find(x => x.trim().startsWith('todos='));
  if(c) JSON.parse(decodeURIComponent(c.split('=')[1])).reverse().forEach(addTodo);
})();

btn.onclick = () => {
  const t = prompt("Enter a new TO DO:");
  if(t?.trim()) addTodo(t.trim());
};
