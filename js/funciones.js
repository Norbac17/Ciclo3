//CRUD Category
function getCategoria() {
    $.ajax({
        url: "https://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            pintarCategoria(respuesta.items);
        }
    });
}

function pintarCategoria(items) {
    $("#resultadoCa").empty();
    let tableCategory = "<table align=" + "center" + ">";
    tableCategory += "<tr>";
    tableCategory += "<td class=" + "titles" + ">Id</td>";
    tableCategory += "<td class=" + "titles" + ">Name</td>";
    tableCategory += "<td class=" + "titles" + ">Description</td>";
    tableCategory += "</tr>";
    for (i = 0; i < items.length; i++) {
        tableCategory += "<tr>";
        tableCategory += "<td class=" + "titles2" + ">" + items[i].id + "</td>";
        tableCategory += "<td class=" + "titles2" + ">" + items[i].name + "</td>";
        tableCategory += "<td class=" + "titles2" + ">" + items[i].description + "</td>";
        tableCategory += "</tr>";
    }
    tableCategory += "</table>";
    $("#resultadoCa").append(tableCategory);
}

function postCategoria() {
    let myData = {
        name: $("#nameCa").val(),
        description: $("#descriptionCa").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://localhost:8080/api/Category/save",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(respuesta) {
            $("#nameCa").val();
            $("#descriptionCa").val();
            getCategoria();
            alert("se ha guardado con exito")

        }
    })
}
//Crud Skate
function getPatinetas() {
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "GET",
        datatype: "JSON",
        /*cors: false,
        crossDomain:true,
        contentType:'application/JSON',
        secure:false,
        headers:{
        	'Access-Control-Allow-Origin': '*',
        },*/
        success: function(respuesta) {
            console.log(respuesta);
            pintarPatinetas(respuesta.items);
        }
    });
}

function pintarPatinetas(items) {
    $("#resultadoPs").empty();
    let tableSkate = "<table align=" + "center" + ">";
    tableSkate += "<tr>";
    tableSkate += "<td class=" + "titles" + ">id</td>";
    tableSkate += "<td class=" + "titles" + ">brand</td>";
    tableSkate += "<td class=" + "titles" + ">model</td>";
    tableSkate += "<td class=" + "titles" + ">category_id</td>";
    tableSkate += "<td class=" + "titles" + ">name</td>";
    tableSkate += "</tr>";
    for (i = 0; i < items.length; i++) {
        tableSkate += "<tr>";
        tableSkate += "<td class=" + "titles2" + ">" + items[i].id + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + items[i].brand + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + items[i].model + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + items[i].category_id + "</td>";
        tableSkate += "<td class=" + "titles2" + ">" + items[i].name + "</td>";
        tableSkate += "<td> <button onclick='deletePatinetas(" + items[i].id + ")'>Borrar</button>";
        tableSkate += "</tr>";
    }
    tableSkate += "</table>";
    $("#resultadoPs").append(tableSkate);
}

function postPatinetas() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "POST",
        data: myData,
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            $("#id").val();
            $("#brand").val();
            $("#model").val();
            $("#category_id").val();
            $("#name").val();
            getPatinetas();
            alert("se ha guardado con exito")

        }
    })
}

function putPatinetas() {
    let myData = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            $("#id").val();
            $("#brand").val();
            $("#model").val();
            $("#category_id").val();
            $("#name").val();
            getPatinetas();
            alert("se ha actualizado con exito")

        }
    })
}

function deletePatinetas(idElemto) {
    let myData = {
        id: idElemto
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoPs").empty();
            getPatinetas();
            alert("se ha eliminado con exito!")

        }
    })
}

//Crud Clientes

function getClientes() {
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "JSON",
        /*cors: false,
        crossDomain:true,
        contentType:'application/JSON',
        secure:false,
        headers:{
        	'Access-Control-Allow-Origin': '*',
        },*/
        success: function(respuesta) {
            console.log(respuesta);
            pintarClientes(respuesta.items);
        }
    });
}

