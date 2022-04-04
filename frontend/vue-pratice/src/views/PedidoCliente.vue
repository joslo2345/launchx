<template>
    <EsloganLogoPasteleria/>
    <OpcionesPedidoCliente/>
    <button>Hacer pedido aquí</button>
    <br>
    <InformacionPasteleria/>
</template>

<script>
// @ is an alias to /src
import EsloganLogoPasteleria from '@/components/EsloganLogoPasteleria.vue'
import OpcionesPedidoCliente from '@/components/OpcionesPedidoCliente.vue'
import InformacionPasteleria from '@/components/InformacionPasteleria'

export default {
  name: 'PedidoCliente',
  components: {
    EsloganLogoPasteleria,
    OpcionesPedidoCliente,
    InformacionPasteleria
  }
}
</script>