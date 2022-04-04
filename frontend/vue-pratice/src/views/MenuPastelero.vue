<template>
    <EsloganLogoPasteleria/>
    <ReservasComida/>
    <PedidosPastelero/>
    <InformacionPasteleria/>
</template>

<script>
// @ is an alias to /src
import EsloganLogoPasteleria from '@/components/EsloganLogoPasteleria.vue'
import ReservasComida from '@/components/ReservasComida.vue'
import PedidosPastelero from '@/components/PedidosPastelero.vue'
import InformacionPasteleria from '@/components/InformacionPasteleria'

export default {
  name: 'MenuCliente',
  components: {
    EsloganLogoPasteleria,
    ReservasComida,
    PedidosPastelero,
    InformacionPasteleria
  }
}
</script>