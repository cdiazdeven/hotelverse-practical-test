# hotelverse-practical-test
Resolucion de la prueba tecnica de Hotelverse

Primeramente se debe clonar el repositorio:

```bash
git clone https://github.com/cdiazdeven/hotelverse-practical-test.git
```

Una vez clonado, se debe hacer una copia del archivo env.local.example y renombrarlo a .env.local.

```bash
cd hotelverse-practical-test
cp env.local.example .env.local
```

A continuacion se debe colocar una API_KEY valida para que se pueda conectar y hacer consultas a la api publica

Despues se deben instalar los paquetes de node: 
```bash
npm install
npm run dev
```

Para ejecutar el pequeño test que se ha hecho:
```bash
npm run test
```

