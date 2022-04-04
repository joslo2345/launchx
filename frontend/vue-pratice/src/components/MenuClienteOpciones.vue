<template>
    <div id="menu">
        <p>Menú</p>
        <dl id="menu_tamanos">
            <dt>Tamaños</dt>
            <dd>Chico - $100.00</dd>
            <dd>Mediano - $200.00</dd>
            <dd>Grande - $300.00</dd>
            <dd>Jumbo - $400.00</dd>
        </dl>
        <dl id="menu_sabores">
            <dt>Sabores</dt>
            <dd>Vainilla  - $45.00</dd>
            <dd>Chocolate - $60.00</dd>
            <dd>Fresa - $80.00</dd>
            <dd>Limón -  $70.00</dd>
            <dd>Cajeta - $50.00</dd>
        </dl>
        <dl id="menu_adornos">
            <dt>Adornos</dt>
            <dd>Trozos de fresa - $30.00</dd>
            <dd>Trozos de chocolate - $50.00</dd>
            <dd>Trozos de hojaldre - $70.00</dd>
            <dd>Estrellas de fondan - $50.00</dd>
            <dd>Obleas de cajeta - $60.00</dd>
        </dl>
    </div>
</template>

<style scoped>
    #menu{
        width: 100%;        
    }
    dl {
        width: 100%;
        padding: 0;
        margin: 0
    }
    dt {
        /* adjust the width; make sure the total of both is 100% */
        padding: 0;
        margin: 0
    }
    dd {
        /* adjust the width; make sure the total of both is 100% */
        padding: 0;
        margin: 0
    }

</style>