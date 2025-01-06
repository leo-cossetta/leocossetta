<?php
  function converti($valore, $valuta) {
  $cambiValuta = 'valoriCambio.json';
  $costanteCambio = json_decode((file_get_contents($cambiValuta)), true);
  $cambio = $costanteCambio[$valuta];
  $valutaConvertita = number_format($valore * $cambio, 2);
  $conv = "Conversione EUR-$valuta: $valutaConvertita";
  return $conv;
  }
  $server = new SoapServer("test.wsdl");
  $server->addFunction("converti");
  $server->handle();
?>
