function calcularCosto() {
    var numNoches = document.getElementById("n_noches").value;
    var destino = document.getElementById("ciudad_destino").value;
    if (numNoches == 0) {
      return alert("El número de noches debe ser mayor que 0");
    } else {
      var resultado1 = costoHotel(numNoches);
      var resultado2 = costoAvion(destino);
      var resultadoTotal = resultado1 + resultado2;
      document.getElementById("result").value = resultadoTotal;
      do {
        ejecutaAlerta(destino);
      } while (resultadoTotal);
    }
  }
  function ejecutaAlerta(destino) {
    var w = alert(
      `Gran elección! Esperamos que disfrutes tu viaje a ${destino}`,
      "",
      "width=100,height=100"
    );
    w.focus();
    setTimeout(function () {
      w.close();
    }, 2000);
  }
  
  function costoHotel(n_noches) {
    var costoEstadia = n_noches * 140;
    return costoEstadia;
  }
  
  function costoAvion(ciudad) {
    if (ciudad == "madrid") {
      return 800;
    } else if (ciudad == "barcelona") {
      return 850;
    } else if (ciudad == "miami") {
      return 650;
    } else if (ciudad == "ibiza") {
      return 950;
    }
  }