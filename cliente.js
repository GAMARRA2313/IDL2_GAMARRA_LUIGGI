function consultarAPI(url) 
{
    fetch(url, 
    {
    method: 'GET',
    headers: {
        'Authorization': '12121212sadads',
    },
    })
    .then(response => 
        {
        if (response.ok) {
        return response.text();
        } else 
        {
        throw new Error(`Error en la solicitud: ${response.status}`);
        }
        })
    .then(data => {
        document.getElementById('resultado').innerHTML = `Respuesta de la API: ${data}`;
    })
    .catch(error => {
        document.getElementById('resultado').innerHTML = `Error: ${error.message}`;
    });
}