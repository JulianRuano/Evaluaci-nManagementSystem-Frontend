// Se invoca cuando se oprime el botón Enviar
let websocket;
export function sendNotification(event){
    event.preventDefault();
    let campo = "notificacion de prueba";
    // Enviamos el valor del campo al servidor
    doSend(campo);
    // Vaciamos el campo
    campo="";
}

// La función init se ejecuta cuando termina de cargarse la página
function init() {
    // Conexión con el servidor de websocket
    wsConnect();
}


// Invoca esta función para conectar con el servidor de WebSocket
function wsConnect() {
    // Connect to WebSocket server   
    websocket = new WebSocket("ws://localhost:3001");

    // Asignación de callbacks
    websocket.onopen = function (evt) {
        onOpen(evt)
    };
    websocket.onclose = function (evt) {
        onClose(evt)
    };
    websocket.onmessage = function (evt) {
        onMessage(evt)
    };
    websocket.onerror = function (evt) {
        onError(evt)
    };
}

// Se ejecuta cuando se establece la conexión Websocket con el servidor
function onOpen(evt) {
    // Enviamos el saludo inicial al servidor
    doSend("Hola");
}

// Se ejecuta cuando la conexión con el servidor se cierra
function onClose(evt) {
    // Intenta reconectarse cada 5 segundos
    setTimeout(function () {
        wsConnect()
    }, 5000);
}

// Se invoca cuando se recibe un mensaje del servidor
function onMessage(evt) {
    // Agregamos al textarea el mensaje recibido
    alert("¡Hola, mundo!" + evt.data);
}

// Se invoca cuando se presenta un error en el WebSocket
function onError(evt) {
    console.log("ERROR: " + evt.data);
}

// Envía un mensaje al servidor (y se imprime en la consola)
function doSend(message) {
    console.log("Enviando: " + message);
    websocket.send(message);
}

window.addEventListener("load", init, false);