const API = 'http://100.26.47.98:8080/api/properties';
async function fetchAll(){
    const r = await fetch(API);
    const data = await r.json();
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.forEach(p => {
        const div = document.createElement('div');
        div.className = 'prop';
        div.innerHTML = `
      <strong>${p.address}</strong><br/>
      Precio: ${p.price} - Tamaño: ${p.size} m²<br/>
      ${p.description || ''}<br/>
      <div class="actions">
        <button onclick="edit(${p.id})">Editar</button>
        <button onclick="del(${p.id})">Eliminar</button>
        <button onclick="view(${p.id})">Ver</button>
      </div>
    `;
        list.appendChild(div);
    });
}

async function view(id){
    const r = await fetch(`${API}/${id}`);
    if(!r.ok){ alert('No encontrado'); return; }
    const p = await r.json();
    alert(`Dirección: ${p.address}\nPrecio: ${p.price}\nTamaño: ${p.size}\nDescripción: ${p.description}`);
}

async function del(id){
    if(!confirm('Eliminar esta propiedad?')) return;
    const r = await fetch(`${API}/${id}`, { method: 'DELETE' });
    if(r.status === 204){ fetchAll(); } else { alert('Error al eliminar'); }
}

async function edit(id){
    const r = await fetch(`${API}/${id}`);
    const p = await r.json();
    document.getElementById('propId').value = p.id;
    document.getElementById('address').value = p.address;
    document.getElementById('price').value = p.price;
    document.getElementById('size').value = p.size;
    document.getElementById('description').value = p.description || '';
}

document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('propId').value;
    const payload = {
        address: document.getElementById('address').value,
        price: Number(document.getElementById('price').value),
        size: Number(document.getElementById('size').value),
        description: document.getElementById('description').value
    };

    if(!payload.address || payload.price<0 || payload.size<=0){ alert('Datos inválidos'); return; }

    const opts = {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    let r;
    if(id){
        opts.method = 'PUT';
        r = await fetch(`${API}/${id}`, opts);
    } else {
        opts.method = 'POST';
        r = await fetch(API, opts);
    }
    if(r.ok){ reset(); fetchAll(); } else {
        const text = await r.text();
        alert('Error: ' + r.status + ' ' + text);
    }
});

document.getElementById('cancelBtn').addEventListener('click', reset);

function reset(){
    document.getElementById('propId').value = '';
    document.getElementById('address').value = '';
    document.getElementById('price').value = '';
    document.getElementById('size').value = '';
    document.getElementById('description').value = '';
}

fetchAll();
