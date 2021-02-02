fetch('http://localhost/w3reactjs/fetch/001/index1.php?_ijt=qd363a5lmc8la97rrm9t59uond')
    .then(response => response.json())
    .then(data => console.log(data));