function pintarClientes(items) {
    $("#resultadoCs").empty();
    let tableClient = "<table align=" + "center" + ">";
    tableClient += "<tr>";
    tableClient += "<td class=" + "titles" + ">id</td>";
    tableClient += "<td class=" + "titles" + ">name</td>";
    tableClient += "<td class=" + "titles" + ">email</td>";
    tableClient += "<td class=" + "titles" + ">age</td>";
    tableClient += "</tr>";
    for (i = 0; i < items.length; i++) {
        tableClient += "<tr>";
        tableClient += "<td class=" + "titles2" + ">" + items[i].id + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + items[i].name + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + items[i].email + "</td>";
        tableClient += "<td class=" + "titles2" + ">" + items[i].age + "</td>";
        tableClient += "<td> <button onclick='deleteClientes(" + items[i].id + ")'>Borrar</button>";
        tableClient += "</tr>";
    }
    tableClient += "</table>";
    $("#resultadoCs").append(tableClient);
}

function postClientes() {
    let myDataC = {
        id: $("#idC").val(),
        name: $("#nameC").val(),
        email: $("#emailC").val(),
        age: $("#ageC").val(),

    };
    let dataToSend = JSON.stringify(myDataC);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoCs").empty();
            $("#idC").val();
            $("#nameC").val();
            $("#emailC").val();
            $("#ageC").val();
            getClientes();
            alert("se ha guardado con exito")

        }
    })
}

function putClientes() {
    let myData = {
        id: $("#idC").val(),
        name: $("#nameC").val(),
        email: $("#emailC").val(),
        age: $("#ageC").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            $("#idC").val();
            $("#nameC").val();
            $("#emailC").val();
            $("#ageC").val();
            getClientes();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteClientes(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoCs").empty();
            getClientes();
            alert("se ha eliminado con exito!")

        }
    })
}

//Crud Mensajes
function getMensajes() {
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "GET",
        datatype: "JSON",
        /*cors: false,
        crossDomain:true,
        contentType:'application/JSON',
        secure:false,
        headers:{
        	'Access-Control-Allow-Origin': '*',
        },*/
        success: function(respuesta) {
            console.log(respuesta);
            pintarMensajes(respuesta.items);
        }
    });
}

function pintarMensajes(items) {
    $("#resultadoMs").empty();
    let tableMessage = "<table align=" + "center" + ">";
    tableMessage += "<tr>";
    tableMessage += "<td class=" + "titles" + ">id</td>";
    tableMessage += "<td class=" + "titles" + ">message</td>";
    tableMessage += "</tr>";
    for (i = 0; i < items.length; i++) {
        tableMessage += "<tr>";
        tableMessage += "<td class=" + "titles2" + ">" + items[i].id + "</td>";
        tableMessage += "<td class=" + "titles2" + ">" + items[i].messagetext + "</td>";
        tableMessage += "<td> <button onclick='deleteMensajes(" + items[i].id + ")'>Borrar</button>";
        tableMessage += "</tr>";
    }
    tableMessage += "</table>";
    $("#resultadoMs").append(tableMessage);
}

function postMensajes() {
    let myDataC = {
        id: $("#idM").val(),
        messagetext: $("#messagetext").val(),

    };
    let dataToSend = JSON.stringify(myDataC);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "POST",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        success: function(respuesta) {
            $("#resultadoMs").empty();
            $("#idM").val();
            $("#messagetext").val();
            getMensajes();
            alert("se ha guardado con exito")

        }
    })
}

function putMensajes() {
    let myData = {
        id: $("#idM").val(),
        messagetext: $("#messagetext").val(),
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            $("#idM").val();
            $("#messagetext").val();
            getMensajes();
            alert("se ha actualizado con exito")

        }
    })
}

function deleteMensajes(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "https://gb53455c16ecd61-dbskate.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/message",
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function(respuesta) {
            $("#resultadoMs").empty();
            getMensajes();
            alert("se ha eliminado con exito!")

        }
    })
}