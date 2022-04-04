<template>
    <EsloganLogoPasteleria/>
    <MenuClienteOpciones/>
    <button @click="hacerPedido()">Hacer pedido aquí</button>
    <br>
    <InformacionPasteleria/>
</template>

<script>
// @ is an alias to /src
import EsloganLogoPasteleria from '@/components/EsloganLogoPasteleria.vue'
import MenuClienteOpciones from '@/components/MenuClienteOpciones.vue'
import InformacionPasteleria from '@/components/InformacionPasteleria'

export default {
  name: 'MenuCliente',
  components: {
    EsloganLogoPasteleria,
    MenuClienteOpciones,
    InformacionPasteleria
  },
  methods:{
      hacerPedido(){
          this.$router.push('/pedidocliente')
      }
  }
}
</script>