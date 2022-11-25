import React from 'react'
import './css/empresa.css';
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
const Empresa = () => {
return (
<div className='contenedor-empresa'>
<Heading size='lg' fontSize='40px'>
    Wow desarrollos digitales
</Heading>
<Text fontSize='2xl'>Vision</Text>
<Text noOfLines={[1, 2, 3]}>
Ser lideres en solucuiones informaticas y servivios , ofrecionendo lo mas altos niveles de excelencia y profecionalismo en el desarrollo y manejo de software consolidadndo nuestro creciomiento e internacionalizacion.
Comprometica con la modernizacion de los procesos mejorando la eficacia de las empresas reflejando en nuestros servicios la creatividad ,el desarrollo y el conocimiento sufifiente para resolver las necesidades y problemas de nuestros clientes.
</Text>
<Text fontSize='2xl'> Mision</Text>
<Text noOfLines={[1, 2, 3]}>
Proveer soluciones de software aportando al crecimiento tecnologico para ello trabajamos en un ambiente de calidad total , donde el servicio ofrecido es el reflejo de nuestra eficacia y eficiencia empresarial que busca satisfacer las necesidades de nuestros clientes y distribuidores en terminos de tecnologia , innovacion y confiabilidad.
</Text>
</div>
)
}
export default Empresa;