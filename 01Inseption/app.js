const heading1 = React.createElement('h1', {
     class:"heading",
}, 'Headin1 React!');
const heading2 = React.createElement('h5', {
     class:"heading",
}, 'Headin2 React!');

const container = React.createElement('div', {
     id:"container",
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);